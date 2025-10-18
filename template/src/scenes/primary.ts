import { RegularPolygon } from 'tscratch';

// Setup
const octagon = new RegularPolygon({
    sides: 8,
    radius: 75,
    color: 'red',
    scene: 'primary'
});

octagon.point(55);

// Loop
export default () => {
    octagon.changeX(1);
};