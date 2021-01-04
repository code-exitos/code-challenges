const baseball = require('./baseball');

describe('Baseball', () => {
    it('should return one when passed one', () => {
        expect(baseball(1)).toBe(1)
    })
})