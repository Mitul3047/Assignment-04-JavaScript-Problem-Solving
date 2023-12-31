function findAddress(obj) {
    const address = [];
    const keys = ["street", "house", "society"];
  
    for (const key of keys) {
      if (key in obj) {
        address.push(obj[key]);
      } else {
        address.push("__");
      }
    }
  
    return address.join(",");
  }
  const obj1 = {street: 10, house: "15A", society: "Earth perfect"};
  const address1 = findAddress(obj1);
  console.log(address1); 

  const obj3 = {street: 10};
  const address3 = findAddress(obj3);
  console.log(address3); 
  
  const obj2 = {street: 10, society: "Earth perfect"};
  const address2 = findAddress(obj2);
  console.log(address2); 
    