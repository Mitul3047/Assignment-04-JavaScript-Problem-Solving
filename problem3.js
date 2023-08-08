function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Invalid Input";
    }
    
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }
    
    if (arr[0] === arr[1]) {
        return "equal";
    }
    
    if (arr[0] > arr[1]) {
        return [arr[0], arr[1]];
    } else {
        return [arr[1], arr[0]];
    }
}


console.log(sortMaker([5, 8])); 
console.log(sortMaker([3, 3])); 
console.log(sortMaker([-2, 7])); 
