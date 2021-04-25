import Calcul from "../../src/calcul";

describe("calcul",()=>{
it('must return 20',()=>{
    let a:number=10;
    let b:number=10;
    let expected=20;
    expect(Calcul.summingNumbers(a,b)).toBe(expected);
});
});