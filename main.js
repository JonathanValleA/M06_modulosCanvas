// Importamos las funciones creadas y llamamos a nuestro archivo circle.js
import { draw, randomCircle, reportArea, reportPerimeter    } from './circle.js';

// Llamamos a nuestro 1r canva y le decimos qe sea de 2d
let myCanvas = document.getElementById("arc-de-sant-marti");
let ctx = myCanvas.getContext("2d");

// Funcion para crear el Arco
function drawRainbowArc(canvas, context) {
    // En un array le indicamos los colores del arco
    var colors = ['purple','indigo','blue','green','yellow','orange','red'];
    var x = 125;
    var y = 105;
    var r = 75;
    // Recorremos los colores
    for(var i = 0; i <= colors.length; i++){
        if(r >= 0){
            // Llamamos a nuestra funcion draw de circle.js y creamos el arco
            draw(x,y,r,colors[i], canvas);
            
            r += 4;
        }else{
            break;
        }
    }
}
// Llamamos a nuestro 2n canva y le decimos que sea de 2d
let myCanvas2 = document.getElementById("cercles-aleatoris");
let ctx2 = myCanvas.getContext("2d");
// Funcion para los circulos
function drawRandomCircles(){
    // Recorremos 10 veces ya que son 10 circulos y lo creamos
    for(var i = 0; i < 10; i++){
        randomCircle(myCanvas2, ctx2);
    }
}

// Llamamos a nuestras funciones para ya mostrarlo por pantalla
drawRainbowArc(myCanvas,ctx);
drawRandomCircles();

