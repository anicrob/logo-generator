//imports
const Circle = require('../lib/circle');
const Square = require ('../lib/square');
const Triangle = require('./triange');

//function to return the proper data depending on the shape input
function createSVG(textColor,logoColor, shape, char){
    if(shape === 'circle'){
        const newCircleLogo = new Circle(logoColor)
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${newCircleLogo.render()}<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${char}</text></svg>`
        } else if (shape === 'square'){
            const newSquareLogo = new Square(logoColor)
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${newSquareLogo.render()}<text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${char}</text></svg>`
        } else {
            const newTriangleLogo = new Triangle(logoColor)
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${newTriangleLogo.render()}<text x="150" y="145" font-size="40" text-anchor="middle" fill="${textColor}">${char}</text></svg>`
    }
}

//exporting createSVG 
module.exports = createSVG