//Three ways of creating variables
let color = 'red'
var size = 'medium'
const language = 'JavaScript' //cannot be changed

//integer value type
let quanitity = 8
//floating point
let distance = 5.68
//string
let sentence = 'Hello there.'

//concatenating strings
console.log('There are ' + quanitity + ' balloons in the room.')

//More string concatentation
let temp = 79
console.log('Today the temperature is '+ temp + ' degrees outside.')

//temp conversion
let tempC = (temp - 32) * 5/9
console.log('The temperature outside is ' + tempC.toFixed(2) + ' degrees in celcius.')
