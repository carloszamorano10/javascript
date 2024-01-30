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
  validarStorageAlumnos = !alumnoStorage ? false : (contador += 1);
}


function calcularPromedio(A, B, C, D) {
  return ((A + B + C + D) / 4) * 0.6;
}

function calcularExamen(E) {
  return E * 0.4;
}

let formulario = document.getElementById("formulario");

let contenedor = document.getElementById("contenedorFormulario");

let formularioFiltros = document.getElementById("formularioFiltros");

let formularioFiltros2 = document.getElementById("formularioFiltros2");

let btnBorrar = document.getElementById("btnBorrar");


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

  location.reload();
  
  const alumno = new personas({
    nombre: nombreAlumno,
    asignatura: asignatura,
    notas: [notaUno, notaDos, notaTres, notaCuatro],
    examen: notaExamen,
    promedio: resultadoFinal.toFixed(1),
  });

  localStorage.setItem("Alumno" + contador, JSON.stringify(alumno));

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
  arregloAlumnos.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("alumnosDiv");
    div.innerHTML = `
    <h2>Alumno: ${item.nombre}</h2>
    <p>Asignatura: ${item.asignatura}</p>
    <p>Notas Parciales: ${item.notas.join(" - ")}</p>
    <p>Nota Examen: ${item.examen}</p>
    <p>Promedio Final: ${item.promedio}</p>
    <button class="btnBorrarUno" data-index="${index}">Eliminar</button>
    <hr/>
    `;
    contenedor.append(div);
  });

  document.querySelectorAll(".btnBorrarUno").forEach(button => {
    button.addEventListener("click", borrarUno);
  });
};

const borrarUno = (event) => {
  const indexToRemove = event.target.getAttribute("data-index");
  localStorage.removeItem("Alumno" + (parseInt(indexToRemove) + 1));

  
  arregloAlumnos = obtenerAlumnosStorage();
  mostrarAlumnos(arregloAlumnos);
};

let arregloAlumnos = obtenerAlumnosStorage();
mostrarAlumnos(arregloAlumnos);

formularioFiltros.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const filtro = document.getElementById("filtro").value;
  let alumnosFiltrados = [];
  switch (filtro) {
    case 'Aprobados':
      alumnosFiltrados = arregloAlumnos.filter(item => item.promedio >= 4.0);
      break;
    case 'Reprobados':
      alumnosFiltrados = arregloAlumnos.filter(item => item.promedio < 4.0);
      break;
    case 'Mostrar Todo':
      alumnosFiltrados = arregloAlumnos;
      break;
    default:
      alert("Ingrese un filtro válido");
      break;
  }
  mostrarAlumnos(alumnosFiltrados);
});


formularioFiltros2.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const filtro2 = document.getElementById("filtro2").value;
  let filtradosAsignatura = [];
  switch (filtro2) {
    case 'Lenguaje':
      filtradosAsignatura = arregloAlumnos.filter(item => item.asignatura === 'Lenguaje');
      break;
      case 'Matemáticas':
      filtradosAsignatura = arregloAlumnos.filter(item => item.asignatura === 'Matemáticas');
      break;
    case 'Historia':
      filtradosAsignatura = arregloAlumnos.filter(item => item.asignatura === 'Historia');
      break;
    default:
      alert("Ingrese un filtro válido");
      break;
  }
  mostrarAlumnos(filtradosAsignatura);
});

const btnLimpiar = () => {
  Swal.fire({
    title: "Eliminar Todo?",
    text: "No Se Podrá Recuperar Datos!",
    icon: "warning",
    background: "#f5f5f5",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, Eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: "Eliminado!",
        text: "Datos Eliminados.",
        icon: "success",
        background: "#f5f5f5",
      });
      setTimeout(() => {
        location.reload();
      },1000);
    }else{
      Swal.fire({
        title: "Sin Eliminar",
        text: "Se Manutiveron los Datos.",
        icon: "error",
        background: "#f5f5f5",
      });
    }
  });
}

btnBorrar.addEventListener("click", btnLimpiar);


const traerAlumnosBd = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();

  data.forEach((item, index) => {
    localStorage.setItem("Alumno" + (contador + index), JSON.stringify(item));
    let div = document.createElement("div");
    div.classList.add("alumnosDiv");
    div.innerHTML = `
      <h2>Alumno: ${item.nombre}</h2>
      <p>Asignatura: ${item.asignatura}</p>
      <p>Notas Parciales: ${item.notas.join(" - ")}</p>
      <p>Nota Examen: ${item.examen}</p>
      <p>Promedio Final: ${item.promedio}</p>
      <button class="btnBorrarUno" data-index="${index}">Eliminar</button>
      <hr/>
    `;
   
  });
  contador += data.length;
}

if (contador === 1) {
  traerAlumnosBd();
}
