# 🐱 TScratch

## 🚀 Quick Start

```ts
import { Engine, Rectangle } from 'tscratch';

// Initialize engine
const engine = Engine.init();

// Create a rectangle sprite
const rect = new Rectangle();

// Move it to the center
rect.goTo(0, 0);

// Animate in the game loop
engine.loop = () => {
  rect.changeX(2); // move right every frame
};
```
## 🎨 Example: Multiple Sprites

```ts
import { Engine, Rectangle } from 'tscratch';

const engine = Engine.init();

const redBox = new Rectangle();

redBox.setColor('red');
redBox.goTo(-100, 0);

const blueBox = new Rectangle();

blueBox.setColor('blue');
blueBox.goTo(100, 0);

engine.loop = () => {
  redBox.changeX(1);
  blueBox.changeX(-1);
};
```

## 🛠️ API Overview

### Engine

- `Engine.init()` → get the singleton instance
- `engine.removeSprites(...sprites)` → removes sprites from the stage
- `engine.setMaxFramesPerSecond(FPS)`→ sets the maximum FPS
- `engine.loop = () => { ... }` → game loop logic
- `engine.refresh()` → redraw all sprites
- `await engine.wait(ms)` → wait some time (miliseconds)
- `engine.toRadians(rad)` → converts degrees to radians
- `engine.toDegrees(deg)` → converts radians to degrees
- `engine.mouseX` → returns the current x position of the mouse relative to the canvas
- `engine.mouseY` → returns the current y position of the mouse relative to the canvas

### Sprite (abstract)

- `goTo(x, y)` → move to coordinates
- `setX(x)` / `setY(y)` → set position
- `changeX(dX)` / `changeY(dY)` → change position
- `turn(deg)` / `point(deg)` → change / set direction
- `move(steps)` → move in the direction it's pointing

### Rectangle (example sprite)

- Has `width`, `height`, and `color` properties
- Draws a rectangle centered on `(x, y)`

### Pen

- `down()` → starts drawing
- `up()` → stops drawing
- `dot()` → draws a single dot

### Canvas

- `setScale` → sets the scale of the stage
- `setAspectRatio` → sets the aspect ratio of the stage

## License

MIT © 2025 sebastian-goat, see [LICENSE](./LICENSE)