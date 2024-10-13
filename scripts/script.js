
function cambiarColorFondo() {
    const colores = ["#ff6347", "#4169e1", "#32cd32", "#ff4500", "#8a2be2", "#ff1493"];
        
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
