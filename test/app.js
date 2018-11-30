$(function(){

var dolar 	= $('#dolar');
var euro	= $('#euro');
var uf		= $('#uf');
var utm		= $('#utm');

var url			= 'https://mindicador.cl/api'
var queryParams = ['uf,dolar,euro,utm'];

var precioDolar, precioEuro, precioUf, precioUtm;

$.ajax({
	url: url + '/' + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2] + '&' + queryParams[3],
	method: 'GET',
	dataType: 'json',
})
.done(function(data){
	dolar.text(data.dolar.valor)
	precioDolar = data.dolar.valor
	euro.text(data.euro.valor)
	precioEuro 	= data.euro.valor
	uf.text(data.uf.valor)
	precioUf 	= data.uf.valor
	utm.text(data.utm.valor)
	precioUtm 	= data.utm.valor	
});

	$('#cambio-clp').on('click', function(e){
		e.preventDefault();
		$('#dolar').text(($('#numero').val() / precioDolar).toFixed(2));
		$('#euro').text(($('#numero').val() / precioEuro).toFixed(2));
		$('#uf').text(($('#numero').val() / precioUf).toFixed(2));
		$('#utm').text(($('#numero').val() / precioUtm).toFixed(2));
	});

	$('#cambio-usd').on('click', function(e){
		e.preventDefault();
		$('#clp').text(($('#numero-2').val() * precioDolar).toFixed(2));
		//$('#hide').addAttr('hidden');
	})



}); //document.ready