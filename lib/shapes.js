//parent class defined
class Shape {
    //has 3 inputs/properties
    constructor(textColor,logoColor, char) {
      this.textColor = textColor;
      this.logoColor = logoColor;
      this.char = char;
    }
    //this is defined in the child classes, so here it would throw an error if an attempt was made to call it on the Shape class
    render() {
      throw new Error('Child class must implement a render() method.');
    }
  }
  
  //export Shape
  module.exports = Shape;
  