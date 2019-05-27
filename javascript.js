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
//4
function hasProperty(std){
    if(student.hasOwnProperty(std)){
        return true;
    }
    else{
        return false;
    }
}
console.log(hasProperty("class"));
//5 

var output = Object.entries(student).map(([key, value]) => ({key,value}));
console.log(output);


