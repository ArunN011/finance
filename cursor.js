

const dot=document.querySelector(".cursor-dot");
const ring=document.querySelector(".cursor-ring");

let mouseX=0;
let mouseY=0;

let ringX=0;
let ringY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

dot.style.left=mouseX+"px";
dot.style.top=mouseY+"px";

});

function animateCursor(){

ringX+=(mouseX-ringX)*0.15;
ringY+=(mouseY-ringY)*0.15;

ring.style.left=ringX+"px";
ring.style.top=ringY+"px";

requestAnimationFrame(animateCursor);

}

animateCursor();


document.querySelectorAll("a,button,.btn").forEach(el=>{

el.addEventListener("mouseenter",()=>{

ring.classList.add("cursor-hover");

});

el.addEventListener("mouseleave",()=>{

ring.classList.remove("cursor-hover");

});

});



document.addEventListener("mousedown",()=>{

ring.classList.add("cursor-click");

});

document.addEventListener("mouseup",()=>{

ring.classList.remove("cursor-click");

});