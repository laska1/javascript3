function countSecond(){
    var seconds=5;
    var i ={
        "increment":function(){
            seconds++;
            console.log(seconds);
        },
       "reset":function(){
            seconds=0;
            console.log(seconds);
        }
    };
    return i;


}
var sekonda=countSecond();

console.log(sekonda.reset());