const container = document.getElementById("meteor-container");

function createMeteor(){

const meteor = document.createElement("div");
meteor.classList.add("meteor");

meteor.style.left = Math.random()*window.innerWidth+"px";
meteor.style.top = "-100px";

meteor.style.animationDuration = (Math.random()*1+1)+"s";

container.appendChild(meteor);

setTimeout(()=>{
meteor.remove();
},2000);

}

setInterval(createMeteor,500);