
function fontSize() {  
  var width = 800; // ширина, от которой идет отсчет  
  var fontSize = 12; // минимальный размер шрифта  
  var bodyWidth = $('html').width();  
  var multiplier = bodyWidth / width;  
  if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);  
  $('body').css({fontSize: fontSize+'px'});  
}  
$(function() { fontSize(); });  
$(window).resize(function() { fontSize(); });  

$(document).ready(function(){
	$('.buttons').find('div').click(function(){
		if($(this).attr('id') != 'even' ) {
			$('#client').val($(this).find('span>span').text());
		} else {
			$('#client').val($('#sum').val());
		}
		$('#sh_change').val($('#client').val() - $('#sum').val());
	});
	$('#client').keyup(function(){
		$('#sh_change').val($('#client').val() - $('#sum').val());
	});
});