import { Engine, Pen, Perlin2D, Square } from 'tscratch';

// Constants
const size = 450;
const detail = 10;
const tileCount = 100;
const scrollSpeedX = 3;
const scrollSpeedY = -7;

const tileSize = size / tileCount;

const engine = Engine.init();

// Sprites
const s = new Square({ sideLength: tileSize, hidden: true });
const pen = new Pen;

const perlin = new Perlin2D;

// Scrolling
let offsetX = 0, offsetY = 0;

// Grid rendering
engine.setLoop('main', () => {

    pen.eraseAll();

    for (let y = 0; y < tileCount; y++) {
        for (let x = 0; x < tileCount; x++) {
            s.goTo(
                -size / 2 + x * tileSize,
                size / 2 - y * tileSize
            );
            const pixel = perlin.get(x / tileCount * detail - offsetX, y / tileCount * detail + offsetY) * 255;
            s.setColor(`rgb(${pixel}, ${pixel}, ${pixel})`);
            pen.stamp(s)
        }
    }

    // Increment offset
    const dt = engine.getDeltaTime();

    offsetX += 0.1 * scrollSpeedX * dt;
    offsetY += 0.1 * scrollSpeedY * dt;
});