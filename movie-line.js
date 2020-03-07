const tickets = peopleInLine => {
  let minusBills = 0, mediumBills = 0, result = true
    peopleInLine.every( bill => {
      if(bill === 25) {
        minusBills++
        return result = true
      }
      if(bill === 50) {
        if(minusBills >= 1){
          mediumBills++
          minusBills--
          return result = true
        }
        else return result = false
      }
      
      if(bill === 100) {
        if(mediumBills >= 1 && minusBills >= 1){
          mediumBills--
          minusBills--
          return result = true
        }else if(minusBills >= 3){
          minusBills = minusBills-3
          return result = true
        }else return result = false
      }
    })
    
    return (result) ? "YES" : "NO"
  }