let graficoActual = null;
 
function mostrarGrafico() {
    const tareas = obtenerTareas();
 
    const terminadas = tareas.filter(function(t) {
        return t.terminada === true;
    });
    const cantidades = [0,0,0,0,0,0,0,0,0,0,0,0];

    terminadas.forEach(function(tarea){
        if (tarea.fecha) {
            const mes = parseInt(tarea.fecha.split("-")[1], 10) - 1
            cantidades[mes]++;
        }
    });

    const ctx = document.getElementById("grafico-tareas");

    if(graficoActual !== null) {
        graficoActual.destroy();
    }

        graficoActual = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            datasets: [{
                label: "Tareas terminadas",
                data: cantidades,
                borderWidth: 1,
                backgroundColor: "rgba(62, 90, 173, 0.5)",
                borderColor: "#1e4ed8"
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}
