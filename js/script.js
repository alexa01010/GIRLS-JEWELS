///função para o slide mexer sozinho
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    NextImage();
}, 3000)

function NextImage(){
    count++;
    if(count>4){
    count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});






const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");


menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});
