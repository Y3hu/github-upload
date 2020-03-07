const persistence = num => {
    let counter = 0 // initialize counter
    
    while(num.toString().length > 1){ // verified num is more than 1 digit
      num = num.toString().split("") // parse num into array if more than 1 digit
      num = multiplier(num) // multiply the nums in the array
      counter++ // add 1 to counter
    }
    return counter // return result
 }
 
 const multiplier = nums => nums.reduce( (a, b) => (a*b)) // reducer function that multiply the integers of the array