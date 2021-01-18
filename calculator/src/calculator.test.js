const {convertToDecimal, charToNumber}  = require('./calculator');
describe('Roman Calculator', () => {
  it('should return one', () => {
    expect(convertToDecimal()).toBe(1)
  })

  it('should return one if the value is I', () => {
      expect(charToNumber('I')).toBe(1)
  })

  it('should return two if the value is II', () => {
    expect(charToNumber('II')).toBe(2)
})
it('should return two if the value is II', () => {
  expect(charToNumber('II')).toBe(2)
})


})
