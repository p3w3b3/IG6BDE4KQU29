window.addEventListener("load", function(){
{ 
let csv = Number($('#csv').text())

if(csv === -1) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
}
if(csv === -2) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
$('#promo3').css("background-color", "#f16d4d");
}
if(csv === -3) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
$('#promo3').css("background-color", "#f16d4d");
$('#promo4').css("background-color", "#f16d4d");
}
if(csv === -4) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
$('#promo3').css("background-color", "#f16d4d");
$('#promo4').css("background-color", "#f16d4d");
$('#promo5').css("background-color", "#f16d4d");
$('#promo6').css("background-color", "#f16d4d");
}

if(csv === 0) {
$('#promo1').css("background-color", "#e7e7e7");
$('#promo2').css("background-color", "#e7e7e7");
$('#promo3').css("background-color", "#e7e7e7");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");
$('#currtarget').text(4)

$('#tsk1').css("background-color", "#fffff");

}


if(csv === 1) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#e7e7e7");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");
$('#currtarget').text(4)

$('#tsk1').css("background-color", "#fffff");

}


if(csv === 2) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");
$('#currtarget').text(4)

$('#tsk1').css("background-color", "#fffff");

}

    
if(csv === 3) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#b6e8d0");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");
$('#currtarget').text(4)

$('#tsk1').css("background-color", "#fffff");

}

    if(csv === 4) {
$('#promo1').css("background-color", "#e7e7e7");
$('#promo2').css("background-color", "#e7e7e7");
$('#promo3').css("background-color", "#e7e7e7");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(8)

$('.genheadtarget').hide()
$('#cs2').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fffff");


}

    if(csv === 5) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#e7e7e7");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(8)

$('.genheadtarget').hide()
$('#cs2').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fffff");


}


    if(csv === 6) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(8)

$('.genheadtarget').hide()
$('#cs2').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fffff");


}



    if(csv === 7) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#b6e8d0");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(8)

$('.genheadtarget').hide()
$('#cs2').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fffff");


}



    if(csv === 8) {
$('#promo1').css("background-color", "#e7e7e7");
$('#promo2').css("background-color", "#e7e7e7");
$('#promo3').css("background-color", "#e7e7e7");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(12)

$('.genheadtarget').hide()
$('#cs3').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fcc022");
$('#tsk3').css("background-color", "#fffff");


}
    
    
if(csv === 9) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#e7e7e7");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(12)

$('.genheadtarget').hide()
$('#cs3').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fcc022");
$('#tsk3').css("background-color", "#fffff");
}



if(csv === 10) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#e7e7e7");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(12)

$('.genheadtarget').hide()
$('#cs3').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fcc022");
$('#tsk3').css("background-color", "#fffff");
}




if(csv === 11) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#b6e8d0");
$('#promo5').css("background-color", "#e7e7e7");
$('#promo6').css("background-color", "#e7e7e7");

$('#currtarget').text(12)

$('.genheadtarget').hide()
$('#cs3').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fcc022");
$('#tsk3').css("background-color", "#fffff");
}


if(csv === 12) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#b6e8d0");
$('#promo5').css("background-color", "#b6e8d0");
$('#promo6').css("background-color", "#b6e8d0");

$('#currtarget').text(12)

$('.genheadtarget').hide()
$('#cs3').show()

$('#tsk1').css("background-color", "#fcc022");
$('#tsk2').css("background-color", "#fcc022");
$('#tsk3').css("background-color", "#fcc022");
}


    
}
})
