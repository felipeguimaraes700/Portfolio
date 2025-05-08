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