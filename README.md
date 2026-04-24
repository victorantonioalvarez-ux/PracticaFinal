# Proyecto final de curso

Desarrollo de aplicacion web modular que permita planificar, gestionar y hacer seguimiento 
de tareas personales mediante formularios, visualizacion grafica y persistencia de datos.
Esta aplicacion simula un gestor personal de actividades.

## Requisitos y funcionalidades minimas:

### La aplicacion ha de estar compuesta por 3 paginas HTML con las funcionalidades siguientes:

#### Vista principal - index.html 
● Ha de tener un menu de navegacion.

● Muestra una lista de todas laas actividades.

● Permite:

  + Crear, eliminar, marcar como realizadas
  
● Muestra un grafico con Chart.js con las tareas realizadas por mes

● Carga las actividades desde:

  + localStorage
  
  + Un fichero actividades.json (importacion con fetch(), evitando duplicados)

#### Formularios para añadir actividades - crear-tarea.html
● Ha de tener un menú de navegacion. 

● Incluye un formulario con validacion:

  + Titulo, descripcion, fecha, categoria (selector de categorias) prioridades (selector de Baja, Media,  Alta)
  
● Guarda les activitats a localStorage amb un id únic amb el format “task-001” i el camp
realitzada: false.

#### Gestor de categorias - categorias.html
● Ha de tener un menu de navegacion.

● Permite añadir y eliminar categorias que se pueden usar en el formulario.

● Las categorias se guardan en localStorage.




