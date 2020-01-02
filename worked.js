//EJERCICIO 8//
function presion(){
    
    var numero=document.getElementById("eporc").value;
    var mejor = parseInt(numero);
    if(isNaN(mejor)){
       return document.getElementById("res").innerHTML = "TU CREES QUE SOY TONTO, ¿VERDAD?"
    }

    if (mejor % 2){
        document.getElementById("res").innerHTML ="TU NUMERO ES IMPAR";
        console.log(mejor)
        }else{
        document.getElementById("res").innerHTML = "TU NUMERO ES PAR";
        console.log(mejor)
    }
}

//EJERCICIO 9//
function laCadenaEs(){
    var letra=document.getElementById("letras").value;
        if (letra == letra.toUpperCase()){
     document.getElementById("exercise9").innerHTML = letra + " : Esta en mayusculas";
        }
     else if(letra == letra.toLowerCase()){
        document.getElementById("exercise9").innerHTML = letra + " : Esta en minusculas";
        }
        else{
        document.getElementById("exercise9").innerHTML = letra + " : Esta revuelto todo";
        }
    if (letra == false){
        document.getElementById("exercise9").innerHTML = letra + "";
    }
    if (letra == "F")
    document.getElementById("exercise9").innerHTML = "Acepto tu respeto";
}

//EJERCICIO 10//
function palindromo(){
    var linea=document.getElementById("palindro").value;
        var quitaEspacio = linea.replace(/\W/g,"");
        var quitaEspacio = quitaEspacio.toLowerCase();  
        for(i=0; i<quitaEspacio.length; i++){
            if(quitaEspacio[i] == quitaEspacio[quitaEspacio.length-1-i]){
                document.getElementById("pali").innerHTML = "Es un palindromo"; 
            }else{  document.getElementById("pali").innerHTML = "No es un palindromo";
        }
    }
}


//EJERCICIO 11// Este le faltan pequeñas cosas que arreglare en su momento
function objetos(){
    function estudiante(nombre,edad,genero){  //constructor//
        this.nombre = nombre ;
        this.edad = edad;
        this.genero = genero;
    }
    var capNombre= document.getElementById("nombre").value;
    var capEdad= document.getElementById("edad").value;
    var capGenero= document.getElementById("genero").value;

    nuevoEstudiante = new estudiante(capNombre,capEdad,capGenero); //variable global//
    detalles(); 
    objeto2();
    objeto3()
}
    var baseDeDatos = [];
function detalles(){
    baseDeDatos.push(nuevoEstudiante);  
    console.log(baseDeDatos)
    document.getElementById("nombreDelAlumno").innerHTML += "Nombre: "+ nuevoEstudiante.nombre;
    document.getElementById("edadDelAlumno").innerHTML += "Edad: "+ nuevoEstudiante.edad;
    document.getElementById("generoDelAlumno").innerHTML += "Genero: "+ nuevoEstudiante.genero;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

function objeto2(){

    function salonGrupo(curso,grupo){
        this.curso = curso;
        this.grupo = grupo;
    }

    var baseDeDatosCurso = [1,2,3];
    var baseDeDatosGrupo = ["A1", "A2","A3","B1","B2","B3","C1","C2","C3"];

    var cursoAleatorio1 = Math.floor((Math.random()*(3-0))+0);
    cursos =  baseDeDatosCurso[cursoAleatorio1];

    var grupoAleatorio = Math.floor((Math.random()*(9-0))+0);
    grupos = baseDeDatosGrupo[grupoAleatorio];
  
    nuevoCursoGrupo = new salonGrupo (cursos,grupos);
    registrar();
}
    var registro = [];
    function registrar(){
        registro.push(nuevoCursoGrupo);
        document.getElementById("registros1").innerHTML += "Curso: " + nuevoCursoGrupo.curso;
        document.getElementById("registros2").innerHTML += "Grupo: "  + nuevoCursoGrupo.grupo;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function objeto3(){
    function profesor(asignatura,nombre){
        this.asignatura = asignatura;
        this.nombre = nombre;
    }

    var profesores = ["Juan Carlos Bodoque","Marco tulio", "Dr.Dexter", "Yo merengues"];
    var asignaturas = ["Matematicas 1", "Ciencias Naturales 1", "Artes 1", "Computacion 1"];

        var profAleatorio = Math.floor((Math.random()*(4-0))+0);
        prof = profesores[profAleatorio];
        var asignaturaAleatoria = Math.floor((Math.random()*(4-0))+0);
        asig = asignaturas[asignaturaAleatoria];

    tuProfesor = new profesor(asig,prof);
    asignar();

}
    var asignado= [];
    function asignar(){
     asignado.push(tuProfesor);
     document.getElementById("asignado1").innerHTML += tuProfesor.nombre + ". " +" que imparte: " + tuProfesor.asignatura;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Un punto que quiero marcar: no creo que sea malo el spanglish en un trabajo, pero si que llegue a ser confuso. Por eso es mejor manejar todo eso en un idioma//
//EJERCICIO 12//
function dice(){
var nothing = [];
var cont = [];

    for(i=0; i<36; i++){
    var dice1 = Math.floor((Math.random()*(6-1))+1);
    var dice2 = Math.floor((Math.random()*(6-1))+1);   
   plus = dice1+dice2;
    nothing.push(plus);
    cont.push(i+1);
    }

    document.getElementById("total").innerHTML = " es <br>" + nothing;
    console.log(cont)
    console.log (nothing)
    
    
}

//EJERCICIO 13//