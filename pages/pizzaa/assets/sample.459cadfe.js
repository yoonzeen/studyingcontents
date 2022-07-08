import { m as K, a as L, i as G, b as W } from './image1.5edf7303.js';
import { g as J } from './index.2cd6c943.js';
var R = './assets/image2.3a323222.png',
    q = './assets/image3.e8eda0e0.png',
    E = './assets/image4.bab44171.png',
    I = './assets/bearkong.b4165dd5.png';
const U = (n, t, o) => {
        const e = new n.Group(),
            l = new n.Shape.Rectangle(new n.Rectangle(new n.Point(0, 0), new n.Size(1024, 768))),
            s = new n.Shape.Rectangle(new n.Rectangle(new n.Point(212, 184), new n.Size(600, 400))),
            c = new n.PointText(new n.Point(380, 400));
        if (
            ((l.fillColor = new n.Color('rgba(0,0,0,0.2)')),
            (s.fillColor = new n.Color('#fff')),
            (s.radius = 20),
            (c.fontSize = 25),
            (c.fontFamily = 'NanumSquareRound'),
            e.addChild(l),
            e.addChild(s),
            e.addChild(c),
            o)
        ) {
            const i = new n.Raster(I);
            e.addChild(i), (i.position = new n.Point(350, 300)), i.scale(0.5), (c.content = '\uC798\uD588\uC5B4~');
        } else if (t == 1) {
            const i = new n.Raster(I);
            e.addChild(i),
                (i.position = new n.Point(350, 300)),
                i.scale(0.5),
                (c.content = '\uB2E4\uC2DC \uD55C \uBC88 \uC798 \uCC3E\uC544\uBCF4\uC790!');
        } else {
            const i = new n.Raster(I);
            e.addChild(i),
                (i.position = new n.Point(350, 300)),
                i.scale(0.5),
                (c.content = '\uC870\uAE08 \uB354 \uC9D1\uC911\uD574\uC11C \uCC3E\uC544\uBCF4\uC790~');
        }
        return e;
    },
    j = (n, t) => {
        const o = { width: 97, height: 97 };
        return (
            (t.area.fillColor = new n.Color('#fff')),
            (t.area.strokeColor = new n.Color('#fff')),
            (t.area = new n.Shape.Rectangle(
                new n.Rectangle(new n.Point(t.area.position.x - o.width / 2, t.area.position.y - o.height / 2), new n.Size(o))
            )),
            (t.area.radius = 20),
            t
        );
    },
    O = (n) => {
        const t = new n.Shape.Rectangle(new n.Rectangle(new n.Point(0, 0), new n.Size(100, 100))),
            o = new n.PointText(new n.Point(11, 55)),
            e = new n.Group();
        return (
            (t.fillColor = new n.Color('#b7c334')),
            (t.radius = 50),
            (t.strokeColor = new n.Color('#e5e5e5')),
            (o.fontFamily = 'CookieRunRegular'),
            (o.content = '\uC815\uB2F5 \uD655\uC778'),
            (o.fontSize = 20),
            (o.fillColor = new n.Color('#fff')),
            e.addChild(t),
            e.addChild(o),
            (e.position = new n.Point(920, 680)),
            e
        );
    },
    Q = (n, t, o) => {
        if ((++o, t.every((e) => e.userAnswer.source === e.answer.source))) {
            const e = U(n, o, !0);
            setTimeout(() => {
                e.remove();
            }, 2e3);
        } else {
            t.filter((s) => s.userAnswer.source !== s.answer.source).forEach((s) => {
                j(n, s), (s.area.strokeColor = new n.Color('red')), (s.area.strokeWidth = 2), (s.userAnswer = null);
            });
            const l = U(n, o, !1);
            setTimeout(() => {
                l.remove();
            }, 2e3);
        }
    },
    H = (n, t) => {
        const o = new n.Group(),
            l = ((d) => {
                const m = new n.Group(),
                    A = 90,
                    g = new n.Shape.Rectangle(new n.Rectangle(new n.Point(0, 0), new n.Size(730 + A, 85))),
                    r = new n.PointText(new n.Point(A, 51));
                return (
                    (r.content = d),
                    (r.fontSize = 23),
                    (r.fontFamily = 'NanumSquareRound'),
                    (r.fillColor = new n.Color('#333')),
                    (g.fillColor = new n.Color('#f6f3ec')),
                    (g.radius = 40),
                    m.addChild(g),
                    m.addChild(r),
                    (m.position = new n.Point(540, 70)),
                    m
                );
            })(t),
            s = new n.Group(),
            c = new n.Raster(I);
        return (
            (l.opacity = 0),
            c.scale(0.5),
            (c.position = new n.Point(0, 0)),
            s.addChild(c),
            (s.position = new n.Point(40, 90)),
            (async () => {
                await K({ object: s, dx: 80, dy: 0, speed: 5 }), await L({ object: l, dx: 0, dy: 20, speed: 2 });
            })(),
            o.addChild(l),
            o.addChild(s),
            o
        );
    },
    N = [
        '\uADF8\uB9BC\uC774 \uB193\uC5EC\uC9C4 \uADDC\uCE59\uC5D0 \uB9DE\uAC8C, \uBE48 \uCE78\uC5D0 \uB4E4\uC5B4\uAC00\uC57C \uD560 \uAC83\uC744 \uB04C\uC5B4\uB2E4 \uB123\uC5B4 \uBD10!',
        '\uADF8\uB9BC\uC744 \uC138 \uAC1C\uC529 \uBB36\uC5B4\uBCF4\uBA74 \uADDC\uCE59\uC744 \uC27D\uAC8C \uCC3E\uC744 \uC218 \uC788\uC744\uAC70\uC57C!'
    ],
    V = (n) => {
        const t = new n.Shape.Rectangle(new n.Rectangle(new n.Point(0, 0), new n.Size(1024, 105)));
        t.fillColor = new n.Color('#acb547');
    },
    Z = (n, t) => {
        const o = new n.Group();
        return (
            t.forEach((e, l) => {
                let s;
                const i = new n.Shape.Rectangle(new n.Rectangle(new n.Point(40, 190 + 150 * l), new n.Size(945, 120)));
                switch (l) {
                    case 0: {
                        (s = '#f1cda2'), (i.fillColor = new n.Color(s));
                        break;
                    }
                    case 1: {
                        (s = '#bdd6ac'), (i.fillColor = new n.Color(s));
                        break;
                    }
                    case 2: {
                        (s = '#d3e2f1'), (i.fillColor = new n.Color(s));
                        break;
                    }
                }
                (i.radius = 20), o.addChild(i);
            }),
            o
        );
    },
    F = ({ paper: n, rule: t, images: o, count: e, point: l }) => {
        const s = new n.Group(),
            c = 97,
            [i, d] = [c, c],
            A = (() => {
                let r = [];
                const f = t.length;
                for (let C = 0; C < e; C++) {
                    const S = C % f,
                        B = t[S];
                    r.push({ name: B, url: o[B] });
                }
                return r;
            })(),
            g = J({ startPoint: l, rows: 1, columns: 9, gap: { x: i + 5, y: 0 } });
        return (
            A.forEach(({ url: r }, f) => {
                const C = new n.Group(),
                    { x: S, y: B } = g[0][f],
                    y = new n.Shape.Rectangle(new n.Rectangle(new n.Point(S - i / 2, B - d / 2), new n.Size(i, d))),
                    b = new n.Raster(r);
                (y.fillColor = new n.Color('#fff')),
                    (y.radius = 20),
                    b.scale(0.4),
                    (b.position = new n.Point(S, B)),
                    C.addChild(y),
                    C.addChild(b),
                    s.addChild(C);
            }),
            s
        );
    },
    _ = ({ paper: n, images: t, point: o }) => {
        const [e, l] = [120, 120];
        t.forEach((s, c) => {
            const i = new n.Shape.Rectangle(new n.Rectangle(new n.Size(e, l))),
                d = new n.Path.Circle(new n.Point(o.x + c * e, o.y), 32);
            (i.position = new n.Point(o.x + c * e, o.y)), (d.fillColor = new n.Color('#e5e5e5')), i.addChild(d);
        });
    },
    v = ({ paper: n, url: t, point: o }) => {
        const e = new n.Raster(t);
        return e.scale(0.5), (e.position = new n.Point(o.x, o.y)), e;
    },
    $ = [G, R, q, E];
