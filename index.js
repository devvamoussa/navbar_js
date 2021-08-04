let menu = document.querySelector(".nav")
let iconRight= document.querySelector(".menu")

menu.addEventListener("click", toggleMenu)
function toggleMenu(){
    this.classList.toggle('active')
    console.log(this)
}