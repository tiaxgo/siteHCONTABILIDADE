window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY; // Posição de rolagem
    let image = document.querySelector(".image-container");
  
    // A altura da imagem vai diminuir conforme a rolagem
    let newHeight = Math.max(100 - scrollPosition / 5, 0); // A imagem vai diminuindo até sumir
    image.style.height = `${newHeight}vh`; // Aplica a nova altura
  });
  