window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY; // Posição de rolagem
    let image = document.querySelector(".image-container");

    // Verifica se a largura da tela é menor ou igual a 768px (versão mobile)
    if (window.matchMedia("(max-width: 1000px)").matches) {
        // Para mobile: A altura será ajustada entre 0 e um valor fixo (exemplo: 30vh)
        let newHeight = Math.max(29 - scrollPosition / 10, 0); // Limita o mínimo em 0vh
        image.style.height = `${newHeight}vh`;
    } else {
        // Para desktop: Mantém a lógica original
        let newHeight = Math.max(30 - scrollPosition / 10, 10); // Limita o mínimo em 20vh
        image.style.height = `${newHeight}vh`;
    }

    // Adiciona uma transição suave
    image.style.transition = "height 0.3s ease";
});

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY; // Posição de rolagem
    let image = document.querySelector(".image-container-servicos");

    // Verifica se a largura da tela é menor ou igual a 768px (versão mobile)
    if (window.matchMedia("(max-width: 1000px)").matches) {
        // Para mobile: A altura será ajustada entre 0 e um valor fixo (exemplo: 30vh)
        let newHeight = Math.max(30 - scrollPosition / 10, 0); // Limita o mínimo em 0vh
        image.style.height = `${newHeight}vh`;
    } else {
        // Para desktop: Mantém a lógica original
        let newHeight = Math.max(60 - scrollPosition / 10, 10); // Limita o mínimo em 20vh
        image.style.height = `${newHeight}vh`;
    }

    // Adiciona uma transição suave
    image.style.transition = "height 0.3s ease";
});



/* abaixo menu com overlay versao mobile*/ 

let btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})


/* AQUI PARA MUDAR A COR */
const changeThemeBtn =  document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");

})
