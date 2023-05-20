const inquirer = require('inquirer');
const fs = require('fs');
const createSVG = require('./createSVG');
const path = require('path')


class CLI {
  constructor() {
    this.textColor = '';
    this.logoColor = '';
    this.shape = '';
    this.char = '';
  }
  run() {
    return inquirer
      .prompt([
        // {
        //   type: 'input',
        //   name: 'title',
        //   message: 'Please give your logo a title',
        // },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like your text to be? Please enter the color name or 6 digit hex code',
        },
        {
          type: 'input',
          name: 'logoColor',
          message: 'What color would you like your logo to be? Please enter the color name or 6 digit hex code',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Which shape would you like your logo to be in?',
          choices: ['square', 'triangle', 'circle']
        },
        {
          type: 'input',
          name: 'char',
          message: 'What three characters would you like to be inside the logo?',
          validate: (char) => char.length <= 3 || 'Please ensure you only type in up to 3 characters.'
        },
      ])
      .then(({ textColor, logoColor, shape, char }) => {
        this.textColor = `${textColor}`;
        this.logoColor = `${logoColor}`;
        this.shape = `${shape}`;
        this.char = `${char}`;
      })
      .then(() => fs.writeFileSync(path.join(process.cwd(), 'logo.svg'), createSVG(this.textColor, this.logoColor, this.shape, this.char)))
      .then(() => console.log(`Generated logo.svg`))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
