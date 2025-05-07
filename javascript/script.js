function openNav(){
    document.querySelector(".links-nav-mobile").style.width = "50%";
    document.querySelector(".abrir").style.display = "none";
    document.querySelector(".fechar").style.display = "block";
}

function closeNav(){
    document.querySelector(".links-nav-mobile").style.width = "0%";
    document.querySelector(".abrir").style.display = "block";
    document.querySelector(".fechar").style.display = "none";
}