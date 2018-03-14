// Filtros del contenido
// [TODO] : Filtros en los resultados de busqueda
// Búsqueda
function buscar(nombreHotel) {
  console.log('Funcion buscar');
  console.log(`Se busca : ${nombreHotel}`);
  const hotelesEnVector = _.flatten(hoteles);
  const resultadoBusqueda = _.chunk(hotelesEnVector.filter(hotel => hotel.nombreHotel.toLowerCase().includes(nombreHotel.toLowerCase())), 15);
  console.log('Resultado de la busqueda : ');
  console.log(resultadoBusqueda);
  hotelesFront = resultadoBusqueda.slice(0);
  // return resultadoBusqueda;
}

// Ordenar por mejor valorados

function mejorValorados() {
  console.log('mejor valorados');
  hotelesFront = _.flatten(hotelesFront);
  hotelesFront = _.chunk(hotelesFront.sort((a, b) => a.valoracionBack - b.valoracionBack).reverse(), 15);
  console.log(hotelesFront);
}

// Ordenar por numero de comentarios

function ordenarPorComentarios() {
  console.log('por numero de comentarios');
  hotelesFront = _.flatten(hotelesFront);
  hotelesFront = _.chunk(hotelesFront.sort((a, b) => a.comentariosBack - b.comentariosBack).reverse(), 15);
  console.log(hotelesFront);
}

// Ordenar Por los 10 mejores

function topTen() {
  console.log('Los 10 mejores');
  $('#valoraciones').html('');
  mejorValorados();
  hotelesFront = _.flatten(hotelesFront);
  hotelesFront = _.chunk(hotelesFront.slice(0, 10), 15);
  console.log(hotelesFront);
}

// Obtener rango valoracion

function obtenerRangoValoracion(notaMin, notaMax) {
  hotelesFront = _.flatten(hotelesFront);
  hotelesFront = hotelesFront.filter(hotel => hotel.valoracionBack >= notaMin && hotel.valoracionBack <= notaMax);
  hotelesFront = _.chunk(hotelesFront.sort((a, b) => a.valoracionBack - b.valoracionBack).reverse(), 15);
  console.log(hotelesFront);
}
