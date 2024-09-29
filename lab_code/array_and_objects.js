/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

//console.log('For this lab, please write the code requested at the //TODO markers.')


let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

console.log('\n')

//latitudinal position found by argument
console.log(iss_location.iss_position.latitude)
//longitudinal position found by argument
console.log(iss_location.iss_position.longitude)

console.log('\n')
//conversion rates of various currencies to euroes
let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}
//adds swiis francs conversion rate to euros
rates["CHF"] = 1.1787
console.log(rates)

console.log('\n')
//Converting 100 euros to AUD rounding to two decimals
dollaryDoos = 100 * rates['AUD']
console.log(dollaryDoos.toFixed(2))
console.log('\n')

//A list of famous cats
let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]
console.log('\n')

//adding name: "Taylor Swift", cat "Meredith"
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
console.log(cats_and_owners)
console.log('\n')

// A loop for all cats and ownners and displays output with a template string
cats_and_owners.forEach(function(cat_and_owner){
    console.log(`Have you seen ${cat_and_owner.name}'s cat? It's name is ${cat_and_owner.cat}. `)
})
console.log('\n')

//Displaying  Gary Oldman's cat by array index
console.log(cats_and_owners[1].cat)
console.log('\n')

//Loops through list to find 'Gary Oldman' and prints cat name by string
cats_and_owners.forEach(function(cat_and_owner){
    if(cat_and_owner['name'] === 'Gary Oldman'){
        console.log(cat_and_owner['cat'])
    }
})


// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}
console.log('\n')
// Fullname of the literature prize winner
let literature =nobel_prize_winners_2017.prizes[3].laureates[0]
console.log(literature.firstname + ' ' + literature.surname)

console.log('\n')
//ID of each physics nobel laureate
let physicsWinners = nobel_prize_winners_2017.prizes[0].laureates
physicsWinners.forEach(function(physicsWinner){
    console.log(physicsWinner.firstname + ' ' + physicsWinner.surname)
})

console.log('\n')
// names of all prize categories
let prizeCategories = nobel_prize_winners_2017.prizes
prizeCategories.forEach(function(prizeCategory){
    console.log(prizeCategory.category)
})

console.log('\n')
// total number of prize categories
let prizes = nobel_prize_winners_2017.prizes
let counter = 0
prizes.forEach(function(prize){
    prize.category
    counter ++
})
console.log(counter)

console.log('\n')

//total number of laureates
// I know I am doing this one incorrectly but I cannot figure out how to do a correct nested for loop
let prize = nobel_prize_winners_2017.prizes
let newCounter = 0

for(x=0;x<prize.length;x++){
    prize[x]
    for(y=0;y<prize.length;y++){
        prize[x][y]
        newCounter++
        }  
}
console.log(newCounter)
 

