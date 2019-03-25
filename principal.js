//Obtengo la información de los cursos mediante un require interno

const {cursosDisponibles} = require ('./Datos_Principal');
//FileSystem
const fs = require('fs');
const express = require('express')
const app = express()

//Presento la lista de cursos dejando un delay en cada presentación
let presentar_cursos=()=>{
	//Poner 
	setTimeout(function(){
	texto1=("El ID del primer curso es "+ cursosDisponibles[0].id + ", el curso se llama " + cursosDisponibles[0].nombre + ", tiene una duración de " + cursosDisponibles[0].duracion + " y tiene un valor de " + cursosDisponibles[0].valor  );
	}, 2000);
	setTimeout(function(){
	texto2=("El ID del segundo curso es "+ cursosDisponibles[1].id + ", el curso se llama " + cursosDisponibles[1].nombre + ", tiene una duración de " + cursosDisponibles[1].duracion + " y tiene un valor de " + cursosDisponibles[1].valor  );
	}, 4000);
	setTimeout(function(){
	texto3=("El ID del tercer curso es "+ cursosDisponibles[2].id + ", el curso se llama " + cursosDisponibles[2].nombre + ", tiene una duración de " + cursosDisponibles[2].duracion + " y tiene un valor de " + cursosDisponibles[2].valor  );
	}, 6000);
	
}

// Se ejecuta codigo para presentar listado de cursos.
presentar_cursos();

app.get('/', function (req, res) {
					  res.send('<p> Los cursos disponibles son: </p><br>'+ texto1 + '<br>' + texto2 + '<br>' + texto3)
					})
					 
					app.listen(3002)

//Se genera los yargs con las opciones de matricula

//opciones

const opciones = {
	id: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'x'
	}
}


const argv = require('yargs')
//Comandos
			.command('inscribir', 'Incribirme a un curso', opciones)
			.argv



//Iniciamos el proceso de busqueda para el ID en la lista de cursos que tenemos disponibles.

let buscarCurso = (idCurso) =>{
	// Valido si existe el curso en la lista de objetos
	let cursoid = cursosDisponibles.find( cursoID => cursoID.id == idCurso)
		if (cursoid.id != '') {
			crearArchivoCurso(argv.id, argv.nombre, argv.cedula);
		} 
}

//Codigo para crear la matricula.txt
let crearArchivoCurso = (id,nombre,cedula) =>{
				let cursoid = cursosDisponibles.find( cursoID => cursoID.id == id)
				texto = "El estudiante " + nombre + 
						" con cédula " + cedula + '\n'+
						" se ha matriculado en el curso con id " + id + ", el nombre del curso es " + cursoid.nombre + " tiene una duración de " + cursoid.duracion + " y un valor de " + cursoid.valor;
				
					app.get('/', function (req, res) {
					  res.send('<p> El resultado de la inscripción es: </p><br>'+ texto)
					})
					 
					app.listen(3002)

			}


 



//Aqui tengo control de errores dado el caso que no encuentre el id del curso.
try {
   buscarCurso(argv.id);
}
catch(error) {
  app.get('/', function (req, res) {
					  res.send('El curso indicado no existe' + texto)
					})
					 
					app.listen(3002)
}



				
















