// const Component = require('../lib/component.js');

// describe('Component', () => {
//   test('should throw error if render() is called', () => {
//     const component = new Component();
//     const err = new Error('Child class must implement a render() method.')
//     expect(component.render).toThrow(err);
//   });
// });

const Shape = require('./shapes.js');

describe('Shapes', () => {
    test('should throw error if render() is called', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.');
        expect(shape.render).toThrow(err)
    })
})