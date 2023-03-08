class Alumno {
    constructor(nombre, curso, documento) {
        this.nombre = nombre
        this.curso = curso
        this.documento = documento


        }
            descripcion() {
                return "Nombre :" + this.nombre
                    + "\nCurso: " + this.curso
                    + "\nD.N.I: " + this.documento
            }
        }
        
class AlumnoController {
    constructor() {
    this.listaAlumnos = []
    }
        
    agregarAlumno(alumno) {
        this.listaAlumnos.push(alumno)
    }
        
    filtrarAlumnosPorDni(documento) {
        return this.listaAlumnos.filter((el) => el.documento <= documento)
    }
  
    mostrarAlumnos() {
        this.listaAlumnos.forEach((el) => {console.log (el.descripcion() ) } )
    }
}
        


const alumnoController = new AlumnoController()

alumnoController.agregarAlumno(new Alumno("Juan Fernandez", "HTML", 25864792, 10 , 8))
alumnoController.agregarAlumno(new Alumno("Jose Flores", "JAVA", 28528694, 7, 8))
alumnoController.agregarAlumno(new Alumno("Rosario Alvarez", "Css", 10801775, 5, 9))
alumnoController.agregarAlumno(new Alumno("Elena Roca", "JAVA", 52869894,3,10))
alumnoController.agregarAlumno(new Alumno("Miriam Lopez", "Js", 86941987,2,10))
alumnoController.agregarAlumno(new Alumno("Bautista Zamora", "Py", 32454584,7,4))


let nombre = prompt("ingrese el nombre")
let curso = prompt("ingrese el curso")
let documento = prompt("ingrese el DNI del Alumno")





let alumno = new Alumno(nombre, curso, documento)

alumnoController.agregarAlumno(alumno)
        
alumnoController.mostrarAlumnos()





/* proyecto 1
alert("¡Hola esta es la calculadora de promedios de las escuela de programacion!");

let nombreIngresado =prompt("Ingrese su nombre");

while(nombreIngresado == ""){
    alert("Ingrese un nombre valido")
    nombreIngresado = prompt(".....")
        }
    alert("Bienvenido "+nombreIngresado)

let promedio = 0
// funcion promedio de notas
function promedioExamen(parcial, parcial2, final){
var parcial = parseFloat (prompt("Ingrese la Nota del 1º Parcial"));
var parcial2 = parseFloat (prompt("Ingrese la nota del 2º Parcial"));
var final =parseFloat (prompt("ingrese la nota del Final"));
promedio = (parcial+parcial2+final)/3 ;
}

promedioExamen();
alert("El pomedio de nota que saco el alumno " +nombreIngresado+ " de los 3 examnes que rindio el año en curso, es de: " +promedio)

//condicionales de notas finales
if(promedio >= 7 && promedio <10){
    document.write("El promedio de " + nombreIngresado + " es "+promedio+" el alumno esta Aprobado");
}
else if(promedio == 10 ){
    document.write("El promedio de " + nombreIngresado + " es "+promedio+" el alumno consigue una beca en Harvard, Felicitaciones!!!");
}
else if(promedio >= 4 && promedio <7 ){
    document.write("El promedio de " + nombreIngresado + " es "+promedio+" el alumno esta desaprobado, teiene 10 días para presentarse en recuperatorio");
}
else{
    document.write("El promedio es "+promedio+" El alumno " +nombreIngresado+ " esta desaprobado, debe recursarar la materia o debe pensar en cambiarse a diseño!!!")
}*/