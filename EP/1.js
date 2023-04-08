{
  document.querySelector("#mydas").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db1").show();

    $(".sub-nav").hide();
    $("#sb1").css("display", "flex");

    $(".generic-heading-ops").removeClass("cur");
    $("#ops1").addClass("cur");

    $(".nav-selection").removeClass("selected");
    $("#mydas").addClass("selected");
  });

  document.querySelector("#myan").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db4").show();

    $(".sub-nav").hide();
    $("#sb3").css("display", "flex");

    $(".generic-heading-ops").removeClass("cur");
    $("#ops4").addClass("cur");

    $(".nav-selection").removeClass("selected");
    $("#myan").addClass("selected");
  });

  document.querySelector("#myco").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db5").show();

    $(".sub-nav").hide();
    $("#sb4").css("display", "flex");

    $(".generic-heading-ops").removeClass("cur");
    $("#ops5").addClass("cur");

    $(".nav-selection").removeClass("selected");
    $("#myco").addClass("selected");
  });

  document.querySelector("#ops2").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db2").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops2").addClass("cur");
  });

  document.querySelector("#ops1").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db1").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops1").addClass("cur");
  });

  document.querySelector("#ops-in").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db-insights").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops-in").addClass("cur");
  });

  document.querySelector("#ops4").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db4").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops4").addClass("cur");
  });



  document.querySelector("#ops-in").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db-insights").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops-in").addClass("cur");
  });
 
   document.querySelector("#ops4").addEventListener("click", function () {
    $(".main-section-ops").hide();
    $("#db4").show();

    $(".generic-heading-ops").removeClass("cur");
    $("#ops4").addClass("cur");
  });

}

// mobile
{
  let csv = Number($("#csv").text());
  if (csv > 7 && csv < 13) {
    $("#currtarget").text(12);
    $("#cs3").show();
    $("#cs2").hide();
    $("#cs1").hide();
    $("#tsk3").css("background-color", "#e9fff4");
  }
  if (csv > 3 && csv < 9) {
    $("#currtarget").text(4);
    $("#cs3").hide();
    $("#cs2").show();
    $("#cs1").hide();
    $("#tsk2").css("background-color", "#e9fff4");
  }
  if (csv === -1) {
    $("#cs3").hide();
    $("#cs2").hide();
    $("#cs1").hide();
    $("#cs0").show();
    $("#tsk0").css("background-color", "#ffd7cd");
    $("#promo1").css("background-color", "#f16d4d");
    $("#promo2").css("background-color", "#f16d4d");
  }
  if (csv === -2) {
    $("#cs3").hide();
    $("#cs2").hide();
    $("#cs1").hide();
    $("#cs0").show();
    $("#tsk0").css("background-color", "#ffd7cd");
    $("#promo1").css("background-color", "#f16d4d");
    $("#promo2").css("background-color", "#f16d4d");
    $("#promo3").css("background-color", "#f16d4d");
  }
  if (csv === -3) {
    $("#cs3").hide();
    $("#cs2").hide();
    $("#cs1").hide();
    $("#cs0").show();
    $("#tsk0").css("background-color", "#ffd7cd");
    $("#promo1").css("background-color", "#f16d4d");
    $("#promo2").css("background-color", "#f16d4d");
    $("#promo3").css("background-color", "#f16d4d");
    $("#promo4").css("background-color", "#f16d4d");
  }
  if (csv === -4) {
    $("#cs3").hide();
    $("#cs2").hide();
    $("#cs1").hide();
    $("#cs0").show();
    $("#tsk0").css("background-color", "#ffd7cd");
    $("#promo1").css("background-color", "#f16d4d");
    $("#promo2").css("background-color", "#f16d4d");
    $("#promo3").css("background-color", "#f16d4d");
    $("#promo4").css("background-color", "#f16d4d");
    $("#promo5").css("background-color", "#f16d4d");
    $("#promo6").css("background-color", "#f16d4d");
  }
  if (csv === 0 || (csv > 0 && csv < 5)) {
    $("#cs3").hide();
    $("#cs2").hide();
    $("#cs1").show();
    $("#tsk1").css("background-color", "#e9fff4");
  }
  if (csv == 1 || csv == 5 || csv == 9) {
    $("#promo1").css("background-color", "#b6e8d0");
    $("#promo2").css("background-color", "#b6e8d0");
  }
  if (csv == 2 || csv == 4 || csv == 6 || csv == 10) {
    $("#promo1").css("background-color", "#b6e8d0");
    $("#promo2").css("background-color", "#b6e8d0");
    $("#promo3").css("background-color", "#b6e8d0");
  }
  if (csv == 3 || csv == 7 || csv == 11) {
    $("#promo1").css("background-color", "#b6e8d0");
    $("#promo2").css("background-color", "#b6e8d0");
    $("#promo3").css("background-color", "#b6e8d0");
    $("#promo4").css("background-color", "#b6e8d0");
  }
  if (csv == 4 || csv == 8 || csv == 12) {
    $("#promo1").css("background-color", "#b6e8d0");
    $("#promo2").css("background-color", "#b6e8d0");
    $("#promo3").css("background-color", "#b6e8d0");
    $("#promo4").css("background-color", "#b6e8d0");
    $("#promo5").css("background-color", "#b6e8d0");
    $("#promo6").css("background-color", "#b6e8d0");
  }
}


{
  $.fn.digits = function () {
    return this.each(function () {
      $(this).text(
        $(this)
          .text()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
      );
    });
  };

  setTimeout(() => {
    $(".currency-sep").digits();
    $(".currencysep").digits();
    $(".currency-sep2").digits();
    $(".currencysep2").digits();
    $(".sitesheading").digits();
    $(".ranking-gross").digits();
  }, 1500);
}


$("#cf6").datepicker({
  onSelect: function () {
    $(this).change();
  },
});

{
  $("#cf7").timepicker({
    timeFormat: "HH:mm",
    interval: 15,
    startTime: "00:00",
    dynamic: false,
    dropdown: false,
    scrollbar: false,
  });
}
if ($(window).width() > 991) {
  {
    let rating = document.querySelectorAll(".leaderboard-rating");
    let nl = Number($("#numl").text());
    let nh = Number($("#numh").text());
    rating.forEach((rating) => {
      let ratingn = Number(rating.textContent);
      rating.closest(".leaderboard-bar").style.width =
        100 - ((ratingn - nl) / (nh - nl)) * 100 + "%";
    });
  }
  {
    let rating = document.querySelectorAll(".ranking-gross");
    let nl = Number($("#grossl").text());
    let nh = Number($("#grossh").text());
    rating.forEach((rating) => {
      let ratingn = Number(rating.textContent);
      rating.closest(".ranking-bar").style.width =
        0.4 + ((ratingn - nl) / (nh - nl)) * 100 + "%";
    });
  }
}
