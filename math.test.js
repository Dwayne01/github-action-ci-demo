//The operation should return the sum of two numbers and

const {addition} = require('./addition')

test('2+3 = 5', ()=>{
    expect(addition(2,3)).toBe(5)
});

const {division} = require('./division')

test('2/2 = 1', ()=>{
    expect(division(2,2)).toBe(1)
});