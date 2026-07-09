// ===============================
// NAVBAR SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .service-card, .contact-card"
).forEach(card => {

    card.classList.add("fade-up");

    observer.observe(card);

});
//==============================
// MENU
//==============================

const menu=document.querySelector(".menu-toggle");

const links=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

links.classList.toggle("active");

});

//==============================
// BACK TO TOP
//==============================

const back=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

back.classList.add("show");

}else{

back.classList.remove("show");

}

});

back.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//==============================
// HERO TYPING
//==============================

const typing=document.getElementById("typing");

const texts=[

"Discord Developer",

"Web Developer",

"Minecraft Developer",

"UI Designer"

];

let txt=0;

let char=0;

let deleting=false;

function type(){

const current=texts[txt];

if(!deleting){

typing.textContent=current.substring(0,char++);

if(char>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent=current.substring(0,char--);

if(char===0){

deleting=false;

txt=(txt+1)%texts.length;

}

}

setTimeout(type,deleting?45:90);

}

type();

//==============================
// COUNTERS
//==============================

document.querySelectorAll(".hero-stats h3").forEach(counter=>{

const target=counter.innerText;

if(target.includes("+")){

const value=parseInt(target);

let i=0;

const interval=setInterval(()=>{

i++;

counter.innerText=i+"+";

if(i>=value){

clearInterval(interval);

}

},50);

}

});
