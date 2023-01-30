// Exportamos nuestra funcion del arco
export function draw(x, y, r, color, canvas) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();    
    ctx.arc(x, y, r, Math.PI, 0); // Creamos el arco con el posicion (x,y) el radio 
    ctx.stroke();
    ctx.strokeStyle = color; // Le pasamos los colores
    ctx.lineWidth = 5; // Le decimos que tenga un grosor de 4
}

// En este caso, creo otra funcion igual pero cambiando el .stroke() por .fill() para crearme el circulo entero
export function cercle(x, y, r, color, canvas) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();    
    ctx.arc(x, y, r, Math.PI, 3.1);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.lineWidth = 4;
}
// Funcion para generar los circlos aleatorios
export function randomCircle(canvas, context) {
   var r = Math.floor(Math.random() * 50);
   var x = Math.floor(Math.random() * (canvas.width - r * 2) + r);
   var y = Math.floor(Math.random() * (canvas.height - r * 2) + r);
   var grey = Math.floor(Math.random() * 255);
   var color = "rgb(" + grey + "," + grey + "," + grey + ")";
   // Generamos nuestro circulo
   cercle(x, y, r, color, canvas, context);
}

export function reportArea(r) {
    return Math.PI * r * r
}

export function reportPerimeter(r) {
    return 2 * Math.PI * r;
}