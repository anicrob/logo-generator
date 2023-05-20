//import parent class, Shape
const Shape = require('../lib/shapes');

//Square class defined as child of Shape class
class Square extends Shape {
    constructor(textColor,logoColor, char){
    //shares these properties with the parent class
        super(textColor,logoColor, char)
    }
    //render returns the SVG code needed for a square
    render() {
       return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" style="fill:${this.logoColor}" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.char}</text></svg>`
      }
}

//export Square
module.exports = Square