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
