//6
var fruits=["apple","orange","banana","peach","ananas","strawberry"];

function findInArray(aValue){

    var elem=fruits.find(function(element){
        if(aValue==element){
            return aValue;
        }
     } 
 );
return elem;

}
console.log(findInArray("app"));

//7
for (var element in fruits )
console.log(fruits[element]);
//8
console.log(fruits.length);
