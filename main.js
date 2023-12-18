function personas(nombre, notas, examen, promedio) {
  this.nombre = nombre;
  this.notas = notas;
  this.examen = examen;
  this.promedio = promedio;
}

let arregloAlumnos = [];

function notas(A, B, C, D) {
  return ((A + B + C + D) / 4) * 0.6;
 }

function examen(E){
  return E * 0.4;
}


for (let i = 0; i < 5; i++) {
  let nombreAlumno = prompt("Ingrese Nombre Del Alumno");
  let notaUno = Number(prompt("Ingrese Calificación Primera Entrega"));
  let notaDos = Number(prompt("Ingrese Calificación Segunda Entrega"));
  let notaTres = Number(prompt("Ingrese Calificación Tercera Entrega"));
  let notaCuatro = Number(prompt("Ingrese Calificación Cuarta Entrega"));
  let notaExamen = Number(prompt("Ingrese Calificación Examen"));

  let resultadoFinal = notas(notaUno, notaDos, notaTres, notaCuatro) + examen(notaExamen);

  
  const alumno = new personas(nombreAlumno, [notaUno, notaDos, notaTres, notaCuatro], notaExamen, resultadoFinal);

  arregloAlumnos.push(alumno);
}

console.log(arregloAlumnos);


// let n = 0;

// while(n === 0){
   
//   if(resultadoFinal >= 4.0) {
//      //n = 1;
//     alert (`Felicitaciones! Aprobó La Cursada con una Nota Final de ${resultadoFinal}`)
//   }else if(resultadoFinal <= 3.9){
//     //console.log(resultadoFinal)
//     alert (`Lo siento, Reprobó La Cursada con una Nota Final de ${resultadoFinal}`)
    
//   }else{
//     alert ("Ingrese Números Con Punto Ejemplo 5.0")
//   }

//   notaUno = Number(prompt("Ingrese Calificación Primera Entrega"));
//   notaDos = Number(prompt("Ingrese Calificación Segunda Entrega"));
//   notaTres = Number(prompt("Ingrese Calificación Tercera Entrega"));
//   notaCuatro = Number(prompt("Ingrese Calificación Cuarta Entrega"));
//   notaExamen = Number(prompt("Ingrese Calificación Examen"));
 
// }

