import { Engine, Circle } from 'tscratch';

const engine = Engine.init();

// Changable
const radius = 50;
const speed = 2;

// Circle
const circle = new Circle();

let theta = 0;

// Spin in circles forever
engine.setLoop('main', () => {

    circle.turn(2 * speed);
    circle.move(speed);
    circle.setRadius(radius * engine.sin(theta));

    theta = (theta + speed) % 360;
});