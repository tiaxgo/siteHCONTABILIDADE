window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY; // Posição de rolagem
    let image = document.querySelector(".image-container");

    // Verifica se a largura da tela é menor ou igual a 768px (versão mobile)
    if (window.matchMedia("(max-width: 1000px)").matches) {
        // Para mobile: A altura será ajustada entre 0 e um valor fixo (exemplo: 30vh)
        let newHeight = Math.max(20 - scrollPosition / 20, 0); // Limita o mínimo em 0vh
        image.style.height = `${newHeight}vh`;
    } else {
        // Para desktop: Mantém a lógica original
        let newHeight = Math.max(37 - scrollPosition / 20, 20); // Limita o mínimo em 20vh
        image.style.height = `${newHeight}vh`;
    }

    // Adiciona uma transição suave
    image.style.transition = "height 0.3s ease";
});
