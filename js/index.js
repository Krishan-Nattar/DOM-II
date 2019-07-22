

// Your code goes here


// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick



const nav = document.querySelector('nav');
nav.addEventListener('mouseenter',(event)=>{
    nav.style.transition="1s";
    nav.style.backgroundColor = "pink";
});

nav.addEventListener('mouseleave',(event)=>{
    nav.style.transition="1s";
    nav.style.backgroundColor = "white";
});

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', (event)=>{
    logo.style.transition="1s";
    logo.style.fontSize = "7rem";
});

logo.addEventListener('mouseout', (event)=>{
    logo.style.transition="1s";
    logo.style.fontSize = "4rem";
});

const introImg = document.querySelector('.intro img');

introImg.addEventListener("drag", (event)=>{
    introText.style.transition = "2s";
    introText.style.color = "blue";
});

introImg.addEventListener("dragend", (event)=>{
    introText.style.transition = "2s";
    introText.style.color = "black";
});



const introText = document.querySelector('.intro p');

let introTextWords = introText.innerText;

introText.addEventListener("dblclick", (event)=>{
    let introTextInner = introText.innerText;
    let textInterval = setInterval(()=>{
        introText.innerText = introTextInner;
        introTextInner = introTextInner.slice(0,-1);
        if(introTextInner.length == 0){
            introText.innerText = introTextWords;
            clearInterval(textInterval);
        }
    }, 50);
});

const contentImg = document.querySelectorAll('.content-section img');

logo.addEventListener('transitionstart', (event)=>{
    // contentImg[0].style.transform = "transateX(2000px)";
    contentImg[0].style.transition = "4s";
    contentImg[0].style.width = "40%";
});

logo.addEventListener('transitionend', (event)=>{
    contentImg[0].style.transition = "2s";
    contentImg[0].style.width = "100%";
    // console.log("transitionend");
});

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima aliquid, voluptatem deleniti nesciunt repellat eius explicabo culpa qui vero ex laborum sit at fuga repudiandae assumenda amet nisi hic."



const focusP = document.querySelectorAll('.focus p');

focusP[0].addEventListener('contextmenu', (event)=>{
    focusP[0].innerText = lorem;
});

focusP[1].addEventListener('click', (event)=>{
    focusP[1].innerText = "Propagation has been stopped!";
    event.stopPropagation()
});

let propa = document.querySelector('.text-content.focus');

propa.addEventListener('click', (event)=>{
    TweenMax.to(focusP, 6, {color:"red", backgroundColor: "purple"});
});


