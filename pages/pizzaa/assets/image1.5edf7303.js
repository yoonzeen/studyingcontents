const M = ({ object: a, resolve: s }) => {
        (a.onFrame = null), s();
    },
    _ = ({ object: a, repeatCount: s = 1, speed: t = 1 }) =>
        new Promise((i) => {
            let o = 0.025 * t,
                n = 0;
            a.onFrame = () => {
                a.opacity >= 1 && (n === s && M({ object: a, resolve: i }), (n += 1), (o = -o)),
                    a.opacity < 0.3 && (o = -o),
                    (a.opacity += o);
            };
        }),
    d = ({ object: a, dx: s = 0, dy: t = 0, speed: i = 1 }) =>
        new Promise((o) => {
            let [n, r] = [0, 0];
            const [m, h] = [Math.abs(s), Math.abs(t)],
                y = m + h,
                [l, p] = [(s / y) * i, (t / y) * i];
            a.onFrame = () => {
                (n += Math.abs(l)), (r += Math.abs(p)), n >= m && r >= h && M({ object: a, resolve: o });
                const { x, y: e } = a.position;
                (a.position.x = x + l), (a.position.y = e + p);
            };
        }),
    f = ({ object: a, rotate: s = 0, speed: t = 1 }) =>
        new Promise((i) => {
            const o = s < 0 ? -t : t;
            let n = 0;
            a.onFrame = () => {
                (n += Math.abs(o)), n >= Math.abs(s) && M({ object: a, resolve: i }), a.rotate(o);
            };
        }),
    w = ({ object: a, dx: s = 0, dy: t = 0, speed: i = 1 }) =>
        new Promise((o) => {
            let [n, r] = [0, 0];
            const [m, h] = [Math.abs(s), Math.abs(t)],
                y = m + h,
                [l, p] = [(s / y) * i, (t / y) * i];
            a.onFrame = () => {
                (n += Math.abs(l)), (r += Math.abs(p)), n >= m && r >= h && M({ object: a, resolve: o });
                const { x, y: e } = a.position;
                (a.position.x = x + l), (a.position.y = e + p), (a.opacity += 0.05 * i);
            };
        });
var F = './assets/image1.ad13c938.png';
export { w as a, _ as b, F as i, d as m, f as r };
