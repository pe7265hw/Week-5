//creating an array of animals
let animals = ['duck', 'bear', 'squirrel']
//displaying values by position
let first_animal = animals[0]
animals[2]= 'mouse'
console.log(animals)
console.log(animals[1])
console.log(animals[10000])

//chaning values
animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

//adding a value to end
animals.push('elephant')
console.log(animals)

//adding a value to the beginning
animals.unshift('deer')
console.log(animals)

//removes the first element and returns removed item
let firstAnimal = animals.shift()
console.log(firstAnimal)

//removes last item and returns it
let lastAnimal = animals.pop()
console.log(lastAnimal)

//reverses array
animals.reverse()
console.log(animals)

//alphabetically sorts array
animals.sort()
console.log(animals)

//displays length of array as integer value
let numberOfAnimals = animals.length
console.log(numberOfAnimals)

//checks if item does not exist in array by check for result of -1
console.log(animals.indexOf('giraffe'))
    if(animals.indexOf('walrus')== -1) {
        console.log('No walrus, womp womp.')
    }

//checking for item in array by value
if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

//joining items in array by value
console.log(animals.join('*'))

//for each loop to change all values in array to uppercase
animals.forEach(function(animal){
    console.log(animal.toUpperCase())
})

//for each loop to display the length of each animal name in array
animals.forEach(function(animal){
    console.log(animal.length)
})

// setting the name length of each animal to values of a new array
let animalNameLength = [] 

animals.forEach(function(animal){
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)