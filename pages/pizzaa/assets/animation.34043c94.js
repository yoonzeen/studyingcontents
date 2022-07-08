import { i as c, b as d, m as w, r as b } from './image1.5edf7303.js';
function C({ paper: o }) {
    const e = new o.Group(),
        n = new o.Raster(c);
    (n.position = new o.Point(100, 100)), n.scale(0.5), e.addChild(n);
    const i = new o.Group(),
        l = new o.Path.Rectangle(new o.Point(0, 190), new o.Size(100, 100));
    (l.fillColor = new o.Color('red')), i.addChild(l);
    const a = new o.Group(),
        t = new o.PointText(new o.Point(200, 160));
    (t.fillColor = new o.Color('black')), (t.fontSize = 20), (t.content = 'TEXT'), a.addChild(t);
    const s = async () => {
        await d({ object: e, repeatCount: 3 }),
            await w({ object: i, dx: 100, dy: 500, speed: 6 }),
            await b({ object: a, rotate: -80, speed: 10 });
    };
    console.log('a'), s(), console.log('b');
}
export { C as default };
