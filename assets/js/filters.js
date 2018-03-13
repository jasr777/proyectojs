// Filtros del contenido

// Búsqueda
function buscar(nombreHotel) {
  console.log('Funcion buscar');
  console.log(`Se busca : ${nombreHotel}`);

  const hotelesEnVector = _.flatten(hoteles);
  const resultadoBusqueda = _.chunk(hotelesEnVector.filter(hotel => hotel.nombreHotel.toLowerCase().includes(nombreHotel.toLowerCase())), 15);
  console.log('Resultado de la busqueda : ');
  console.log(resultadoBusqueda);
  return resultadoBusqueda;
}
