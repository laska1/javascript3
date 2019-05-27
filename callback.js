


function callbackTest(bool,first,second)
{
if(bool==true){
   first();
   
}
else{
    second();
    
}


}
callbackTest(false,function first(){
    console.log(true);
},function second(){
    console.log(false);
});




