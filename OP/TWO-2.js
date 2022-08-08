{
document.querySelector("#mydas").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db1').show()

$('.sub-nav').hide()
$('#sb1').css("display", "flex");

$('.generic-heading-ops').removeClass("cur");
$('#ops1').addClass("cur");

$('.nav-selection').removeClass("selected");
$('#mydas').addClass("selected");


})

document.querySelector("#myres").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db3').show()

$('.sub-nav').hide()
$('#sb2').css("display", "flex");

$('.generic-heading-ops').removeClass("cur");
$('#ops3').addClass("cur");

$('.nav-selection').removeClass("selected");
$('#myres').addClass("selected");


})

document.querySelector("#myan").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db-insights').show()

$('.sub-nav').hide()
$('#sb3').css("display", "flex");

$('.generic-heading-ops').removeClass("cur");
$('#ops-in').addClass("cur")

$('.nav-selection').removeClass("selected");
$('#myan').addClass("selected");
})

document.querySelector("#myco").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db5').show()

$('.sub-nav').hide()
$('#sb4').css("display", "flex");

$('.generic-heading-ops').removeClass("cur");
$('#ops5').addClass("cur");

$('.nav-selection').removeClass("selected");
$('#myco').addClass("selected");
})


document.querySelector("#ops2").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db2').show()

$('.generic-heading-ops').removeClass("cur");
$('#ops2').addClass("cur");

})


document.querySelector("#ops1").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db1').show()

$('.generic-heading-ops').removeClass("cur");
$('#ops1').addClass("cur");

})


  document.querySelector("#ops-in").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db-insights").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops-in").addClass("cur");
  });

}




{
let num1 = parseInt($('#rev1').text())
let num2 = parseInt($('#rev2').text())
if(num1>num2) {
$('#rev1').css("color", "#75c19d")
$('#rev11').css("color", "#75c19d")
}

else  if(num1===num2) {
$('#rev1').css("color", "#75c19d")
$('#rev11').css("color", "#75c19d")
}
else {
$('#rev1').css("color", "#F47056")
$('#rev11').css("color", "#F47056")
}
}
{
var rat1 = document.getElementById('rat1').textContent
var rat2 = document.getElementById('rat2').textContent
if( (Number(rat1))>(Number(rat2))) {
$('#rat1').css("color", "#75c19d")
} else if( (Number(rat1))===(Number(rat2))) {
$('#rat1').css("color", "#75c19d") }
 else {
$('#rat1').css("color", "#F47056")
}}
{
let pp1 = $('#prep1').text().slice(3,6)
let pp11 = $('#prep1').text().slice(0,2)
let ptime1 = pp11 + 'm ' + pp1 + 's'
$('#prep1').text(ptime1)
let pp2 = $('#prep2').text().slice(3,6)
let pp22 = $('#prep2').text().slice(0,2)
let ptime2 = pp22 + 'm ' + pp2 + 's'
$('#prep2').text(ptime2)
var ppt1 = document.getElementById('prep1').textContent
var ppt2 = document.getElementById('prep2').textContent
if( (Number(ppt1))<(Number(ppt2)) ) {
$('#prep1').css("color", "#F47056")
} else if( (Number(ppt1))===(Number(ppt2))) {
$('#prep1').css("color", "#F47056")
} else { 
$('#prep1').css("color", "#75c19d")
}
}
{
var upt1 = document.getElementById('upt1').textContent
var upt2 = document.getElementById('upt2').textContent
$('#upt1').text(upt1 + '%')
$('#upt2').text(upt2 + '%')
if( (Number(upt1))>(Number(upt2)) ) {
$('#upt1').css("color", "#75c19d")
} else if ( (Number(upt1))<(Number(upt2)) ) {
$('#upt1').css("color", "#F47056")
}
else {
$('#upt1').css("color", "#75c19d")
}}
document.querySelector("#ac1").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai1').css("background-color", "#ffffff")
$('#ai11').css("background-color", "#ffffff")
$('#ai111').css("background-color", "#ffffff")
$('#ai1111').css("background-color", "#ffffff")
$('#ab1').css('display', 'flex');
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
})
document.querySelector("#ac2").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai2').css("background-color", "#ffffff")
$('#ai22').css("background-color", "#ffffff")
$('#ai222').css("background-color", "#ffffff")
$('#ai2222').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').css('display', 'flex');
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
})
{
document.querySelector("#ac3").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai3').css("background-color", "#ffffff")
$('#ai33').css("background-color", "#ffffff")
$('#ai333').css("background-color", "#ffffff")
$('#ai3333').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').css('display', 'flex');
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
})
document.querySelector("#ac4").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai4').css("background-color", "#ffffff")
$('#ai44').css("background-color", "#ffffff")
$('#ai444').css("background-color", "#ffffff")
$('#ai4444').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').css('display', 'flex');
$('#ab5').hide()
$('#ab6').hide()
})
document.querySelector("#ac5").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai5').css("background-color", "#ffffff")
$('#ai55').css("background-color", "#ffffff")
$('#ai555').css("background-color", "#ffffff")
$('#ai5555').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').css('display', 'flex');
$('#ab6').hide()
})
document.querySelector("#ac6").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai6').css("background-color", "#ffffff")
$('#ai66').css("background-color", "#ffffff")
$('#ai666').css("background-color", "#ffffff")
$('#ai6666').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').css('display', 'flex');
})
}

