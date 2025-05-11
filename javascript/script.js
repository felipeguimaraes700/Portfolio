function openNav(){
    document.querySelector(".abrir").style.display = "none";
    document.querySelector(".fechar").style.display = "block";
    document.querySelector(".links-nav-mobile").style.width = "50%";
}

function closeNav(){
    document.querySelector(".abrir").style.display = "block";
    document.querySelector(".fechar").style.display = "none";
    document.querySelector(".links-nav-mobile").style.width = "0%";
}

document.addEventListener("click", function(event) {
    const menu = document.querySelector(".links-nav-mobile");
    const abrirBtn = document.querySelector(".abrir");
    const fecharBtn = document.querySelector(".fechar");

    // Verifica se o menu está visível
    const menuAberto = menu.style.width !== "0%" && window.innerWidth <= 800;

    // Se o menu está aberto e o clique foi fora dele e fora dos ícones
    if (
        menuAberto &&
        !menu.contains(event.target) &&
        !abrirBtn.contains(event.target) &&
        !fecharBtn.contains(event.target)
    ) {
        closeNav(); // Fecha o menu
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        // Fecha o menu mobile e reseta ícones ao redimensionar
        document.querySelector(".links-nav-mobile").style.width = "0%";
        document.querySelector(".abrir").style.display = "none";
        document.querySelector(".fechar").style.display = "none";
    } else {
        document.querySelector(".abrir").style.display = "block";
    }
});

// scroll no nav
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  });

  //animações das divs
  AOS.init()