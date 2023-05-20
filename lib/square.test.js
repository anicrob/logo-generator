//import Square
const Square = require('./square');

///testing that the SVG will be created as a green square with white text of ARN
describe('Square', ()=>{
    test('should render svg for green square element with white text of ARN', ()=> {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" style="fill:green" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="white">ARN</text></svg>`
       const square = new Square('white', 'green', 'ARN');
       const outputSVG = square.render();
       expect(outputSVG).toEqual(expectedSVG);
    })
})