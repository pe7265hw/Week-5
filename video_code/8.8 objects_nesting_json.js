//creating an object with properties w/ name-value pair
let user = {username: 'Jacob', password: 'superSecretPassword'}

//Reading object
console.log(user.username)
console.log(user['username'])

//using variable for name
let whatProperty = 'password'
console.log(user[whatProperty])

//chaning password using both methods
user.password = 'Whizzos Butter'
console.log(user)
user['password'] = 'Dead Crab'
console.log(user)

user.email = 'jacob@email.com'
console.log(user.email)

//nested objects
var workers = {
    username: 'Jacob',
    password: 'password',
    email: 'jacob@job.com',
    roles: ['not feeling', 'imaginitive at the moment'],
    salary: 180000,
    contact:{
        phone:'564-985-3325',
        office: '57b',
        location: 'Minneapolis'
    }
}
//accessing object items
console.log(workers)

console.log(workers.roles)
console.log(workers['roles'])
console.log(workers.roles[0]) //first role

console.log(workers.roles.forEach(function(worker){ //all items in roles array
    console.log(worker)
}))

workers.contact.office = '68c' //change office
console.log(workers.contact.office)

user.email = 'jacob@minneapolis.edu' //adding another attribute even though not initially defined

