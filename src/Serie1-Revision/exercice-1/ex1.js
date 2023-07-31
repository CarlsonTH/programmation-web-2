
function copyObject(object) {
    if (typeof object !== 'object' || object === null) {
      return object; 
    }
  
    let copy = Array.isArray(object) ? [] : {}; 
  
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        copy[key] = copyObject(object[key]); 
      }
    }
  
    return copy;
  }
  
  
  const user1 = {
    fullname: "Marc Tremblay",
    username: "Furry99",
    password: "pa$$word"
  };
  

  const user2 = copyObject(user1);
  user2.fullname = "Francis Roberge"

  console.log("user1:", user1);
  console.log("user2:", user2);
  