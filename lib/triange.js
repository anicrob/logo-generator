//import parent class, Shape
const Shape = require('./shapes');

//Triangle class defined as child of Shape class
class Triangle extends Shape {
    constructor(textColor,logoColor, char){
        //shares these properties with the parent class
        super(textColor,logoColor, char)
    }
    //render returns the SVG code needed for a triangle
    render() {
       return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="${this.logoColor}"/><text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.char}</text></svg>`
      }
}

//export Triangle
module.exports = Triangle
