const randomHexColor = () => {
    return Math.random().toString(16).slice(2, 8).padStart(7, "#");
  };
  console.log(randomHexColor());
  
  