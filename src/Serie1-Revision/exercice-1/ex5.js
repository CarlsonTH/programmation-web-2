function deleteFind(character, obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && obj[key].includes(character)) {
        delete obj[key];
      }
    }
    return obj;
  }

const user1 = {
    fullname: "Marc Tremblay",
    username: "Furry99",
    password: "pa$$word"
  };

  console.log(deleteFind("9", user1))