function cubeNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return "Please enter a positive integer.";
    }
    const cube = number ** 3
    return  cube;
}
const number = 6;

const cubedNumber = cubeNumber(number);

console.log(cubedNumber);
