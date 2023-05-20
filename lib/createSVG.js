//imports
const Circle = require('../lib/circle');
const Square = require ('../lib/square');
const Triangle = require('./triange');

//function to return the proper data depending on the shape input
function createSVG(textColor,logoColor, shape, char){
    if(shape === 'circle'){
        const newCircleLogo = new Circle(textColor,logoColor, char)
        return `${newCircleLogo.render()}`
        } else if (shape === 'square'){
            const newSquareLogo = new Square(textColor,logoColor, char)
            return `${newSquareLogo.render()}`
        } else {
            const newTriangleLogo = new Triangle(textColor,logoColor, char)
            return `${newTriangleLogo.render()}`
    }
}

//exporting createSVG 
module.exports = createSVG