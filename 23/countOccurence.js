const repetationCheck = (array) => {
    let output = {}
    for (const element of new Set([...array])) {
      output[element] = array.filter(item => item == element).length
    }
    return output
  }

  console.log(repetationCheck([1,2,2,3,1,4,2]));