// mobile
document.querySelector("#ac11").addEventListener("click", function() {
$('#ab1').css('display', 'flex');
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
$('#ac11').addClass("current");
$('#ac22').removeClass("current");
$('#ac33').removeClass("current");
$('#ac44').removeClass("current");
$('#ac55').removeClass("current");
$('#ac66').removeClass("current");
})
document.querySelector("#ac22").addEventListener("click", function() {
$('#ab1').hide()
$('#ab2').css('display', 'flex');
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
$('#ac11').removeClass("current");
$('#ac22').addClass("current");
$('#ac33').removeClass("current");
$('#ac44').removeClass("current");
$('#ac55').removeClass("current");
$('#ac66').removeClass("current");
})
{
document.querySelector("#ac33").addEventListener("click", function() {
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').css('display', 'flex');
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
$('#ac11').removeClass("current");
$('#ac22').removeClass("current");
$('#ac33').addClass("current");
$('#ac44').removeClass("current");
$('#ac55').removeClass("current");
$('#ac66').removeClass("current");
})
document.querySelector("#ac44").addEventListener("click", function() {
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').css('display', 'flex');
$('#ab5').hide()
$('#ab6').hide()
$('#ac11').removeClass("current");
$('#ac22').removeClass("current");
$('#ac33').removeClass("current");
$('#ac44').addClass("current");
$('#ac55').removeClass("current");
$('#ac66').removeClass("current");

})
document.querySelector("#ac55").addEventListener("click", function() {
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').css('display', 'flex');
$('#ab6').hide()
$('#ac11').removeClass("current");
$('#ac22').removeClass("current");
$('#ac33').removeClass("current");
$('#ac44').removeClass("current");
$('#ac55').addClass("current");
$('#ac66').removeClass("current");
})
document.querySelector("#ac66").addEventListener("click", function() {
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').css('display', 'flex');
$('#ac11').removeClass("current");
$('#ac22').removeClass("current");
$('#ac33').removeClass("current");
$('#ac44').removeClass("current");
$('#ac55').removeClass("current");
$('#ac66').addClass("current");
})
}
// mobile
{
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}


setTimeout(() => { 
$("#grossmtd").digits();
$("#grosslastmonth").digits();
$("#grossalltime").digits();
$("#ordersalltime").digits();
$("#rev1").digits();
$("#rev2").digits();
$("#grosstot").digits();
$(".ranking-gross").digits();

}, 1500)


}

$("#cf6").datepicker({
    onSelect: function() {
        $(this).change();
    }
});

{

 $("#cf7").timepicker({
timeFormat: "HH:mm",
interval: 15,
startTime: "00:00",
dynamic: false,
dropdown: false,
scrollbar: false,
 })
}


