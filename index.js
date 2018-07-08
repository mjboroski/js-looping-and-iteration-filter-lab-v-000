function findMatching(list, name){
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch(){
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(){
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
