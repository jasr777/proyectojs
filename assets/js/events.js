$(document).ready(() => {
  $('#valorBusqueda').val('');
  $('#valoraciones').prop('checked', false);
  $('#comentarios').prop('checked', false);
  $('#comentarios').prop('checked', false);
},);


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
$('#valoraciones').click(() => {
  console.log('VALORACIONES');
  if ($('#valoraciones').prop('checked')) {
    $('#hoteles').html('');
    mejorValorados();
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

$('#comentarios').click(() => {
  console.log('comentarios');
  if ($('#comentarios').prop('checked')) {
    $('#hoteles').html('');
    ordenarPorComentarios();
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

$('#topten').click(() => {
  console.log('topten');
  if ($('#topten').prop('checked')) {
    $('#hoteles').html('');
    $('#paginacion').html('');
    topTen();
    dibujarHoteles(hotelesFront, 0, '');
    dibujarResultadosEncontrados();
  } else {
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});
