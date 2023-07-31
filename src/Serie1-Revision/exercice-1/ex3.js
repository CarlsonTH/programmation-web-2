function getRandomValue(object) {

    const keys = Object.keys(object);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    return object[randomKey];
  }
  
  const user1 = {fullname: "Marc Tremblay", username: "Furry99", password: "pa$$word"};
  
  console.log(getRandomValue(user1));


