setInterval(()=>{
    let clock=document.querySelector(".clock-body");

    let hour=String(new Date().getHours()).padStart(2,"0")+":";
    
    let minute=String(new Date().getMinutes()).padStart(2,"0")+":";
    
    let second=String(new Date().getSeconds()).padStart(2,"0");
    let time=hour+minute+second;
    clock.innerHTML=time;

    
    

    
},1000)

let catMove=document.querySelector(".cat");
catMove.style.animation = "none";
catMove.offsetHeight;
let seconds=new Date().getSeconds();
catMove.style.animation = `moveCorners 60s linear infinite`;
catMove.style.animationDelay = `-${seconds}s`;
console.log(seconds)