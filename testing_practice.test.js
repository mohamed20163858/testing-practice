const {stringLength , reverseString, Calculator, capitalize} = require('./testing_practice');
test('count the number of char inside any string test 1 ', () => {
    // test 1

    // arrange 
    let  word = 'hello momo'; // initialize the test word
    // act 
    let numberOfChars = stringLength(word); // run the function and get the test value
    // assert 
    expect(numberOfChars).toBe(10); // expected 10 actcual value must return 10
    
  });
  test('count the number of char inside any string test 2',()=> {
// test 2

    // arrange 
    let word = 'hello momo saleh'; // initialize the test word
    // act 
    // assert 
    expect(() => stringLength(word)).toThrow('conditions doesnot met!');// expected error message 'conditions doesnot met!'
  });
  
  test('test reverseString function', () => {
// arrange 
let word = 'hello momo';
let expected = 'omom olleh';
// act
let actual = reverseString(word);
// assert
expect(actual).toBe(expected);
  });
  
  describe('test calculator function',() =>{
    // arrange 
    let simpleCalculator = new Calculator();
    test('test add function test 1', () => {
        //arrange 
        const a = 5;
        const b = 10;
        // act 
        const sum = simpleCalculator.add(a , b);
        //assert 
        expect(sum).toBe(15);
    });
    test('test add function test 2', () => {
        //arrange 
        const a = '5';
        const b = 10;
        // act 
        //assert 
        expect(() => simpleCalculator.add(a , b)).toThrow('one of your input values is not a number');
    });
    test('test add function test 3', () => {
        //arrange 
        const a = 5;
        const b = 'momo';
        // act 
        //assert 
        expect(() => simpleCalculator.add(a , b)).toThrow('one of your input values is not a number');
    });
    test('test subtract function test 4', () => {
        //arrange 
        const a = 5;
        const b = 10;
        // act 
        const sum = simpleCalculator.subtract(a , b);
        //assert 
        expect(sum).toBe(-5);
    });
    test('test subtract function test 5', () => {
        //arrange 
        const a = '5';
        const b = 10;
        // act 
        //assert 
        expect(() => simpleCalculator.subtract(a , b)).toThrow('one of your input values is not a number');
    });
    test('test subtract function test 6', () => {
        //arrange 
        const a = 5;
        const b = 'momo';
        // act 
        //assert 
        expect(() => simpleCalculator.subtract(a , b)).toThrow('one of your input values is not a number');
    });
    
    test('test multiply function test 7', () => {
        //arrange 
        const a = 5;
        const b = 10;
        // act 
        const sum = simpleCalculator.multiply(a , b);
        //assert 
        expect(sum).toBe(50);
    });
    test('test multiply function test 8', () => {
        //arrange 
        const a = '5';
        const b = 10;
        // act 
        //assert 
        expect(() => simpleCalculator.multiply(a , b)).toThrow('one of your input values is not a number');
    });
    test('test multiply function test 9', () => {
        //arrange 
        const a = 5;
        const b = 'momo';
        // act 
        //assert 
        expect(() => simpleCalculator.multiply(a , b)).toThrow('one of your input values is not a number');
    });

    test('test divide function test 10', () => {
        //arrange 
        const a = 5;
        const b = 10;
        // act 
        const sum = simpleCalculator.divide(b , a);
        //assert 
        expect(sum).toBe(2);
    });
    test('test divide function test 11', () => {
        //arrange 
        const a = '5';
        const b = 10;
        // act 
        //assert 
        expect(() => simpleCalculator.divide(a , b)).toThrow('one of your input values is not a number');
    });
    test('test divide function test 12', () => {
        //arrange 
        const a = 5;
        const b = 0;
        // act 
        //assert 
        expect(() => simpleCalculator.divide(a , b)).toThrow('Error ! you can not divide by 0 ');
    });
  });

  test('test capitalize function', () => {
    // arrange 
    const string = 'hello mohamed!';// initialize the input
    // act 
    const output = capitalize(string); // run the function
    // assert 
    expect(output).toBe('Hello mohamed!');
  });

  test('test capitalize function part 2', () => {
    // arrange 
    const number = 1;// initialize the input
    // act 
    // assert 
    expect(() => capitalize(number)).toThrow('the given input isnot a string type!');
  });