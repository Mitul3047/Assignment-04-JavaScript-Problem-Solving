function cubeNumber(number) {
    if (typeof number !== "number" || number < 0) {
        return "Please enter a positive integer.";
    }
    const cube = Math.pow(number, 3)
    return cube;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Input a String";
    }
    if (string1.indexOf(string2) !== -1) {
        return true;
    } else {
        return false
    }
}

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

function findAddress(obj){
    if(typeof obj !== "object"){
        return "please provide me your address"
    }else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street+","+house+","+society;
    }

}

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length ==0) {
      return "Give me your vangti  taka"; 
    }
  
    let totalChange = 0;
    for (let i = 0; i < changeArray.length; i++) {
      totalChange += changeArray[i];
    }
  
    if (totalChange >= totalDue) {
      return true;
    }
    
    return false;
  }


