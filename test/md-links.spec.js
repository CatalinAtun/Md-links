const mdLinks = require('../main.js');
const chai = require('chai')

describe('mdLinks', () => {

  it('Deberia ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  })
})
