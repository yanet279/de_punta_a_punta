let menuHamburguesa = document.querySelector('.menu-hamburguesa');


menuHamburguesa.addEventListener('click', e => {
    const superior = document.querySelector('.hamburguesa-button__superior') 
    superior.classList.toggle('hamburguesa-button__superior--close')
    const medio = document.querySelector('.hamburguesa-button__medio') 
    medio.classList.toggle('hamburguesa-button__medio--close')
    const inferior = document.querySelector('.hamburguesa-button__inferior') 
    inferior.classList.toggle('hamburguesa-button__inferior--close')
})

/////////////////////   CAROUSEL   /////////////////


function checkScreenWidth (){
    let carousel = document.querySelector("#carouselExampleIndicators")
    let imagenes= document.querySelectorAll(".imagenes")

    const anchoPantalla = window.innerWidth;
    if(anchoPantalla >= 910) {
        carousel.classList.remove("carousel","slide")
        imagenes.forEach(imagenes => imagenes.classList.remove("carousel-item"))
    }else {
        carousel.classList.add("carousel","slide")
        imagenes.forEach(imagenes => imagenes.classList.add("carousel-item"))
    }
}
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);