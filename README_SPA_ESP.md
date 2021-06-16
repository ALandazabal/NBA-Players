### Mach Eight Sample Project

Gracias por tomarse el tiempo para hacer este proyecto. Somos una empresa que
valora enormemente a nuestros ingenieros. Buscamos ingenieeros inteligentes con
excelente experiencia y/o muchos potencial.


## Project

El proyecto consiste en crear un front end sencillo para mostrar datos sobre
los jugadores de la NBA.  Los datos originalmente vienen de
[aquí](https://www.openintro.org/data/index.php?data=nba_heights).  Los datos
son servidos en formato json [aquí](https://mach-eight.uc.r.appspot.com/).

La tarea es crear una aplicación de una sola pagina (SPA) con 3 paginas
diferentes.  La aplicación tiene que cargar los datos en formato json desde la
URL anterior de mach-eight. La URL no está paginada y se puede cargar todo de
los datos en la memoria a la vez. Todas las páginas incluyen una barra de
navegación con 2 elementos: ``Lista de Jugadores'' y ``Jugadores
Coincidentes''.

Se espera que se puede completar la tarea en 1-3 horas. Si está tomando mas
tiempo que eso, communiquese con nosotros por favor. No quiero que nadie pase
un día completo en esto.


# Página de lista de jugadores 

La página de lista de jugadores es la página predeterminada que se muestra al
cargar la aplicación. Incluye una vista tabular de todos los jugadores en el
conjunto de datos, incluido el nombre, el apellido, la altura en metros, y la
altura en pulgadas. Al hacer clic en encabezamiento de columna, se ordena por
esa columna.  Al hacer clic en la fila de un jugador, se abre la página de
detalles del jugador.


# Página de detalles de jugador

La página de detalles de jugador incluye el nombre y altura del jugador.
Ademas, muestra una lista de todos los nombres de jugadores que tiene la misma
altura en pulgados. El elemento de ``Lista de jugadores'' es el enlace activo
en la barra de navegación en la página de detalles.


# Página de Jugadores Coincidentes

Se puedo acceder a la página de jugadores coincidentes a través del enlace de
la barra de navegación.  La página de jugadores coincidentes solicita al usario
que ingrese una cantidad de pulgadas. Después, se muestra todos los pares de
jugadores cuyas alturas en pulgadas se suman al número de entrada. Por ejemplo,
si el usario ingrese 153, la página mostraría Alex Acker y Hassan como uno de
los pares (es posible que habría otros pares también).

El algoritmo para encontrar los pares debe ser más rápido que O(n^2).


## Evaluation

Evaluaremos el proyecto por su corrección, es decir, todos las características
funcionan según lo especificado. También, evaluaremos la limpieza del código y
la arquitectura. La página de coincidencias debe funcionar en un tiempo y uso
de memoria razonables. Puntos de bonificación por pruebas unitarias.

Esta no es una prueba a libro cerrado. Me puede contactar si hay algunas dudas.


## Submission

La forma preferido de envío es mediante la publicación de un repositorio
público en github con su código y un archivo README que explique cómo ejecutar
el código. También puedo aceptar un archivo zip enviado por correo electrónico
con el mismo contenido. 
