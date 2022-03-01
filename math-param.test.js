const {addition} = require('./addition')
const {division} = require('./division')

test.each([[3,4,7],[5,-10,-5],[0,2,2]])(
    'a+b=c', (a,b,expected) =>{
        expect(addition(a,b)).toBe(expected)
    }
)

test.skip('1+7=8',()=>{
    expect(addition(1,7)).toBe(8)
})

test.each([[6,3,2],[10,-5,-2],[2,2,1]])(
    'a/b=c', (a,b,expected) =>{
        expect(division(a,b)).toBe(expected)
    })


test.skip('0/7=1',()=>{
    expect(division(1,7)).toBe(8)
})