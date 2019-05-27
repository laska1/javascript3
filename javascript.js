//1
var student={
    "name":"Ana",
    "faculty":"F",
    "department":"I",
    "class":"J",
    "rollno":25
    
};
for (var value in student){
    console.log(student[value]);

}

//2
delete student.faculty;
console.log();
for (var value in student){
    console.log(student[value]);

}

//3
var olength=Object.keys(student).length
console.log(olength);
