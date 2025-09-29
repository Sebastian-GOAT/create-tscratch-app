import { Engine, RegularShape } from 'tscratch';

const engine = Engine.init();

// Setup

const rect = new RegularShape({
    sides: 8,
    radius: 75,
    color: 'red'
});
engine.addSprites(rect);

rect.goTo(-100, 200);
rect.point(55);

// Loop

engine.loop = () => {
    rect.move(3);
};