//import parent class, Shape
const Shape = require('../lib/shapes');

//Square class defined as child of Shape class
class Square extends Shape {
    constructor(logoColor){
    //shares this property with the parent class
        super(logoColor)
    }
    //render returns the SVG square code needed for a square
    render() {
       return  `<rect x="90" y="40" width="120" height="120" style="fill:${this.logoColor}" />`
      }
}

//export Square
module.exports = Square