{
var today= new Date(); 
var next = new Date(today.setDate(today.getDate() + 7))
{
$(function () {
  $("#daterange").daterangepicker({
    autoUpdateInput: false,
    autoApply: true,
    minDate: next,

  });

  $("#daterange").on("apply.daterangepicker", function (ev, picker) {
    $(this).val(
      picker.startDate.format("MM/DD/YYYY") +
        " - " +
        picker.endDate.format("MM/DD/YYYY")
    );
    if (
      !!document.querySelector("#Type").value && document.querySelector("#Timeframe").value == "Temporary"
    ) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });
});

$("#daterange").on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});
}





  document.addEventListener("change", () => {
    if (document.querySelector("#Timeframe").value == "Temporary") {
      $("#tr").show();
    } else if (document.querySelector("#Timeframe").value == "Permanent") {
document.querySelector("#daterange").value = ''
      $("#tr").hide();
    }

})

  }

  document.getElementById("m5").addEventListener("change", () => {
    if (document.getElementById("m5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#m" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#m" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#m" + i).disabled = false;
    }
  });

  document.getElementById("t5").addEventListener("change", () => {
    if (document.getElementById("t5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#t" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#t" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#t" + i).disabled = false;
    }
  });

  document.getElementById("w5").addEventListener("change", () => {
    if (document.getElementById("w5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#w" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#w" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");

    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#w" + i).disabled = false;
    }
  });

  document.getElementById("tt5").addEventListener("change", () => {
    if (document.getElementById("tt5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#tt" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#tt" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#tt" + i).disabled = false;
    }
  });

  document.getElementById("ff5").addEventListener("change", () => {
    if (document.getElementById("ff5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ff" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#ff" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ff" + i).disabled = false;
    }
  });

  document.getElementById("s5").addEventListener("change", () => {
    if (document.getElementById("s5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#s" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#s" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#s" + i).disabled = false;
    }
  });

  document.getElementById("ss5").addEventListener("change", () => {
    if (document.getElementById("ss5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ss" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#ss" + i).value = " ";

          $("#bt1").hide();
          $("#bt2").css("display", "block");
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });

  {
    let timeset = 0;
    $(".mainfieldopstime-r1").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      defaultTime: "09:00",
      startTime: "00:00",
      dynamic: true,
      dropdown: true,
      scrollbar: false,
      change: function () {
        timeset++;

        if (
          timeset > 1 &&
          !!document.querySelector("#Type").value &&
          !!document.querySelector("#Timeframe").value
        ) {
          $("#bt1").hide();
          $("#bt2").css("display", "block");
        }
      },
    });
  }

  {
    let timeset = 0;
    $(".mainfieldopstime-r2").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      defaultTime: "18:00",
      startTime: "00:00",
      dynamic: true,
      dropdown: true,
      scrollbar: false,
      change: function () {
        timeset++;

        if (
          timeset > 1 &&
          !!document.querySelector("#Type").value &&
          !!document.querySelector("#Timeframe").value
        ) {
          $("#bt1").hide();
          $("#bt2").css("display", "block");
        }
      },
    });
  }



{
document.addEventListener("input", () => {
if(document.querySelector("#cf4").value == "Other") {
$('#cf8').show()
} else {
$('#cf8').hide()
}



if( (document.querySelector("#cf4").value == "Other") && ($(window).width() < 991)){
$('#otherbox').css("display", "flex");
} else if( (document.querySelector("#cf4").value !== "Other") && ($(window).width() < 991)) {
$('#otherbox').hide()
}


if(
!!document.querySelector("#cf1").value && 
!!document.querySelector("#cf2").value &&
!!document.querySelector("#cf3").value &&
(document.querySelector("#cf4").value != 'Other') &&
!!document.querySelector("#cf5").value &&
!!document.querySelector("#cf6").value &&
!!document.querySelector("#cf7").value &&
!!document.querySelector("#cf7").value &&
!!document.getElementById("Evidence").files.length

){
$("#btt1").hide()
$("#btt2").css("display", "block");
}

else if(
!!document.querySelector("#cf1").value && 
!!document.querySelector("#cf2").value &&
!!document.querySelector("#cf3").value &&
(document.querySelector("#cf4").value == 'Other') &&
!!document.querySelector("#cf5").value &&
!!document.querySelector("#cf6").value &&
!!document.querySelector("#cf7").value &&
!!document.querySelector("#cf7").value &&
!!document.querySelector("#cf8").value &&
!!document.getElementById("Evidence").files.length

){
$("#btt1").hide()
$("#btt2").css("display", "block");
}


else {
$("#btt1").css("display", "block");
$("#btt2").hide()
}


})
}
if ($(window).width() > 991) {
{
let rating = document.querySelectorAll('.leaderboard-rating')
let nl = (Number($('#numl').text()))
let nh = (Number($('#numh').text()))
rating.forEach((rating) => {
let ratingn = (Number(rating.textContent))
rating.closest(".leaderboard-bar").style.width = (100 - (ratingn-nl) / (nh - nl) * 100  + '%')
})
}
{
let rating = document.querySelectorAll('.ranking-gross')
let nl = (Number($('#grossl').text()))
let nh = (Number($('#grossh').text()))
rating.forEach((rating) => {
let ratingn = (Number(rating.textContent))
rating.closest(".ranking-bar").style.width = (0.4 + (ratingn - nl) / (nh - nl) * 100 + '%')
})
}}

{
document.getElementById('wf-form-Change-Operating-Hours').addEventListener('submit', function() {
mixpanel.track("Changed operating hours");
})

document.getElementById('wf-form-Challenge-Refund').addEventListener('submit', function() {
mixpanel.track("Requested challenge refund");
})
}
