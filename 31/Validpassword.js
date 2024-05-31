const simplePasswordValidator = (password) => {
    const smc = "abcdefghijklmnopqrstuvwxyz";
    const bgc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sarr = smc.split("");
    const barr = bgc.split("");
    let result = false;
    if (password.length >= 8) {
      for (let i = 0; i < sarr.length; i++) {
        if (password.includes(sarr[i]) && password.includes(barr[i])) {
          for (let i = 0; i < 11; i++) {
            if (password.includes(i)) {
              result=true
            }
          }
        }
      }
      console.log(result)
    } else console.log(result);
  };
  
  simplePasswordValidator("sunnyof1hemSaninthe");
  
  