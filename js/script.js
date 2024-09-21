const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});

///função para o slide mexer sozinho

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    NextImage();
}, 5000)

function NextImage(){
    count++;
    if(count>4){
    count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}









