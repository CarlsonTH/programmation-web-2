function showInputAttributes() {
    
    const inputElement = document.getElementById("password");
    const attributesArray = Array.from(inputElement.attributes);
    const attributesObj = {};
    attributesArray.forEach((attribute) => {
      attributesObj[attribute.name] = attribute.value;
    });
  
    console.log(attributesObj);
  }
  