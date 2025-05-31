import { product } from "../../../product"

test("Test Case to verify the product of 2 numbers ",() => {
    const result = product(7,3);
    const result2 = product(6,3);
    //Assertion
    expect(result).toBe(21);
    expect(result2).toBe(18);
    
})