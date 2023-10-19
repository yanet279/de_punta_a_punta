const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos= {
    nombre:false,
    apellido:false,
    correo:false,
    
}

function validaFormulario(e) { 
   switch (e.target.name){
    case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
    case "apellido":
        validarCampo(expresiones.nombre, e.target, 'apellido');
        break;
    case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
    }
   
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validaFormulario);
    input.addEventListener('blur',validaFormulario);
})

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const terminos = document.getElementById("terminos")
    if(campos.nombre && campos.apellido && campos.correo && terminos.checked) {   
            formulario.reset();
            document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo")
            document.querySelectorAll(".formulario__grupo-correcto").forEach((icono)=>{
                icono.classList.remove('formulario__grupo-correcto')});
    }else{
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }    
    
            

});

let menuHamburguesa = document.querySelector('.menu-hamburguesa');


menuHamburguesa.addEventListener('click', e => {
    const superior = document.querySelector('.hamburguesa-button__superior') 
    superior.classList.toggle('hamburguesa-button__superior--close')
    const medio = document.querySelector('.hamburguesa-button__medio') 
    medio.classList.toggle('hamburguesa-button__medio--close')
    const inferior = document.querySelector('.hamburguesa-button__inferior') 
    inferior.classList.toggle('hamburguesa-button__inferior--close')
})

