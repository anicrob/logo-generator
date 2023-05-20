//importing modules
const inquirer = require('inquirer');
const fs = require('fs');
const createSVG = require('./createSVG');
const path = require('path')

// this class asks the prompts & creates the file
class CLI {
  //building out properties here
  constructor() {
    this.textColor = '';
    this.logoColor = '';
    this.shape = '';
    this.char = '';
  }
  //asking questions
  run() {
    return inquirer
      .prompt([
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
          //validation to ensure only 3 or less characters are entered
          validate: (char) => char.length <= 3 || 'Please ensure you only type in up to 3 characters.'
        },
      ])
      //chaining the thens

      //adding values gathered from prompts to the class properties
      .then(({ textColor, logoColor, shape, char }) => {
        this.textColor = `${textColor}`;
        this.logoColor = `${logoColor}`;
        this.shape = `${shape}`;
        this.char = `${char}`;
      })
      //creating the file in the current working directory with a name of logo.svg and with data returned from createSVG
      .then(() => fs.writeFileSync(path.join(process.cwd(), 'logo.svg'), createSVG(this.textColor, this.logoColor, this.shape, this.char)))
      .then(() => console.log(`Generated logo.svg`))
      //to catch errors
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}
//exporting CLI
module.exports = CLI;
