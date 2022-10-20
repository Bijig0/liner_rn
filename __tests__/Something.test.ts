const myFn = (a:number, b:number) => {
    return a + b
}

it('adds two numbers', () => {
    expect(myFn(1,2)).toBe(3)
})
