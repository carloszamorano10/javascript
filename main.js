let notaUno = Number(prompt("Ingrese Calificación Primera Entrega"));
let notaDos = Number(prompt("Ingrese Calificación Segunda Entrega"));
let notaTres = Number(prompt("Ingrese Calificación Tercera Entrega"));
let notaCuatro = Number(prompt("Ingrese Calificación Cuarta Entrega"));
let notaExamen = Number(prompt("Ingrese Calificación Examen"));


// const notas = (A, B, C, D) => (((A + B + C + D) / 4) * 0,6);
// const examen = E => (E * 0,4);

function notas(A, B, C, D) {
//     // console.log(A);
//     // console.log(B);
//     // console.log(C);
//     // console.log(D);
//     let suma = A + B + C + D;
//     console.log(suma);
//     let dividir = suma / 4;
//     console.log(dividir);
//     let res = dividir * 0.6;
//     console.log(res);
// return res;
    return ((A + B + C + D) / 4) * 0.6;
   
}

// notas ();

function examen(E){
    // console.log(E)
    // // let res = E * 0,4;
    // console.log(res)
    // // return res;
    return E * 0.4;
}

// examen ();
// let resultadoFinal = notas (notaUno, notaDos, notaTres, notaCuatro) + examen (notaExamen);

let n = 0;

while(n === 0){
  let resultadoFinal = notas (notaUno, notaDos, notaTres, notaCuatro) + examen (notaExamen);
   
  if(resultadoFinal >= 4.0) {
     n = 1;
    alert (`Felicitaciones! Aprobó La Cursada con una Nota Final de ${resultadoFinal}`)
  }else if(resultadoFinal <= 3.9){
    //console.log(resultadoFinal)
    alert (`Lo siento, Reprobó La Cursada con una Nota Final de ${resultadoFinal}`)
    
  }else{
    alert ("Ingrese Números Con Punto Ejemplo 5.0")
  }

  notaUno = Number(prompt("Ingrese Calificación Primera Entrega"));
  notaDos = Number(prompt("Ingrese Calificación Segunda Entrega"));
  notaTres = Number(prompt("Ingrese Calificación Tercera Entrega"));
  notaCuatro = Number(prompt("Ingrese Calificación Cuarta Entrega"));
  notaExamen = Number(prompt("Ingrese Calificación Examen"));
 
}
