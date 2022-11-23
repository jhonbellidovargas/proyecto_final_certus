const txtNombre = document.getElementById("txtNombre");
const txtApellido = document.getElementById("txtApellido");
const txtEmail = document.getElementById("txtEmail");
const txtAsunto = document.getElementById("txtAsunto");
const txtDescripcion = document.getElementById("txtDescripcion");
const btnEnviar = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");
const mensajeContenedor = document.getElementById("mensaje-contenedor");

validarTexto = (texto) => {
  if (texto.length < 3) {
    return false;
  } else if (texto.length > 50) {
    return false;
  } else {
    return true;
  }
};

validarCorreo = (correo) => {
  // correo contiene @
  if (correo.indexOf("@") == -1 || correo.indexOf(".") == -1) {
    return false;
  } else {
    return true;
  }
};

errorMensaje = (campo) => {
  mensajeContenedor.classList.remove("d-none");
  mensajeContenedor.classList.add("d-block");
  mensajeContenedor.classList.add("bg-danger");
  mensaje.innerHTML = `El campo ${campo} es incorrecto`;
  setTimeout(() => {
    mensajeContenedor.classList.remove("d-block");
    mensajeContenedor.classList.remove("bg-danger");
    mensajeContenedor.classList.add("d-none");
  }, 5000);
};
// Eventos
btnEnviar.onclick = function () {
  if (!validarTexto(txtNombre.value)) {
    errorMensaje("Nombre");
    return;
  } else if (!validarTexto(txtApellido.value)) {
    errorMensaje("Apellido");
    return;
  } else if (!validarCorreo(txtEmail.value)) {
    errorMensaje("Email");
    return;
  } else if (!validarTexto(txtAsunto.value)) {
    errorMensaje("Asunto");
    return;
  } else if (!validarTexto(txtDescripcion.value)) {
    errorMensaje("Descripcion");
    return;
  } else {
    // Mostramos el mensaje de correcto por unos segundos
    mensajeContenedor.classList.remove("d-none");
    mensajeContenedor.classList.add("d-block");
    mensajeContenedor.classList.add("bg-success");
    mensaje.innerHTML = "Mensaje enviado correctamente";
    setTimeout(() => {
      mensajeContenedor.classList.remove("d-block");
      mensajeContenedor.classList.remove("bg-success");
      mensajeContenedor.classList.add("d-none");
    }, 5000);
  }
};
