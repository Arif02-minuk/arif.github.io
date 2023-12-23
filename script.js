const container = document.querySelector('.container');
const question = document.getElementById('question');
const yesbtn = document.getElementById('yesbtn');
const nobtn = document.getElementById('nobtn');
const contReact = container.getBoundingClientRect();
const noReact = nobtn.getBoundingClientRect();

yesbtn.addEventListener("click", () => {
    container.style.background = "url(hug.gif)";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundSize = "contain";
    question.innerHTML = 'I LOVE YOU TOO'
    
})

nobtn.addEventListener("mouseover", () => {
     const w =
       Math.floor(Math.random() * (contReact.width - noReact.width)) + 1;
     const h =
       Math.floor(Math.random() * (contReact.height - noReact.height)) + 1;

     nobtn.style.left = w + "px";
     nobtn.style.top = h + "px";
})