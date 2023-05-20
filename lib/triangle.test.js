const Triangle = require('./triange');

describe('Triangle', ()=>{
    test('should render svg for green polygon element with white text of ARN', ()=> {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="green"/><text x="150" y="145" font-size="40" text-anchor="middle" fill="white">ARN</text></svg>`
       const triangle = new Triangle('white', 'green', 'ARN');
       const outputSVG = triangle.render();
       expect(outputSVG).toEqual(expectedSVG);
    })
})