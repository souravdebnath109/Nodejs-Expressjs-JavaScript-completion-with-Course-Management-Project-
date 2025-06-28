var c=5;
function callvar(){
    var c =6;   //   c=6 ai func er baire kaj korbe na 
}
callvar();//call korlam func ke
console.log(c); // 5, because the var c inside the function is scoped to that function

let d=5;
function calllet(){
    let d =6;

}
calllet();
console.log(c);




// scope checking  by  block 

var e =5;
if(e==5)
{
    var e=6;
}
console.log(e);


let f =5;
if(f==5)
{
    let f=6;
}
console.log(f);