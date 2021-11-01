let isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {

  let takeOutIndex = 0;
  let dineInIndex = 0;
  let takeOutMaxIndex = takeOutOrders.length - 1;
  let dineInMaxIndex = dineInOrders.length -1;
  
  for (let i = 0; i < servedOrders.length; i++) {
    let currentOrder = servedOrders[i];
    
    if (takeOutIndex <= takeOutMaxIndex && takeOutOrders[takeOutIndex] === currentOrder) {
      takeOutIndex++;
    } else if (dineInIndex <= dineInMaxIndex && dineInOrders[dineInIndex] === currentOrder) {
      dineInIndex++;
    } else {
      return false;
    }
  }
  
  if (takeOutIndex !== takeOutOrders.length || dineInIndex !== dineInOrders.length) {
    return false
  }
  
  return true;
}
