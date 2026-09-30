/* ============================================================================
   contacto.js — Home Rent Solution
   DSY1104 Desarrollo Full Stack II — Evaluación Parcial N° 1

   Validación del formulario de contacto (RF-06 y RF-07).
   Cada campo se revisa al salir de él y otra vez al enviar el formulario.
   Si algo está incompleto o incorrecto, se muestra un mensaje que explica
   cómo corregirlo. Como en esta etapa no hay backend, el envío es simulado:
   si todo es válido, se muestra una confirmación y se limpia el formulario.
   ========================================================================== */

(function () {
    'use strict';

    var formulario = document.getElementById('form-contacto');
    if (!formulario) { return; }

    var mensajeExito = document.getElementById('mensaje-exito');
    var contador     = document.getElementById('contador-mensaje');
    var LIMITE_MENSAJE = 500;

    /* -----------------------------------------------------------------------
       Reglas de validación
       Cada regla recibe el valor del campo y devuelve el texto del error,
       o una cadena vacía si el valor es correcto.
       ----------------------------------------------------------------------- */
    var reglas = {

        nombre: function (valor) {
            if (valor === '') { return 'Ingresa tu nombre.'; }
            if (valor.length < 3) { return 'El nombre debe tener al menos 3 caracteres.'; }
            if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/.test(valor)) {
                return 'El nombre solo puede tener letras y espacios.';
            }
            return '';
        },

        correo: function (valor) {
            if (valor === '') { return 'Ingresa tu correo electrónico.'; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
                return 'Ingresa un correo válido, por ejemplo nombre@correo.cl.';
            }
            return '';
        },

        /* El teléfono es opcional: solo se valida si la persona lo escribe */
        telefono: function (valor) {
            if (valor === '') { return ''; }
            var digitos = valor.replace(/[\s()+-]/g, '');
            if (!/^\d{8,11}$/.test(digitos)) {
                return 'Ingresa un teléfono de 8 a 11 dígitos, por ejemplo +56 9 1234 5678.';
            }
            return '';
        },

        motivo: function (valor) {
            if (valor === '') { return 'Selecciona el motivo de tu mensaje.'; }
            return '';
        },

        mensaje: function (valor) {
            if (valor === '') { return 'Escribe tu mensaje.'; }
            if (valor.length < 10) { return 'El mensaje debe tener al menos 10 caracteres.'; }
            return '';
        }
    };

    var camposRevisados = {};   /* campos que la persona ya tocó */


    /* -----------------------------------------------------------------------
       Funciones de apoyo
       ----------------------------------------------------------------------- */
    function obtenerValor(id) {
        return document.getElementById(id).value.trim();
    }

    /* Revisa un campo y muestra u oculta su mensaje. Devuelve true si es válido. */
    function validarCampo(id) {
        var campo   = document.getElementById(id);
        var error   = document.getElementById('error-' + id);
        var mensaje = reglas[id](obtenerValor(id));

        error.textContent = mensaje;
        campo.parentNode.classList.toggle('invalido', mensaje !== '');
        campo.setAttribute('aria-invalid', mensaje !== '' ? 'true' : 'false');

        return mensaje === '';
    }

    function actualizarContador() {
        var largo = document.getElementById('mensaje').value.length;
        contador.textContent = largo + ' / ' + LIMITE_MENSAJE;
    }

    function limpiarFormulario() {
        formulario.reset();
        camposRevisados = {};

        Object.keys(reglas).forEach(function (id) {
            document.getElementById('error-' + id).textContent = '';
            document.getElementById(id).parentNode.classList.remove('invalido');
            document.getElementById(id).setAttribute('aria-invalid', 'false');
        });

        actualizarContador();
    }


    /* -----------------------------------------------------------------------
       Eventos
       ----------------------------------------------------------------------- */
    Object.keys(reglas).forEach(function (id) {
        var campo = document.getElementById(id);

        /* Al salir del campo se revisa por primera vez */
        campo.addEventListener('blur', function () {
            camposRevisados[id] = true;
            validarCampo(id);
        });

        /* Después de la primera revisión, el mensaje se actualiza mientras se escribe */
        var evento = (campo.tagName === 'SELECT') ? 'change' : 'input';
        campo.addEventListener(evento, function () {
            if (camposRevisados[id]) { validarCampo(id); }
        });
    });

    document.getElementById('mensaje').addEventListener('input', actualizarContador);

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        mensajeExito.classList.remove('visible');

        var primerInvalido = null;

        Object.keys(reglas).forEach(function (id) {
            camposRevisados[id] = true;
            if (!validarCampo(id) && primerInvalido === null) {
                primerInvalido = document.getElementById(id);
            }
        });

        /* Si hay errores, se lleva el cursor al primer campo con problemas */
        if (primerInvalido !== null) {
            primerInvalido.focus();
            return;
        }

        mensajeExito.textContent = 'Gracias, ' + obtenerValor('nombre') +
            '. Recibimos tu mensaje y te responderemos a ' + obtenerValor('correo') + '.';
        mensajeExito.classList.add('visible');

        limpiarFormulario();
    });

    actualizarContador();

})();
