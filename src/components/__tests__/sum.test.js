import { sum } from "../sum";

test("testing sum function", () => {
    const result = sum(2, 2);

    //Assertion
    expect(result).toBe(4);
});