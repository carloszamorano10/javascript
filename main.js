function personas(info) {
  this.nombre = info.nombre;
  this.asignatura = info.asignatura;
  this.notas = info.notas;
  this.examen = info.examen;
  this.promedio = info.promedio;
}


let contador = 1;
let validarStorageAlumnos = true;
let contadorAlumnosValidar = 0;

while (validarStorageAlumnos) {
  const alumnoStorage = JSON.parse(localStorage.getItem("Alumno" + contador));
  if(!alumnoStorage) {
    validarStorageAlumnos = false;
  }
  else contador += 1;
}

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

  const alumno = new personas({
    nombre: nombreAlumno,
    asignatura: asignatura,
    notas: [notaUno, notaDos, notaTres, notaCuatro],
    examen: notaExamen,
    promedio: resultadoFinal.toFixed(1),
  });

  //console.log(arregloAlumnos);
  localStorage.setItem("Alumno" + contador, JSON.stringify(alumno));

  // let arregloAlumnos = obtenerAlumnosStorage();
  // mostrarAlumnos(arregloAlumnos);

  contador += 1;
});

const obtenerAlumnosStorage = () => {
  let arregloAlumnos = [];
  for (let i = 0; i < contador+1; i++) {
    const alumnoStorage = JSON.parse(localStorage.getItem("Alumno" + (i + 1)));
    if(alumnoStorage) arregloAlumnos.push(alumnoStorage);
  }
  return arregloAlumnos;
}

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

let arregloAlumnos = obtenerAlumnosStorage();
mostrarAlumnos(arregloAlumnos);

