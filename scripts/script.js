
let course1 = {
    code : "ACIT 1620",
    name : "Web Fundamental Technologies",
}

let course2 = {
    code : "ACIT 1515",
    name : "Scripting for IT",
}

let course3 = {
    code : "MATH 1310",
    name : "Technical Math for IT",
}

const courseList = [course1,course2,course3];

let userInput;
do{
    userInput = prompt("Enter a 4 digit");

}while(userInput.length != 4 || isNaN(userInput) === true)

let isCourseThere = false;

for (let item of courseList){

    courseCodeNum = item.code.split(" ")

    if(userInput === courseCodeNum[1]){
        console.log(`Yes I am taking the course: ${item.code} - ${item.name}`)
        isCourseThere = true
    }
}
 
if (!isCourseThere){
    let newCourse ={
        code : userInput,
        name : null,
    }
    courseList.push(newCourse)
    console.log(`Added ${userInput} to list of courses.`)
}

console.log(courseList)





