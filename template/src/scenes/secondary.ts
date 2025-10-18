import { RegularPolygon } from 'tscratch';

// Setup
const hexagon = new RegularPolygon({
    sides: 6,
    radius: 75,
    color: 'black',
    scene: 'secondary'
});

hexagon.point(55);

// Loop
export default () => {
    hexagon.move(-1);
};