const sum = (a, b) => {
    return a + b;
}

const compileAndroidCode = () => {
    throw new Error('you are using the wrong JDK!');
}

const myFunction = (input) => {
    if (typeof input !== 'number') {
        throw new Error("Invalid Input");
    }
    else{
        return input * 2
    }
}

module.exports = { sum, compileAndroidCode, myFunction };