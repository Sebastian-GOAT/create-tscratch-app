import { Engine, RegularPolygon } from 'tscratch';

const engine = Engine.init();

// Setup

const octagon = new RegularPolygon({
    sides: 8,
    radius: 75,
    color: 'red'
});

octagon.goTo(-100, 200);
octagon.point(55);

// Loop

engine.loop = () => {
    octagon.move(3);
};