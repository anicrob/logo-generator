//import parent class, Shape
const Shape = require('../lib/shapes');

//Circle class defined as child of Shape class
class Circle extends Shape {
    constructor(logoColor){
        //shares this property with the parent class
        super(logoColor)
    }
    //render returns the SVG circle code needed for a circle
    render() {
       return  `<circle cx="150" cy="100" r="80" fill="${this.logoColor}" />`
      }
}

//export Circle
module.exports = Circle