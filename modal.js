$(document).ready(function(){
                    
	$('a.open').click(function(){
        $('.modal-content').addClass('active');
        });
    $('a.close').click(function(){
        $('.modal-content').removeClass('active');
        });
 });       