function printInt(small, large) {
    let obj = {}
    for (let i = small; i <= large; i++) {
      obj[i] = i%2===0 ? "even" : "odd"
    }
    return obj
  }