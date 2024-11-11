window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY; // Posição de rolagem
    let image = document.querySelector(".image-container");
  
    // A altura da imagem vai diminuir conforme a rolagem
    let newHeight = Math.max(37 - scrollPosition / 20, 20); // A imagem vai diminuindo até sumir
    image.style.transition = "height 0s ease"; // Adiciona uma transição suave 
    image.style.height = `${newHeight}vh`; // Aplica a nova altura
  });
  