
alert("¡Hola esta es la calculadora de promedios de las escuela de programacion!");

let nombreIngresado =prompt("Ingrese su nombre");

/*while(nombreIngresado != "" && nombreIngresado >0)
    if (nombreIngresado == "" ){
        prompt("Ingrese su nombre nuevamente") 
    }else if (nombreIngresado > 0) {  
        prompt("Ingrese su nombre nuevamente")  
    }else {alert("Hola " +nombreIngresado+ "!" )
        }*/



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
}

