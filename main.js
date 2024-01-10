function personas(nombre, asignatura, notas, examen, promedio) {
  this.nombre = nombre;
  this.asignatura = asignatura;
  this.notas = notas;
  this.examen = examen;
  this.promedio = promedio;
}

let arregloAlumnos = [];


function calcularPromedio(A, B, C, D) {
  return ((A + B + C + D) / 4) * 0.6;
}

function calcularExamen(E) {
  return E * 0.4;
}


let formulario = document.getElementById("formulario");

let contenedor = document.getElementById("contenedorFormulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombreAlumno = document.getElementById("nombre").value;
  let asignatura = document.getElementById("asignatura").value;
  let notaUno = parseFloat(document.getElementById("notaUno").value);
  let notaDos = parseFloat(document.getElementById("notaDos").value);
  let notaTres = parseFloat(document.getElementById("notaTres").value);
  let notaCuatro = parseFloat(document.getElementById("notaCuatro").value);
  let notaExamen = parseFloat(document.getElementById("notaExamen").value);
 
  let resultadoNotas = calcularPromedio(notaUno, notaDos, notaTres, notaCuatro);
  let resultadoExamen = calcularExamen(notaExamen);
  let resultadoFinal = resultadoNotas + resultadoExamen;
  const alumno = new personas(nombreAlumno, asignatura, [notaUno, notaDos, notaTres, notaCuatro], notaExamen, resultadoFinal);

  arregloAlumnos.push(alumno);
  mostrarAlumnos(arregloAlumnos);
  console.log(arregloAlumnos);
});



const mostrarAlumnos = (arregloAlumnos) => {
  contenedor.innerHTML = "";
  arregloAlumnos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Nombre del Alumno: ${item.nombre}</h2>
    <p>Asignatura: ${item.asignatura}</p>
    <p>Notas Parciales: ${item.notas}</p>
    <p>Nota Examen: ${item.examen}</p>
    <p>Promedio Final: ${item.promedio}</p>
    `;
    contenedor.append(div);
  });
};


localStorage.setItem("", JSON.stringify(mostrarAlumnos));

