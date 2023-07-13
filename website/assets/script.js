
window.onload = function(){
	$(function() {
		$('.lazy').Lazy();
	});


	var modal = document.getElementById("imageModal");
	var modalImg = document.getElementById("modalImg");


	modal.onclick = function() {
		modal.style.display = "none";
	}

	$("img").on("click", function(){
		modal.style.display = "flex";
		modalImg.src = this.src;
	})

	$(document).on("keyup", function(event) {
		if(event.key == "Escape") {
			modal.style.display = "none";
		}
	})
}
