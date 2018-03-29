$(document).ready(function($) {
	//click on h2 for collapse
    $("h2").click(function() {
	//panel collapse
    $(this).next().slideToggle(500);
	});
  });