function findAddress(obj) {
    const address = [];
    const coma = ",";
    const keys = ["street", "house", "society"];
  
    for (const key of keys) {
      if (key in obj) {
        address.push(obj[key]);
      } else {
        address.push("__");
      }
  
      if (key !== keys[keys.length - 1]) {
        address.push(coma);
      }
    }
  
    return address;
  }
  
  const obj1 = {street: 10, house: "15A", society: "Earth perfect"};
  const address1 = findAddress(obj1);
  console.log(address1); 
  
  const obj2 = {street: 10, society: "Earth perfect"};
  const address2 = findAddress(obj2);
  console.log(address2); 
  