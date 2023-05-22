//import Circle
const Circle = require('./circle');

//testing that the SVG will be created as a green circle 
describe('Circle', ()=>{
    test('should render svg for green circle element', ()=> {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="green" />`
        const circle = new Circle('green');
        const outputSVG = circle.render();
       expect(outputSVG).toEqual(expectedSVG);
    })
})