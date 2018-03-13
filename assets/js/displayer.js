// Manejador de elementos del DOM

cargarDatos().then(() => {
  dibujarHoteles(hotelesFront, 0);
  dibujarPaginacion(hotelesFront.length, hotelesFront);
  dibujarResultadosEncontrados();
});


function dibujarHoteles(hoteles, pagina, event) {
  if (event) {
    $('#hoteles').html('');
    event.preventDefault();
    /*     indiceActual = pagina;
 */
  }
  const hotelesADibujar = hotelesFront[pagina];
  for (let i = 0; i < hotelesADibujar.length; i++) {
    dibujarHotel(hotelesADibujar[i]);
  }
}

function dibujarHotel(hotel) {
  $('#hoteles').append(`
    <div class="card col-md-4" style="width: 18rem;">
        <div class="card-body">
            <img class="card-img-top" src="${hotel.imagen}" alt="Imagen del Hotel">
            <h5  class="card-title">${hotel.nombreHotel}</h5>
            <h6  class="card-subtitle mb-2 text-muted">${hotel.direccionHotel}</h6>
            <p   class="card-text">${hotel.descripcionHotel}</p>
            <p   class="card-text">${hotel.valoracion}</p>
            <p   class="card-text">${hotel.comentarios}</p>
        </div>
    </div>
    </div>
    `);
}
// [TODO]  : Pagina siguiente / anterior
function dibujarPaginacion(elementos, hoteles) {
/*   $('#paginacion').append('<li class="page-item"><a onclick="dibujarHoteles(hoteles,class="page-link" href="#">Previous</a></li>'); */

  for (let i = 0; i < elementos; i++) {
    $('#paginacion').append(`<li  class="page-item"><a onclick="dibujarHoteles(hotelesFront,${i},event)" class="page-link" href="#">${i}</a></li>`);
  }
  /* $('#paginacion').append('<li class="page-item"><a class="page-link" href="#">Next</a></li></ul>'); */
}

function dibujarResultadoBusquedas(resultadoBusqueda) {
  console.log('dibujando...');
  $('#hoteles').html('');
  dibujarHoteles(resultadoBusqueda, 0, '');
  $('#paginacion').html('');
  dibujarPaginacion(resultadoBusqueda.length, resultadoBusqueda);
}

$('#buscar').click((event) => {
  event.preventDefault();
  console.log('evento buscar');
  console.log('se busca');
  console.log($('#valorBusqueda').val());
  hotelesFront = buscar($('#valorBusqueda').val());

  console.log('resultado');
  console.log(hotelesFront);
  dibujarResultadoBusquedas(hotelesFront);
  dibujarResultadosEncontrados();
});

$('#valorBusqueda').change(() => {
  if ($('#valorBusqueda').val().length == 0) {
    $('#hoteles').html('');
    $('#paginacion').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

function dibujarResultadosEncontrados() {
  $('#resultados').html('');
  $('#resultados').append(`<p>Se encontraron ${_.flatten(hotelesFront).length} resultados</p>`);
}
