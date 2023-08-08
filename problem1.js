function cubeNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return "Please enter a positive integer.";
    }
    const cube = Math.pow(number, 3)
    return  cube;
}

const cubedNumber = cubeNumber(3);
console.log(cubedNumber);

const result = cubeNumber(4);
console.log(result); 

const result2 = cubeNumber(3.14);
console.log(result2); 

const result3 = cubeNumber("hello");
console.log(result3); 

const result4 = cubeNumber(-3);
console.log(result4); 



