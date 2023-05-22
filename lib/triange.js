//import parent class, Shape
const Shape = require('./shapes');

//Triangle class defined as child of Shape class
class Triangle extends Shape {
    constructor(logoColor){
        //shares this property with the parent class
        super(logoColor)
    }
    //render returns the SVG triangle code needed for a triangle
    render() {
       return  `<polygon points="150,18 244,182 56,182" fill="${this.logoColor}"/>`
      }
}

//export Triangle
module.exports = Triangle
