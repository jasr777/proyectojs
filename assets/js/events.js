$(document).ready(() => {
  $('#valorBusqueda').val('');
  $('#valoraciones').prop('checked', false);
  $('#comentarios').prop('checked', false);
  $('#topten').prop('checked', false);
});

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
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});
$('#valoraciones').click(() => {
  hotelesFront = hoteles.slice(0);

  console.log('VALORACIONES');
  if ($('#valoraciones').prop('checked')) {
    $('#comentarios').prop('checked', false);
    $('#topten').prop('checked', false);

    $('#hoteles').html('');
    mejorValorados();
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

$('#comentarios').click(() => {
  hotelesFront = hoteles.slice(0);

  console.log('comentarios');
  if ($('#comentarios').prop('checked')) {
    $('#valoraciones').prop('checked', false);
    $('#topten').prop('checked', false);

    $('#hoteles').html('');
    ordenarPorComentarios();
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});

$('#topten').click(() => {
  console.log('topten');
  if ($('#topten').prop('checked')) {
    $('#valoraciones').prop('checked', false);
    $('#comentarios').prop('checked', false);
    $('#hoteles').html('');
    topTen();
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarHoteles(hotelesFront, 0, '');
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  } else {
    $('#hoteles').html('');
    hotelesFront = hoteles.slice(0);
    dibujarHoteles(hotelesFront, 0, '');
    console.log('hoteles length');
    console.log(hotelesFront.length);
    dibujarPaginacion(hotelesFront.length, hotelesFront);
    dibujarResultadosEncontrados();
  }
});
