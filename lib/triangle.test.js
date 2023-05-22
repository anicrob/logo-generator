//import Triangle
const Triangle = require('./triange');

//testing that the SVG will be created as a green triangle 
describe('Triangle', ()=>{
    test('should render svg for green polygon element', ()=> {
        const expectedSVG = `<polygon points="150,18 244,182 56,182" fill="green"/>`
       const triangle = new Triangle('green');
       const outputSVG = triangle.render();
       expect(outputSVG).toEqual(expectedSVG);
    })
})