let k = 0;
const p = (n, t) => {
    t.forEach((o) => {
        const e = o.area,
            l = e.children[e.children.findIndex((c) => c.className === 'Shape')],
            s = e.children[e.children.findIndex((c) => c.className === 'Raster')];
        (l.fillColor = new n.Color('rgba(30,30,30,0.2)')), (s.visible = !1);
    });
};
function on({ paper: n }) {
    V(n);
    const t = H(n, N[k]),
        o = 512,
        e = 250,
        l = 150,
        s = new n.Group(),
        c = F({ paper: n, point: { x: o, y: e }, rule: ['1', '2', '2'], images: { 1: G, 2: R }, count: 9 }),
        i = F({ paper: n, point: { x: o, y: e + l * 1 }, rule: ['1', '2', '3'], images: { 1: E, 2: R, 3: q }, count: 9 }),
        d = F({ paper: n, point: { x: o, y: e + l * 2 }, rule: ['1', '2', '3', '4'], images: { 1: G, 2: R, 3: q, 4: E }, count: 9 }),
        m = [c, i, d],
        A = Z(n, m);
    s.addChild(A), s.addChildren(m);
    const g = 120,
        r = 330,
        f = 680;
    _({ paper: n, images: $, point: { x: r, y: f } });
    const C = v({ paper: n, url: G, point: { x: r, y: f } }),
        S = v({ paper: n, url: q, point: { x: r + g * 1, y: f } }),
        B = v({ paper: n, url: E, point: { x: r + g * 2, y: f } }),
        y = v({ paper: n, url: R, point: { x: r + g * 3, y: f } });
    let b = [
        { area: c.children[5], answer: y, userAnswer: null },
        { area: i.children[3], answer: B, userAnswer: null },
        { area: d.children[8], answer: C, userAnswer: null }
    ];
    const X = [C, S, B, y],
        D = O(n);
    p(n, b);
    const z = (u) => {
            const { target: a } = u,
                w = a.clone();
            a.bringToFront(), (w.onMouseDown = z), (w.onMouseDrag = T), (w.onMouseUp = (h) => M(h.target, b, h));
        },
        T = (u) => {
            const { target: a, delta: w } = u;
            u.preventDefault(), (a.position = new n.Point(a.position.x + w.x, a.position.y + w.y));
        },
        Y = (u, a) => {
            const w = u.bounds,
                h = a.bounds;
            return !!w.intersects(h);
        },
        M = (u, a, w) => {
            const { target: h } = w,
                P = a.find((x) => {
                    if (Y(u, x.area)) return x.area;
                });
            a !== null && P !== void 0
                ? (j(n, P),
                  (P.userAnswer = u),
                  (u.position = new n.Point(P.area.position.x, P.area.position.y)),
                  u.scale(0.8),
                  a.every((x) => x.userAnswer !== null) &&
                      (W({ object: D, repeatCount: 100 }),
                      (D.onMouseUp = () => {
                          Q(n, a, k),
                              (D.onFrame = () => {
                                  (D.opacity = 1), stop();
                              }),
                              k++;
                      }),
                      setTimeout(() => {
                          k > 1 && (t.remove(), H(n, N[1]));
                      }, 2800)),
                  (h.onMouseDown = null),
                  (h.onMouseDrag = null),
                  (h.onMouseUp = null))
                : h.remove();
        };
    X.forEach((u) => {
        (u.onMouseDown = z), (u.onMouseDrag = T), (u.onMouseUp = (a) => M(u, b, a));
    });
}
export { on as default };
