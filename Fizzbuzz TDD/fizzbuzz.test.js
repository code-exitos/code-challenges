const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  it('should return one when passed one', () => {
    const res = fizzBuzz(1)
    expect(res).toBe(1)
  })

  it('should return two when passed two', () => {
    const res = fizzBuzz(2)
    expect(res).toBe(2)
  })

  it('should return fizz when passed three', () => {
    const res = fizzBuzz(3)
    expect(res).toBe('fizz')
  })

  it('should return buzz when passed five', () => {
    const res = fizzBuzz(5)
    expect(res).toBe('buzz')
  })
  it('should return fizz when passed six', () => {
    const res = fizzBuzz(6)
    expect(res).toBe('fizz')
  })
  it('should return buzz when passed ten', () => {
    const res = fizzBuzz(10)
    expect(res).toBe('buzz')
  })
  it('should return fizzbuzz when passed fifteen', () => {
    const res = fizzBuzz(15)
    expect(res).toBe('fizzbuzz')
  })
  it('should return fizzbuzz when passed thirty', () => {
    const res = fizzBuzz(30)
    expect(res).toBe('fizzbuzz')
  })
})
