function openLetter(){

document.getElementById("letter").style.display="flex";

}

function closeLetter(){

document.getElementById("letter").style.display="none";

}

/* floating hearts */

setInterval(function(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*25+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},400);