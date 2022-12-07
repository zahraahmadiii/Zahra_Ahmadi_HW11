let btn3=document.querySelector(".btn3")
// console.log(btn3);
let first=document.querySelector(".first")
// console.log(first);
// let signIn=document.querySelector(".signIn")
// console.log(signIn);
let second=document.querySelector(".second")
// console.log(second);
let btn4=document.querySelector(".btn4")
// console.log(btn4);
let h3=document.querySelector(".h3")

btn3.addEventListener("click",function(){
  
    first.style.display="none";
    second.style.display="block";
})
btn4.addEventListener("click",function(){
    
    second.style.display="none";
    first.style.display="block";
})