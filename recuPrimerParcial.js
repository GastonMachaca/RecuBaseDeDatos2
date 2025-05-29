/*
1. Crea una base de datos llamada libreria.
2. Dentro de esta base de datos, crea una colección llamada librosEspeciales.
3. Inserta documentos con la siguiente estructura

 título (string)
 genero (aventura, ciencia ficcion, romance, terror, etc.)
 array de autores (nombre completo de los autores)
 numero de paginas (entero)
 nivel de lectura (infantil, juvenil, adulto)
 array de objetos de precio:
o tipo: físico, precio: 3500
o tipo: digital, precio: 2500
 disponible en stock (booleano)
 objeto editorial:
o nombre (string)
o pais (string)
o anioFundacion (entero)

Cargar 10 libros especiales.
Los datos a cargar en cada entidad deben ser útiles a las consultas que se detallan a continuación

*/

db = db.getSiblingDB("libreria");

db.librosEspeciales.drop();

db.librosEspeciales.insertMany([
    {//1 Objeto
        titulo: "Star Wars", 
        genero: "ficcion",
        autores : ['Felipe','Mauricio'],
        paginas : 220,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: true,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//2 Objeto
        titulo: "Dia de la independencia", 
        genero: "ficcion",
        autores : ['Felipe','Carlos Gómez'],
        paginas : 700,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: true,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//3 Objeto
        titulo: "Scarface", 
        genero: "ficcion",
        autores : ['Felipe','Mauricio'],
        paginas : 600,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: true,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//4 Objeto
        titulo: "El padrino", 
        genero: "romance",
        autores : ['Felipe','Lucía Herrera'],
        paginas : 500,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: true,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//5 Objeto
        titulo: "Destino Final", 
        genero: "ficcion",
        autores : ['Felipe','Mauricio'],
        paginas : 100,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: true,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//6 Objeto
        titulo: "Star Wars", 
        genero: "ficcion",
        autores : ['Felipe','Carlos Gómez'],
        paginas : 200,
        nivelDeLectura : 'juvenil',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: false,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//7 Objeto
        titulo: "Dia de la independencia", 
        genero: "romance",
        autores : ['Felipe','Lucía Herrera'],
        paginas : 400,
        nivelDeLectura : 'juvenil',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: false,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Chiapas',
            anioFundacion: 1975
        }
    },
    {//8 Objeto
        titulo: "Scarface", 
        genero: "romance",
        autores : ['Felipe','Lucía Herrera'],
        paginas : 250,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: false,
        editorial : {
            nombre : 'Editorial New',
            pais : 'China',
            anioFundacion: 1975
        }
    },
    {//9 Objeto
        titulo: "El padrino", 
        genero: "ficcion",
        autores : ['Felipe','Mauricio'],
        paginas : 350,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: false,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Estados Unidos',
            anioFundacion: 1975
        }
    },
    {//10 Objeto
        titulo: "Destino Final", 
        genero: "ficcion",
        autores : ['Felipe','Mauricio'],
        paginas : 100,
        nivelDeLectura : 'adulto',
        precios : [
            {tipo : 'fisico', precio: 2000},
            {tipo : 'digital', precio : 1000}
        ],
        disponibilidadStock: true,
        editorial : {
            nombre : 'Editorial New',
            pais : 'Chile',
            anioFundacion: 1975
        }
    },
    



]);
/*

Objetivos de Aprobación No Directa (Calificación de 4 a 5 puntos):
1) Crear el script .js con la creación de la base de datos y las colecciones.
2) Buscar cuántos libros tienen a "Carlos Gómez" entre sus autores
3) Buscar cuántos libros son de género "romance" y tienen "Lucía Herrera" entre los autores.
4) Listar el título y número de páginas de los libros con nivel de lectura "juvenil".
5) Obtener título, número de páginas y nivel de lectura de los libros que tengan entre 200 y 400
páginas (inclusive).

*/

// 2) Buscar cuántos libros tienen a "Carlos Gómez" entre sus autores

db.librosEspeciales.countDocuments({autores : "Carlos Gomez"});


// 3) Buscar cuántos libros son de género "romance" y tienen "Lucía Herrera" entre los autores.

db.librosEspeciales.countDocuments({
    genero: 'romance',
    autores : 'Lucia Herrera'
});

// 4) Listar el título y número de páginas de los libros con nivel de lectura "juvenil".

db.librosEspeciales.find(
    {
        nivelDeLectura: 'juvenil',
    },
    {
        _id: 0,
        titulo : 1,
        paginas : 1
    }

);

//5) Obtener título, número de páginas y nivel de lectura de los libros que tengan entre 200 y 400 páginas (inclusive).

db.librosEspeciales.find(
    {paginas : {$gte: 200, $lte: 400}},
    { _id : 0,titulo : 1, paginas: 1,nivelDeLectura : 1}
)

/*

Objetivos de Aprobación Directa (Calificación de 6 a 10 puntos):
6) Mostrar los libros cuya editorial esté en países que contengan "chi" (ej.: "Chile", "Chiapas",
etc.), ordenados por número de páginas de manera descendente
7) Sumarle 20 páginas a todos los libros que están disponibles en stock.
8) Agregar el autor "Anónimo" a todos los libros con nivel de lectura "infantil"
9) Sumarle 10 páginas a los libros cuyo número de páginas esté entre 200 y 260 inclusive
10) Eliminar los libros cuyo número de páginas sea menor o igual a 210.

*/

// 6) Mostrar los libros cuya editorial esté en países que contengan "chi" (ej.: "Chile", "Chiapas")

// db.librosEspeciales.find(
//     {}
// )

// 7) Sumarle 20 páginas a todos los libros que están disponibles en stock.

db.librosEspeciales.updateMany(
    { disponibilidadStock : true},
    { $inc: {paginas: 20}}
)

// 8) Agregar el autor "Anónimo" a todos los libros con nivel de lectura "infantil"

// db.librosEspeciales.updateMany(
//     {nivelDeLectura : 'infantil'},
//     {$set : {autores : 'Anonimo'}}
// )

// 9) Sumarle 10 páginas a los libros cuyo número de páginas esté entre 200 y 260 inclusive

db.librosEspeciales.updateMany(
    { paginas : {$gte : 200 , $lte: 260}},
    { $inc : {paginas : 10}}
)


// 10) Eliminar los libros cuyo número de páginas sea menor o igual a 210.

db.librosEspeciales.deleteMany(
    { paginas : {$lte : 210}}
)