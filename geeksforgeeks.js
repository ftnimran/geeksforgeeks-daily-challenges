const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const readline = require("readline");
const { execSync } = require("child_process");
const TurndownService = require("turndown");

// ===== INPUT SETUP =====
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(q) {
  return new Promise((resolve) => rl.question(q, (ans) => resolve(ans)));
}

// ===== TURNDOWN (HTML TO MARKDOWN FORMAT) =====
const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

// 1. Code blocks ko clean pre format me rakhne ke liye
turndownService.addRule("codeBlock", {
  filter: ["pre"],
  replacement: (content) => `\n\`\`\`\n${content.trim()}\n\`\`\`\n`,
});

// 2. Mathematical powers (jaise 10^5) ko 105 banne se rokne ke liye
turndownService.addRule("sup", {
  filter: "sup",
  replacement: (content) => `<sup>${content}</sup>`,
});
turndownService.addRule("sub", {
  filter: "sub",
  replacement: (content) => `<sub>${content}</sub>`,
});

// 3. Images ko strictly Markdown me convert karne ke liye rule
turndownService.addRule("imageFix", {
  filter: "img",
  replacement: (content, node) => {
    const alt = node.getAttribute("alt") || "Problem Image";
    const src = node.getAttribute("src") || "";
    return src ? `\n\n![${alt}](${src})\n\n` : "";
  },
});

// ===== FIX MATH AND POWERS MANUALLY =====
function fixMathPower(text) {
  return text
    .replace(/([a-zA-Z0-9]+)\^([0-9]+)/g, "$1<sup>$2</sup>")
    .replace(/([a-zA-Z0-9]+)\^\{([0-9]+)\}/g, "$1<sup>$2</sup>")
    .replace(/10⁰/g, "10<sup>0</sup>")
    .replace(/10¹/g, "10<sup>1</sup>")
    .replace(/10²/g, "10<sup>2</sup>")
    .replace(/10³/g, "10<sup>3</sup>")
    .replace(/10⁴/g, "10<sup>4</sup>")
    .replace(/10⁵/g, "10<sup>5</sup>")
    .replace(/10⁶/g, "10<sup>6</sup>")
    .replace(/10⁷/g, "10<sup>7</sup>")
    .replace(/10⁸/g, "10<sup>8</sup>")
    .replace(/10⁹/g, "10<sup>9</sup>")
    .replace(/([a-zA-Z0-9])²/g, "$1<sup>2</sup>")
    .replace(/([a-zA-Z0-9])³/g, "$1<sup>3</sup>")
    .replace(/([a-zA-Z0-9])¹/g, "$1<sup>1</sup>")
    .replace(/([a-zA-Z0-9])⁴/g, "$1<sup>4</sup>")
    .replace(/([a-zA-Z0-9])⁵/g, "$1<sup>5</sup>")
    .replace(/([a-zA-Z0-9])⁶/g, "$1<sup>6</sup>")
    .replace(/([a-zA-Z0-9])⁷/g, "$1<sup>7</sup>")
    .replace(/([a-zA-Z0-9])⁸/g, "$1<sup>8</sup>")
    .replace(/([a-zA-Z0-9])⁹/g, "$1<sup>9</sup>")
    .replace(/([a-zA-Z0-9])⁰/g, "$1<sup>0</sup>");
}

function cleanEscapes(text) {
  return text
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]")
    .replace(/\\\(/g, "(")
    .replace(/\\\)/g, ")")
    .replace(/\\\*/g, "*")
    .replace(/\\_/g, "_")
    .replace(/\\`/g, "`");
}

// ===== AUTO DETECT GITHUB =====
function getRepoURL() {
  try {
    let url = execSync("git config --get remote.origin.url").toString().trim();
    if (!url) throw new Error();
    if (url.startsWith("git@")) {
      url = url.replace("git@github.com:", "https://github.com/");
    }
    return url.replace(".git", "");
  } catch {
    return "https://github.com/your-username/gfg-solutions"; 
  }
}

function getBranch() {
  try {
    return execSync("git branch --show-current").toString().trim() || "main";
  } catch {
    return "main";
  }
}

// ===== LANGUAGES & CATEGORIES =====
const langMap = {
  cpp: "solution.cpp",
  c: "solution.c",
  java: "Solution.java",
  python: "solution.py",
  js: "solution.js",
  csharp: "Solution.cs",
};

const displayLangMap = {
  cpp: "C++",
  js: "JavaScript",
};

