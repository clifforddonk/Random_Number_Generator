const mybutton=document.getElementById("mybut");
const mylabel1=document.getElementById("mylabel1");
const mylabel2=document.getElementById("mylabel2");
const mylabel3=document.getElementById("mylabel3");
const mylabel4=document.getElementById("mylabel4");

const min=1;
const max=6;
mybutton.onclick=function(){
    let randonNum1=Math.floor(Math.random()*max)+min;
    let randonNum2=Math.floor(Math.random()*max)+min;
    let randonNum3=Math.floor(Math.random()*max)+min;
    let randonNum4=Math.floor(Math.random()*max)+min;
    mylabel1.textContent=randonNum1;
    mylabel2.textContent=randonNum2;
    mylabel3.textContent=randonNum3;
    mylabel4.textContent=randonNum4;

}
