//creating a function
function shout(text){
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

//calling the method with direct text and variable
console.log(shout('hello world'))
let message = shout('hey you there')
console.log(message)

//farenheit to celcius method with if else statement to determine decimal placement
function f_to_c(f, decimalPlaces) {
    let celsius = (f-32)*5/9
    if (decimalPlaces){
        return celsius.toFixed(decimalPlaces)
    }
    else {
        return celsius
    }
    
}
// logging temperature
let todayTemp = f_to_c(75, 4)
console.log(todayTemp)

// function to determine if a zipcode is of Minnesota origin using conditional statement
function isMinnesotaZip(code) {
    if (code >= 55001 && code < 56763){
        return true
    }
    else{
        return false
    }
}
//test of zipcode as string
console.log(isMinnesotaZip('55403'))

//function checking gpa using OR conditional statement
function gpaCheck(gpa) {
    if (gpa < 0 || gpa > 4){
        return false
    }
    return true
}
//testing different values
console.log(gpaCheck(5))
console.log(gpaCheck(-1))
console.log(gpaCheck(3.5))

//function concatenting a city and state abbrevation, changing state to uppercase
function cityState(city, state){
    console.log(city + ', ' + state.toUpperCase())
}
//logging to test
console.log(cityState('Minneapolis', 'mn'))

//template string function
function templateString(text){
    return `Just showing I know ${text} a template string.`
}
console.log(templateString('how to use'))