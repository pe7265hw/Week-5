// creates variables for input
let name = studentName.value
let gpa = studentGPA.value
let id = studentID.value

//blank array for possible errors
let errors = []

//conditional error statements which add messages if invalid data is returned
//I can't figure out why there is a stike through 'name'
if (!name) {
    errors.push('Enter student name')
}

if(!id) {
    errors.push('Enter student ID')
}

if(!gpa || gpa < 0 || gpa > 4) {
    errors.push('Enter GPA between 0 and 4')
}
// If any errors exist they are joined with a new line and displayed in a alert
if(errors.length > 0){
    let errorMsg = errors.join('\n')
    alert(errorMsg)
    return
}
