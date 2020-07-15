//Check off specific Todos by Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Type in the input part and hit enter
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
	//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //make the input become empty
	//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
	}
}); 

//Toggle the plus icon
$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});