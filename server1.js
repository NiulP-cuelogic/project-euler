function gen (v, a, b, c, d) {
    var op = ['+', '-', '*', '/'];
    for (var i in op) {
        for (var j in op) {
            for (var k in op) {
                var e1 = '((a' + op [i] + 'b)' + op [j] + 'c)' + op [k] + 'd'
                var e2 = '(a' + op [i] + 'b)' + op [j] + '(c' + op [k] + 'd)';
                var e3 = '(a' + op [i] + '(b' + op [j] + 'c))' + op [k] + 'd'
                var e4 = 'a' + op [i] + '((b' + op [j] + 'c)' + op [k] + 'd)';
                var e5 = 'a' + op [i] + '(b' + op [j] + '(c' + op [k] + 'd))'
                v [eval(e1)] = true;
                v [eval(e2)] = true;
                v [eval(e3)] = true;
                v [eval(e4)] = true;
                v [eval(e5)] = true;
            }
        }
    }
}

function num (a, b, c, d) {
    var v = {};
    gen (v, a, b, c, d);
    gen (v, a, b, d, c);
    gen (v, a, c, b, d);
    gen (v, a, c, d, b);
    gen (v, a, d, b, c);
    gen (v, a, d, c, b);
    gen (v, b, a, c, d);
    gen (v, b, a, d, c);
    gen (v, b, c, a, d);
    gen (v, b, c, d, a);
    gen (v, b, d, a, c);
    gen (v, b, d, c, a);
    gen (v, c, a, b, d);
    gen (v, c, a, d, b);
    gen (v, c, b, a, d);
    gen (v, c, b, d, a);
    gen (v, c, d, a, b);
    gen (v, c, d, b, a);
    gen (v, d, a, b, c);
    gen (v, d, a, c, b);
    gen (v, d, b, a, c);
    gen (v, d, b, c, a);
    gen (v, d, c, a, b);
    gen (v, d, c, b, a);
    var n = 1;
    while (v [n]) n ++;
    return n - 1;
}

function main () {
    var m = 0;
    var s = '';
    for (var a = 1; a <= 6; a ++) {
        for (var b = a + 1; b <= 7; b ++) {
            for (var c = b + 1; c <= 8; c ++) {
                for (var d = c + 1; d <= 9; d ++) {
                    var v = num (a, b, c, d);
                    if (v> m) {
                        m = v;
                        s = "" + a + b + c + d;
                        // console.log(s);
                    }
                }
            }
        }
    }
    return s;
}

console.log ('ANS:' + main ());
