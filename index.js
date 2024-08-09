
let popup = document.querySelector(".popup");
document.querySelector('.menu').addEventListener("click",(e)=>{
    popup.style.display = "block";
})

let skillstab = document.querySelector('.skillstab');
let edutab = document.querySelector('.edutab');

document.querySelector('.skills').addEventListener("click",(e)=>{
    skillstab.style.display="block";
    edutab.style.display="none";
    document.querySelector('.skills').style.color = "red";
    document.querySelector('.edu').style.color = "aqua";
})

document.querySelector('.logo').addEventListener('mouseenter',(e)=>{
    document.querySelector('.photoback1').style.transform = 'rotate(10deg)'; 
    document.querySelector('.photoback2').style.transform = 'rotate(-10deg)';
    document.querySelector('.logo').style.border = '2px solid blue'
})

document.querySelector('.logo').addEventListener('mouseleave',(e)=>{
    document.querySelector('.photoback1').style.transform = 'rotate(0)';
    document.querySelector('.photoback2').style.transform = 'rotate(0)';
     document.querySelector('.logo').style.border = 'none'
})

document.querySelector('.edu').addEventListener("click",(e)=>{
    skillstab.style.display="none";
    edutab.style.display="block";
      document.querySelector('.edu').style.color = "red";
      document.querySelector('.skills').style.color = "aqua";
})

const cursorInfo = document.querySelector('body');

var cursor = document.querySelector(".cur");

cursorInfo.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px";
   cursor.style.top = dets.y+"px";
})
