const {sum, compileAndroidCode, myFunction} = require('./sum');


//test block
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

//MATCHERS Notes
//For general info on matchers, use this link: https://jestjs.io/docs/using-matchers
// .toBe can be used with numbers(as seen above), string and boolean
// .toBe uses Object.is to test exact equality.
// .toEqual checks the value of an object
// .toEqual recursively checks every field of an object or array.
// You can also test for the opposite of a matcher using not, see sample test for not

//sample test for .toBe
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
test('one plus two is three', () => {
    expect(1 + 2).toBe(3);
});

//sample test for .toEqual
// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });

//sample test for not
// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).not.toBe(0);
//         }
//     }
// });

//samples tests for truthiness
//NOTE on Truthiness matcher
// Use this link: https://jestjs.io/docs/using-matchers#truthiness

//sample test for .toBeFalsy
test('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});
test('zero is falsy', () => {
    const n = 0;
    expect(n).toBeFalsy();
});
test('false is falsy', () => {
    const n = false;
    expect(n).toBeFalsy();
});

//sample test for .toBeTruthy
test('null is not truthy', () => {
    const n = null;
    expect(n).not.toBeTruthy();
});
test('zero is not truthy', () => {
    const n = 0;
    expect(n).not.toBeTruthy();
});
test('one is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});
test('true is truthy', () => {
    const n = true;
    expect(n).toBeTruthy();
});

test('false is not truthy', () => {
    const n = false;
    expect(n).not.toBeTruthy();
});


//Note: Error handling
// If you want to test whether a particular function throws an error when it's called, use toThrow.
// The function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
//sample test for .toThrow
test('compiling android goes as expected with no argument in .toThrow', () => {
    expect(() => compileAndroidCode()).toThrow();
  });

test('compiling android goes as expected with "Error" argument in .toThrow', () => {
    expect(() => compileAndroidCode()).toThrow(Error);
});

test('compiling android goes as expected with string argument in .toThrow', () => {
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  });
test('compiling android goes as expected with string argument part in .toThrow', () => {
  
    // You can also use a string that must be contained in the error message or a regexp
   expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
test('compiling android goes as expected with regex argument in .toThrow', () => {
    // Or you can match an exact error message using a regexp like below
   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });

  //another example
  test('throws on invalid input', () => {
    expect(() => {
            myFunction('invalidInput')
        }).toThrow();
  })