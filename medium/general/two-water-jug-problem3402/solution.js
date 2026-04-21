class Solution {
    minSteps(m, n, d) {

        function gcd(a, b) {
            while (b !== 0) {
                let t = b;
                b = a % b;
                a = t;
            }
            return a;
        }

        if (d > Math.max(m, n)) return -1;
        if (d % gcd(m, n) !== 0) return -1;

        function pour(fromCap, toCap) {
            let from = fromCap, to = 0, step = 1;

            while (from !== d && to !== d) {
                let move = Math.min(from, toCap - to);
                to += move;
                from -= move;
                step++;

                if (from === d || to === d) break;

                if (from === 0) {
                    from = fromCap;
                    step++;
                }

                if (to === toCap) {
                    to = 0;
                    step++;
                }
            }

            return step;
        }

        return Math.min(pour(m, n), pour(n, m));
    }
}