//creating an array and displaying all values
let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

//using a foreach loop to loop through each value and display one at a time
birds.forEach(function(bird){
    console.log(bird)
})

// a for loop to achieve the same result
for (let x = 0; x < birds.length; x++){
    let bird = birds[x]
    console.log(x, bird) // also displays x which serves as a counter
}

//example of .replace which substitutes one value for another
let text = 'The classes are itec 1150, itec 1250, itec 1260'
let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

//how to replaced all values with a desired other
let replacedAll = text.replace(/itec/g,'ITEC')
console.log(replacedAll)


// I could not get this regex statement to run correctly

//let message = 'The classes are 1150, 1250, 2560'
//let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
//console.log(replaceRegex)

