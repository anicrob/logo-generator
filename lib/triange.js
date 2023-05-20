const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(textColor,logoColor, char){
        super(textColor,logoColor, char)
    }
    render() {
       return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="${this.logoColor}"/><text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.char}</text></svg>`
      }
}

module.exports = Triangle
