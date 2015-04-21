console.log("Hello world");

$( document ).ready(function() {
console.log( "ready!" );
$('#myModal').on('shown.bs.modal', function () {
		  $('#myInput').focus();
		});
});

