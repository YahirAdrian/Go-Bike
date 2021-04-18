(function(){
    class AccionesFormulario{
        constructor(){
            this.formulario = document.querySelector('#formulario');
            this.campos = document.querySelectorAll('.campo .text');
            this.submit = document.querySelector('#submit');
        }

        habilitarSubmit(){
            // this.submit.style.opacity = 1;
            this.submit.style.disabled= false;
        }

        deshabilitarSubmit(){
            // this.submit.style.opacity = 0.5;
            this.submit.style.disabled = true;
        }

        validarVacio(e){
            const alertEnCampo = e.target.parentNode.querySelector('.error');
            if(e.target.value === ''){ //Si el campo se queda vació
                const alert = document.createElement('span');
                alert.classList.add('error');
                alert.textContent = "Este campo no puede estar vacio, es obligatorio";
                if(!alertEnCampo){
                    //Si no hay un mensaje de error, entonces lo inserta
                    e.target.parentNode.appendChild(alert);
                    e.target.style.border = "1px solid red";
                }
            }else{
                if(alertEnCampo){
                    alertEnCampo.remove();
                    e.target.style.border = "1px solid black";
                }

                accionesFormulario.validarFormularioCompleto();
            }
        }

        validarFormularioCompleto(){
            const camposFormulario = document.querySelectorAll('.campo .text');
            const campoNombre = camposFormulario[0],
            campoApellido = camposFormulario[1],
            campoCorreo = camposFormulario[2],
            campoUsuario = camposFormulario[3],
            campoPassword = camposFormulario[4],
            checkTerminos = document.querySelector('#terminos'),
            checkPoliticas = document.querySelector('#politicas');

            const campos = [campoNombre, campoApellido, campoCorreo, campoUsuario, campoPassword, checkTerminos, checkPoliticas];

            //Evalua que todos los campos esten llenos
            const camposLlenos = campos.filter((campo)=>{
                if(campo.getAttribute('type') === "checkbox"){
                    if(campo.checked){return campo;}
                }else{
                    if(campo.value !== ''){return campo;}
                }
            });
            if(camposLlenos.length >= 7){
                accionesFormulario.habilitarSubmit();
            }else{
               accionesFormulario.deshabilitarSubmit();
            }
        }
    }

    const accionesFormulario = new AccionesFormulario();
    accionesFormulario.deshabilitarSubmit();
    accionesFormulario.campos.forEach((campo)=>{
        if(campo.getAttribute("type") === "checkbox"){
            campo.addEventListener('click', accionesFormulario.validarFormularioCompleto);
        }else{
            campo.addEventListener('input', accionesFormulario.validarVacio);
        }
    })
})();

//Arreglar el bug del formulario
//Talvez con un button type submit?