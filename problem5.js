function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length ==0) {
      return "Give vangti me taka"; 
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
  
  const changeArray =[8,2,3] ; 
  const totalDue = 10;
  
  const Pay = canPay(changeArray, totalDue);
  
  console.log(Pay); // true
  