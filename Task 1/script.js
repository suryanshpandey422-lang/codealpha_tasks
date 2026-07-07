const gallery=document.querySelectorAll(".card img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightImg");

const caption=document.getElementById("caption");

let current=0;

function openImage(img){

lightbox.style.display="flex";

lightImg.src=img.src;

caption.innerHTML=img.alt;

gallery.forEach((image,index)=>{

if(image==img)
current=index;

});

}

document.getElementById("close").onclick=function(){

lightbox.style.display="none";

}

document.getElementById("next").onclick=function(){

current++;

if(current>=gallery.length)
current=0;

show();

}

document.getElementById("prev").onclick=function(){

current--;

if(current<0)
current=gallery.length-1;

show();

}

function show(){

lightImg.src=gallery[current].src;

caption.innerHTML=gallery[current].alt;

}

document.addEventListener("keydown",function(e){

if(lightbox.style.display=="flex"){

if(e.key=="ArrowRight")
document.getElementById("next").click();

if(e.key=="ArrowLeft")
document.getElementById("prev").click();

if(e.key=="Escape")
lightbox.style.display="none";

}

});

function filterGallery(category){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

if(category=="all")
card.style.display="block";

else{

if(card.classList.contains(category))
card.style.display="block";

else
card.style.display="none";

}

});

}
