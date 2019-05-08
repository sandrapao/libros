/**
 * 
 * Esta aplicación es un ejemplo de como consumir datos
 * proveidos por una API REST en formato JSON.
 *
 * La API se encuentra en https://3a8i3.github.io/
 * y devuelve un array de objetos con datos de 7 musicas
 * 
 * La aplicación debe recuperar los datos proveidos por la API
 * y mostrarlos en la página.
 *
 * # PASOS A SEGUIR #
 * 1. Recuperar la plantilla html en la que se mostrarán los datos y guardarla una variable
 * 2. Recuperar los datos de la API utilizando AJAX a través de la función jquery.get()
 * 3. Pasar los datos recuperados a una función que se encargará de cargar los datos
 *    en la plantilla y mostrar en la página.
 *    # PASOS DE LA FUNCION #
 *    3.1. Crear un ciclo para recorrer el array de datos recuperado
 *    3.2. Crear una variable que guarde el objeto jquery de la plantilla para cada ciclo
 *    3.3. Recuperar y modificar los elementos de la plantilla correspondientes para cada
 *         dato
 *    3.4. Cargar la plantilla ya modificada en la página
 *    
 */



//1- Se recupera la plantilla y se guarda en la variable.
let plantilla = $("div.row").html();

$("div.row").html("");

//console.log(plantilla);

//2- Recuperando datos del servidor
$.get("https://3a8i3.github.io/libros/", function( datos ){
 cargarDatos(datos);
 console.log(datos)
});

// 3 Funcion que carga los datos en la plantilla 
function cargarDatos( d ){
	//console.log("cargarDatos: " ,d);

for(let i = 0; i < d.length; i++ ){
	//console.log(i);

	let plantillaJQ = $(plantilla);

     plantillaJQ.find(".titulo-libro").text( d[i] .titulo );
     plantillaJQ.find(".libros_anho").text( d[i] .Año);
     plantillaJQ.find(".Editorial_libros").text( d[i] .Editorial_);
     plantillaJQ.find(".libro-anho").text( d[i] . anho);

     plantillaJQ.find(".portada").attr("src", d[i] .portada);
     plantillaJQ.find(".audio").attr("src", d[i] .audio);

     $("div.row").append ( plantillaJQ);

}
}