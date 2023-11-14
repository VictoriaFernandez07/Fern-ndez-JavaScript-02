/* Ejercicio-01 */
function calcularPromedio(numeros) {

    if (numeros.length === 0) {

      return "Calcular el promedio";

    }
  
    
    var suma = 0;

    for (var i = 0; i < numeros.length; i++) {

      suma += numeros[i];

    }
  
 var promedio = suma / numeros.length;
  
 return promedio;
}
  
var arrayDeNumeros = [8, 10, 7, 2];
var resultado = calcularPromedio(arrayDeNumeros);
console.log("El promedio es:" + resultado);


/* Ejercicio-02 */
var estudiante = {
 nombre: "Victoria",
 apellido: "Fernández",
 legajo: "0134178",
 notas: [8, 10, 7, 2]
};
  

console.log("Nombre:" + estudiante.nombre);
console.log("Apellido:" + estudiante.apellido);
console.log("Legajo:" + estudiante.legajo);
console.log("Notas:" + estudiante.notas.join(',')); 

/* Ejercicio-03 */
function calcularPromedioEstudiante(estudiante) {
    if (estudiante.notas.length === 0) {

      return "Calcular el promedio de los alumnos";

    }
  
    var suma = estudiante.notas.reduce(function (acumulador, nota) {

      return acumulador + nota;

    }, 0);
  
 var promedio = suma / estudiante.notas.length;
  
 return promedio;
}
  

var estudiantes = [
    {
     nombre: "Amparo",
     apellido: "Andres",
     legajo: "1234567",
     notas: [8, 7, 7, 9]
    },

    {
     nombre: "Guillermina",
     apellido: "Occhipinti",
     legajo: "2468135",
     notas: [9, 8, 9, 10]
    },

    {
     nombre: "Mora",
     apellido: "Scolnik",
     legajo: "1357924",
     notas: [7, 8, 7, 8]
    },

    {
     nombre: "Pilar",
     apellido: "Juarez",
     legajo: "9753186",
     notas: [10, 9, 8, 7]
    }

];
  

for (var i = 0; i < estudiantes.length; i++) {
 var estudiante = estudiantes[i];
 var promedio = calcularPromedioEstudiante(estudiante);
 console.log(estudiante.nombre + "" + estudiante.apellido + ":" + promedio);
}

/* Ejercicio-04 */
function calcularPromedioEstudiante(estudiante) {
    if (estudiante.notas.length === 0) {

      return "Calcular el promedio";

    }
  
    var suma = estudiante.notas.reduce(function (acumulador, nota) {

      return acumulador + nota;

    }, 0);
  
    var promedio = suma / estudiante.notas.length;
  
    return promedio;
}
  

var estudiantes = [
    {
     nombre: "Valentina",
     apellido: "Castaño",
     legajo: "1234567",
     notas: [8, 7, 7, 9]
    },

    {
     nombre: "Valentina",
     apellido: "Dolfijs",
     legajo: "2468135",
     notas: [9, 8, 9, 10]
    },

    {
     nombre: "Pierina Vannacci",
     apellido: "Scolnik",
     legajo: "1357924",
     notas: [7, 8, 7, 8]
    },

    {
     nombre: "Miranda",
     apellido: "Israel",
     legajo: "9753186",
     notas: [10, 9, 8, 7]
    }
];
  

function ListaEstudiantes() {
 var listaEstudiantes = document.getElementById("listaEstudiantes");
 listaEstudiantes.innerHTML = ""; 
  
    
 var lista = document.createElement("ul");
    for (var i = 0; i < estudiantes.length; i++) {
      var estudiante = estudiantes[i];
      var promedio = calcularPromedioEstudiante(estudiante);
  
      
      var listItem = document.createElement("li");
      listItem.textContent = estudiante.nombre + "" + estudiante.apellido + "Promedio-Estudiante: " + promedio;
  
      lista.appendChild(listItem);
    }
  
 listaEstudiantes.appendChild(lista);
}

/* Ejercicio-05 */
function calcularPromedioEstudiante(estudiante) {
    if (estudiante.notas.length === 0) {

      return "Calcular el promedio.";

    }
  
    var suma = estudiante.notas.reduce(function (acumulador, nota) {

      return acumulador + nota;

    }, 0);
  
 var promedio = suma / estudiante.notas.length;
  
 return promedio;

}
  
