//import Square
const Square = require('./square');

///testing that the SVG will be created as a green square 
describe('Square', ()=>{
    test('should render svg for green square element', ()=> {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" style="fill:green" />`
       const square = new Square('green');
       const outputSVG = square.render();
       expect(outputSVG).toEqual(expectedSVG);
    })
})