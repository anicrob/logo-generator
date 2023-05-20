const Circle = require('./circle');

describe('Circle', ()=>{
    test('should render svg for green circle element with white text of ARN', ()=> {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ARN</text></svg>`
        const circle = new Circle('white', 'green', 'ARN');
        const outputSVG = circle.render();
       expect(outputSVG).toEqual(expectedSVG);
    })
})