var estudiantes = [
    {
      nombre: "Valentina",
      apellido: "Castaño",
      legajo: "1234567",
      notas: [8, 7, 7, 9]
    },

    {
      nombre: "Valentina",
      apellido: "Dolfijs",
      legajo: "2468135",
      notas: [9, 8, 9, 10]
    },

    {
      nombre: "Pierina Vannacci",
      apellido: "Scolnik",
      legajo: "1357924",
      notas: [7, 8, 7, 8]
    },

    {
      nombre: "Miranda",
      apellido: "Israel",
      legajo: "9753186",
      notas: [10, 9, 8, 7]
    }
];
  
function mostrarListaEstudiantes() {
 var listaEstudiantes = document.getElementById("listaEstudiantes");
 listaEstudiantes.innerHTML = "";
  
 var lista = document.createElement("ul");
    for (var i = 0; i < estudiantes.length; i++) {
      var estudiante = estudiantes[i];
      var promedio = calcularPromedioEstudiante(estudiante);
  
      var listItem = document.createElement("li");
      listItem.textContent = estudiante.nombre + " " + estudiante.apellido + " - Promedio: " + promedio;
  
      lista.appendChild(listItem);
    }
  
    listaEstudiantes.appendChild(lista);
}
  
function agregarEstudiante() {
 var nombre = document.getElementById("Victoria").value;
 var apellido = document.getElementById("Fernández").value;
 var legajo = document.getElementById("0134178").value;
 var notasInput = document.getElementById("8, 10, 7, 2").value;
  
    
    var notas = notasInput.split(',').map(function(nota) {
      return parseInt(nota.trim());
    });
  
    
    var nuevoEstudiante = {
     nombre: nombre,
     apellido: apellido,
     legajo: legajo,
     notas: notas
    };
  
 estudiantes.push(nuevoEstudiante);
  
 document.getElementById("formularioEstudiante").reset();
  
 mostrarListaEstudiantes();
}

/* Ejercicio-06 */
var estudiantes = [];

function calcularPromedio() {

 var nombre = document.getElementById("Victoria").value;
 var apellido = document.getElementById("Fernández").value;
 var calificacion = parseFloat(document.getElementById("6,75").value);


    if (nombre && apellido && !isNaN(calificacion)) {
       
     estudiantes.push({ nombre: nombre, apellido: apellido, calificacion: calificacion });

        
        var promedio = estudiantes.reduce(function (total, estudiante) {
            return total + estudiante.calificacion;
        }, 0) / estudiantes.length;

       
     mostrarResultados(nombre, apellido, promedio.toFixed(2));

        
     document.getElementById("nombre").value = "Victoria";
     document.getElementById("apellido").value = "Fernández";
     document.getElementById("nota").value = "6,75";
    }   

    else {
        alert("Datos del alumno");
    }
}

function mostrarResultados(nombre, apellido, promedio) {

 var resultadosDiv = document.getElementById("Promedio");
 var resultadoP = document.createElement("p");
 resultadoP.textContent = nombre + "Victoria" + apellido + "Fernández" + "Promedio: 6,75" + promedio;
 resultadosDiv.appendChild(resultadoP);
}

/* Ejercicio-07 */
var estudiantes = [];

function calcularPromedio() {
            
 var nombre = document.getElementById("nombre").value;
 var apellido = document.getElementById("apellido").value;
 var calificacion = parseFloat(document.getElementById("notas").value);


    if (nombre && apellido && !isNaN(calificacion)) {
               
     estudiantes.push({ nombre: nombre, apellido: apellido, calificacion: calificacion });

                
        var promedio = estudiantes.reduce(function (total, estudiante) {

            return total + estudiante.calificacion;

        }, 0) / estudiantes.length;

     mostrarResultados(nombre, apellido, promedio.toFixed(2));
     mostrarEstadoEstudiante(promedio);

            
     document.getElementById("nombre").value = "Victoria";
     document.getElementById("apellido").value = "Fernández";
     document.getElementById("notas").value = "8, 10, 7, 2";

    } 
    
    else {
     alert("Datos del alumno");
    }
}

function mostrarResultados(nombre, apellido, promedio) {
            
 var resultadosDiv = document.getElementById("promedio");
 var resultadoP = document.createElement("p");
 resultadoP.textContent = nombre + "Victoria" + apellido + "Fernández" + "Promedio: 6,75" + promedio;
 resultadosDiv.appendChild(resultadoP);
}

function mostrarEstadoEstudiante(promedio) {
           
 var estadoDiv = document.getElementById("promedio");
 var estadoP = document.createElement("p");

    if (promedio < 4) {

     estadoP.textContent = "Estado: Desaprobado";

    } 
    
    else if (promedio >= 4 && promedio <= 8) {

     estadoP.textContent = "Estado: Aprobado";

    } 
    
    else {

     estadoP.textContent = "Estado: Sobresaliente";

    }

 estadoDiv.appendChild(estadoP);
}