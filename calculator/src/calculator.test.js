const convertToDecimal = require('./calculator');

describe('Roman Calculator', () => {
  it('should return one', () => {
    expect(convertToDecimal()).toBe(1)
  })

  it('should return one if the value is I', () => {
      expect(convertToDecimal(1)).toBe('I')
  })


})
