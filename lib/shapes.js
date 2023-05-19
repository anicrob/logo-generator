class Shape {
    constructor(textColor,logoColor, char) {
      this.textColor = textColor;
      this.logoColor = logoColor;
      this.char = char;
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
  }
  
  module.exports = Shape;
  