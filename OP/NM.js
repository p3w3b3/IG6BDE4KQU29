document.querySelector("#ops4").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db4').show()
$('.generic-heading-ops').removeClass("cur");
$('#ops4').addClass("cur");
})



document.querySelector("#myan").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db4').show()

$('.sub-nav').hide()
$('#sb3').css("display", "flex");

$('.generic-heading-ops').removeClass("cur");
$('#ops4').addClass("cur")

$('.nav-selection').removeClass("selected");
$('#myan').addClass("selected");
})


{
let lastgross = parseInt($('#grosslastweek').text())
let lastrating = parseInt($('#ratinglastweek').text())
let currgross = parseInt($('#grossthisweek').text())
let currrating = parseInt($('#ratingthisweek').text())
let difference1 = (currgross-lastgross)
if (difference1<=0) {
$('#grossup').show()
} else {
$('#grossdown').show()}
let difference2 = (currrating-lastrating)
if (difference2<=0) {
$('#ratup').show()
} else {
$('#ratdown').show()
}}{
let lastgross = parseInt($('#grosslastweek').text())
let lastrating = parseInt($('#ratinglastweek').text())
let currgross = parseInt($('#grossthisweek').text())
let currrating = parseInt($('#ratingthisweek').text())
$('#grosschange').text(Math.abs(currgross-lastgross))
$('#ratingchange').text(Math.abs(currrating-lastrating))
if (lastgross === currgross) {
$('#grosschange').text('-')
$('#grossdown').hide()
$('#grossup').hide()}
if (lastrating === currrating) {
$('#ratingchange').text('-')
$('#ratup').hide()
$('#ratdown').hide()}}
