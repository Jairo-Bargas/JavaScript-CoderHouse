
const infoUsuario = {
        usuario: "jairo",
        contrasenia: "0000",
        ingreso: false,

}


const postVentas = {

        servicios: [
            {
              frase:"¿Qué servicio requiere?",
              opciones:["A - Consulta online.","B - Servicio de mantenimiento.", "C - Servicio por falla.", "D - Reparación integral.","E - Capacitación", "F - Garantía"],
              respuesta:{
                usuario: "",
                estado: "NO RESPONDIO",
              }
            },
            {
              frase:"¿Seleccione su máquina?",
              opciones:["A - Tractor de jardín","B - Tractores serie 5/6.", "C - Tractores serie 7/8/9.", "D - Cosechadora.", "E - Pulverizadora", "F - Sembradora"],
              respuesta:{
                usuario: "",
                estado: "NO RESPONDIO",
              }
            },
            {
              frase:"¿Cuántas horas tiene su máquina?",
              opciones:[],
              respuesta:{
                usuario: "",
                estado: "NO RESPONDIO",
              }
            },
            {
              frase:"Agregue información que considere necesaria",
              opciones:[],
              respuesta:{
                usuario: "",
                estado: "NO RESPONDIO",
              }
            },
          ]
    }


let intentos = 0;
function login(){
    let usuarioIngresando = prompt("Ingrese su nombre")
    let usuarioEnLimpio = usuarioIngresando.toLowerCase()
    let usuarioContrasenia = prompt("Ingrese su contraseña")
    if ((infoUsuario.usuario === usuarioEnLimpio)&&(infoUsuario.contrasenia === usuarioContrasenia)){
        alert("Bienvenido " + infoUsuario.usuario)
        infoUsuario.ingreso = true
        return true
    } else {
        alert("Los datos ingresados son incorrectos")
    }
}

function repetirIngreso(){
    do {
        if (login()){
        break
        }
        intentos++
    } while (intentos < 3)
    if (intentos === 3){
        confirm("Ha olvidado su usuario/contraseña?")
        repetirIngreso(cerrar);
    }
}


const armarOpciones = (pregunta)=>{
    let textoFinal = pregunta.frase;
    for(const opcion of pregunta.opciones){
      textoFinal += "\n " + opcion;
    }
    return textoFinal;
  };

  const preguntar = (pregunta)=>{
    const respuesta = prompt(armarOpciones(pregunta))
    return respuesta
  };

  const validarRespuesta = (pregunta) => {
    let rta;
      rta = preguntar(pregunta);
      rta = rta ? rta.toUpperCase() : null;
    pregunta.respuesta.usuario = rta;
  };



    const iniciarPostVenta = () => {
          for (const servicio of postVentas.servicios) {
            validarRespuesta(servicio);
          }
        
        saludo = confirm("En breve nos pondremos en contacto con usted. \n Muchas gracias por confiar en John Deere");

    }

    const app = () => {
        alert("Bienvenido al servicio Post Venta John Deere");
        repetirIngreso();
        iniciarPostVenta();
      };
      
app();
