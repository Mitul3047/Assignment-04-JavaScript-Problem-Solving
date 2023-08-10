function findAddress(obj){
    if(typeof obj !== "object"){
        return "please provide me a valid object"
    }else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street+","+house+","+society;
    }

}

// const obj1 = {
//     name: "mehedy",
//     age:26,
//     email:"abc@gmail.com"
// }

// console.log(findAddress(obj1))
const obj1 = {street: 10, house: "15A", society: "Earth perfect"};
const address1 = findAddress(obj1);
console.log(address1); 

const obj3 = {street: 10};
const address3 = findAddress(obj3);
console.log(address3); 

const obj2 = {street: 10, society: "Earth perfect"};
const address2 = findAddress(obj2);
console.log(address2); 
  
console.log(findAddress(8))