import { Engine, RegularPolygon, Text } from 'tscratch';

const engine = Engine.init();

// Setup

const octagon = new RegularPolygon({
    sides: 8,
    radius: 75,
    color: 'red'
});

octagon.point(55);

new Text({ content: 'Hello world!' });

// Loop

engine.loop = () => {
    octagon.move(1);
    octagon.turn(-5);
};