function getCategory(title) {
  const titleLower = title.toLowerCase();
  const mapping = [
    ["dynamic programming", "DP"], ["segment tree", "Segment Tree"], ["graph", "Graph"],
    ["trie", "Trie"], ["tree", "Tree"], ["linked list", "Linked List"],
    ["sliding window", "Sliding Window"], ["two pointers", "Two Pointer"],
    ["binary search", "Binary Search"], ["greedy", "Greedy"], ["stack", "Stack"],
    ["queue", "Queue"], ["hash", "Hashing"], ["array", "Array"], ["string", "String"],
    ["math", "Math"],
  ];
  for (let [key, val] of mapping) {
    if (titleLower.includes(key)) return val;
  }
  return "General";
}

function safeName(text) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

function formatTitle(title, maxLength = 37) {
  title = title.replace(/\|/g, "");
  return title.length <= maxLength ? title : title.slice(0, maxLength - 3) + "...";
}

function getDate() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}-${mm}-${yy}`;
}

// ===== MAIN SCRAPE SCRIPT =====
(async () => {
  const urlInput = (await ask("GeeksforGeeks ka URL paste karein: ")).trim();
  const language = (await ask("Language: ")).trim().toLowerCase();

  if (!langMap[language]) {
    console.log("❌ Invalid language!");
    process.exit();
  }

  const displayLanguage = displayLangMap[language] || language.toUpperCase();
  const match = urlInput.match(/problems\/([^/?#]+)/);

  if (!match) {
    console.log("❌ Invalid URL! Sirf GFG problems ka URL daalein.");
    process.exit();
  }

  const slug = match[1];
  const gfgLink = `https://www.geeksforgeeks.org/problems/${slug}/1`;

  console.log("⏳ Background browser open ho raha hai (GFG security bypass ke liye)...");
  
  const browser = await puppeteer.launch({ 
    headless: "new", 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");

  console.log("⏳ Problem page load ho raha hai...");
  
  try {
    await page.goto(gfgLink, { waitUntil: "networkidle2", timeout: 60000 });

    const problemData = await page.evaluate(() => {
      let title = "Unknown Title";
      let difficulty = "Medium";
      let htmlContent = "";

      // 1. Title nikalna
      try {
        title = document.title.split("|")[0].replace(/problem$/i, "").trim();
      } catch(e) {}

      // 2. Difficulty nikalna
      try {
        const spans = Array.from(document.querySelectorAll('span'));
        const diffSpan = spans.find(s => ['School', 'Basic', 'Easy', 'Medium', 'Hard'].includes(s.innerText.trim()));
        if (diffSpan) difficulty = diffSpan.innerText.trim().toLowerCase();
      } catch(e) {}

      // 3. Problem Statement clean karke nikalna
      try {
        const contentNode = document.querySelector('.problem-statement') || 
                            document.querySelector('div[class*="problems_problem_content"]') ||
                            document.querySelector('div[class*="problemQuestion"]');
        if (contentNode) {
          
          const preTags = contentNode.querySelectorAll('pre');
          preTags.forEach(pre => {
            // --- FIX: IMAGE INSIDE CODE BLOCK ---
            // Agar image <pre> ke andar hai toh markdown use ignore kar dega.
            // Isliye hum image ko <pre> block se bahar nikal rahe hain.
            const imgsInsidePre = pre.querySelectorAll('img');
            imgsInsidePre.forEach(img => {
              const p = document.createElement('p');
              p.appendChild(img.cloneNode(true));
              // Insert image outside and below the <pre> tag
              pre.parentNode.insertBefore(p, pre.nextSibling);
              img.remove();
            });

            // GFG wale pre tags ke andar bold daal dete hain, usko hata rahe hain
            pre.innerHTML = pre.innerHTML.replace(/<\/?(strong|b|em|i)[^>]*>/gi, '');
          });

          // --- IMAGES FIX (LAZY LOADING FIX) ---
          const images = contentNode.querySelectorAll('img');
          images.forEach(img => {
            // Priority: img.src (absolute URL resolved by browser) > data-src > data-seturl
            let src = img.src || img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-seturl');
            
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
              try {
                src = new URL(src, window.location.origin).href;
              } catch(e) {}
            }
            
            // Clean up attributes that conflict with markdown generation
            img.setAttribute('src', src || '');
            img.removeAttribute('srcset'); // Remove srcset so turndown doesn't get confused
            img.removeAttribute('loading');

            if (!img.getAttribute('alt') || img.getAttribute('alt').trim() === '') {
              img.setAttribute('alt', 'Problem Image');
            }
          });

          htmlContent = contentNode.innerHTML;
        }
      } catch(e) {}

      return { title, difficulty, htmlContent };
    });

    await browser.close();

    let { title, difficulty, htmlContent } = problemData;

    if (!htmlContent || htmlContent.length < 20) {
      console.log("❌ Description nahi nikal paya. Please check URL.");
      process.exit();
    }

    const category = getCategory(title);
    const diffFormatted = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    const folder = path.join(diffFormatted, safeName(category), slug);
    fs.mkdirSync(folder, { recursive: true });
    const solutionPath = path.join(folder, langMap[language]);

    if (!fs.existsSync(solutionPath)) {
      fs.writeFileSync(solutionPath, `// ${title}\n// ${gfgLink}\n// Difficulty: ${diffFormatted}\n\n`);
    }

    console.log(`✅ Folder ready hai: ${folder}`);

    // ===== CONVERT HTML TO MARKDOWN =====
    let desc = turndownService.turndown(htmlContent);
    desc = fixMathPower(desc);
    desc = cleanEscapes(desc);

    // --- LEETCODE FORMAT CLEANUP ---
    desc = desc.replace(/\*\*Input:?\*\*/gi, 'Input:');
    desc = desc.replace(/\*\*Input\s?:?\*\*/gi, 'Input:');
    desc = desc.replace(/\*\*Output:?\*\*/gi, 'Output:');
    desc = desc.replace(/\*\*Output\s?:?\*\*/gi, 'Output:');
    desc = desc.replace(/\*\*Explanation:?\*\*/gi, 'Explanation:');
    desc = desc.replace(/\*\*Examples?:?\*\*/gi, 'Example:');

    // Code blocks (` ``` `) ke andar se extra markdown bold hata deta hai aur lines fix karta hai
    desc = desc.replace(/```([\s\S]*?)```/g, (match, code) => {
      let cleanCode = code.replace(/\*\*/g, '').replace(/__/g, '');
      
      // Fix: Agar Input, Output, Explanation ek hi line mein merge ho gaye hain
      cleanCode = cleanCode.replace(/(Output\s*:)/gi, '\n$1');
      cleanCode = cleanCode.replace(/(Explanation\s*:)/gi, '\n$1');
      
      return `\`\`\`\n${cleanCode.trim()}\n\`\`\``;
    });

    // Remove extra blank lines
    desc = desc.replace(/\n{3,}/g, "\n\n"); 

    const problemReadme = path.join(folder, "README.md");
    if (!fs.existsSync(problemReadme)) {
      fs.writeFileSync(
        problemReadme,
        `# ${title}\n\n🔗 [Problem Link](${gfgLink})\n📊 Difficulty: ${diffFormatted}\n📂 Category: ${category}\n\n## 📝 Description\n\n${desc}\n`
      );
    }

    console.log("📄 Problem README ban gaya (LeetCode Format mein)");

    try {
      execSync(`code -r "${solutionPath}"`);
    } catch {}

    await ask("VS Code me apna code paste aur save karein, phir ENTER dabayein...");

    const mainReadme = "README.md";
    if (!fs.existsSync(mainReadme)) {
      fs.writeFileSync(
        mainReadme,
        `# 🚀 GeeksforGeeks Solutions\n\n| # | Problem | Difficulty | Language | Category | Link | Date |\n|---|----------|------------|----------|----------|------|------|\n`
      );
    }

    let lines = fs.readFileSync(mainReadme, "utf-8").split("\n");

    if (lines.some((line) => line.includes(`/${slug}/`))) {
      console.log("⚠️ Yeh problem pehle se README me maujud hai.");
    } else {
      const count = lines.filter((l) => l.startsWith("|") && !l.includes("Problem") && !l.includes("---")).length;
      const repo = getRepoURL();
      const branch = getBranch();
      const solutionLink = `${repo}/tree/${branch}/${folder.replace(/\\/g, "/")}`;
      const row = `| ${count + 1} | ${formatTitle(title)} | ${diffFormatted} | ${displayLanguage} | ${category} | [Link](${solutionLink}) | ${getDate()} |`;

      fs.appendFileSync(mainReadme, row + "\n");
      console.log("📊 Main README update ho gaya!");
    }

    try {
      execSync("git add .");
      execSync("git diff --cached --quiet");
      console.log("⚠️ Koi naye changes commit ke liye nahi hain.");
    } catch {
      try {
        execSync(`git commit -m "Added ${title} | ${diffFormatted} | ${displayLanguage}"`);
        execSync("git push");
        console.log("🚀 Code successfully push ho gaya!");
      } catch {
        console.log("❌ Push fail ho gaya. Git connect check karein.");
      }
    }

  } catch (error) {
    console.log("❌ Request fail ho gayi. Internet connection check karein.");
    if (browser) await browser.close();
  }

  rl.close();
})();