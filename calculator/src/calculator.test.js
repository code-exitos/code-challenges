
const {convertToDecimal} = require('./calculator');
describe('Roman Calculator', () => {
  it('should return one if the value is I', () => {
      expect(convertToDecimal('I')).toBe(1)
  })

  it('should return two if the value is II', () => {
    expect(convertToDecimal('II')).toBe(2)
  })

  it('should return three if the value is III', () => {
    expect(convertToDecimal('III')).toBe(3)
  })

  it('should returnn four if the value is IV', () => {
    expect(convertToDecimal('IV')).toBe(4)
  })

  it('should returnn five if the value is V', () => {
    expect(convertToDecimal('V')).toBe(5)
  })

  it('should returnn six if the value is VI', () => {
    expect(convertToDecimal('VI')).toBe(6)
  })

  it('should returnn seven if the value is VII', () => {
    expect(convertToDecimal('VII')).toBe(7)
  })

  it('should returnn eight if the value is VIII', () => {
    expect(convertToDecimal('VIII')).toBe(8)
  })

  it('should returnn nineten if the value is IX', () => {
    expect(convertToDecimal('IX')).toBe(9)
  })

  it('should returnn seven if the value is X', () => {
    expect(convertToDecimal('X')).toBe(10)
  })

  it('should return fifty if the value is L', () => {
    expect(convertToDecimal('L')).toBe(50)
  })

  it('should return forty-five if the value is XLV', () => {
    expect(convertToDecimal('XLV')).toBe(45)
  })
})
