//Select all div with background purple
$("div").css("background", "rgb(191, 0, 255)");
//Select the divs with class "hightlight" and style them
$(".hightlight").css("width", "200px");
//Select the div with id "third" and style it
$("#third").css("border", " 2px solid orange");
//Select the first div and style
// $("div:first-of-type").css("color", "pink");

var styles = {
	color: "#ff0040",
	fontSize: "30px",
	fontWeight: "700",
	background: "#ffbf00"
};
$("div:first-of-type").css(styles);

$("h1").css("fontSize", "50px");
