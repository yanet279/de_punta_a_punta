let menuHamburguesa = document.querySelector('.menu-hamburguesa');


menuHamburguesa.addEventListener('click', e => {
    const superior = document.querySelector('.hamburguesa-button__superior') 
    superior.classList.toggle('hamburguesa-button__superior--close')
    const medio = document.querySelector('.hamburguesa-button__medio') 
    medio.classList.toggle('hamburguesa-button__medio--close')
    const inferior = document.querySelector('.hamburguesa-button__inferior') 
    inferior.classList.toggle('hamburguesa-button__inferior--close')
})