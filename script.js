const button = document.querySelector('.btn');
const input = document.querySelector('.input_text');
const h1 = document.querySelector('.heading');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


red.addEventListener('click',() =>{
    red.style.backgroundColor = "red";
    red.style.color = "white";
})
blue.addEventListener('click',() =>{
    blue.style.backgroundColor = "blue";
    blue.style.color = "white";
})
green.addEventListener('click',() =>{
    green.style.backgroundColor = "green";
    green.style.color = "white";
})
yellow.addEventListener('click',() => {
    yellow.style.backgroundColor = "yellow";
})


button.addEventListener('click',() =>{
   let username = input.value || "Guest";
   h1.textContent = "Hello" +" "+ username;

})