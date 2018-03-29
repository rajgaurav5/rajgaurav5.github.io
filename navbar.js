$(document).ready(function(){
	$("#navbarlink").on("click", function(){
		$("li").toggleClass("showing");
		$("#link").attr("href", "modal.html");
		$(".link").attr("href", "collapse.html");
	});
	
	$(".navbar-defn").on("click", function(){
	$(".navbar-defn p").css("color","white");
	});
});