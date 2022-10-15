setTimeout(() => { 
{
  document.getElementById("sm1p1button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#sm1p1video").show();
    $("#sm1p1button").css("background-color", "#e7edf0");
  });
}

{
  document.getElementById("sm1p2button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#sm1p2video").show();
    $("#sm1p2button").css("background-color", "#e7edf0");
  });
}

{
  document.getElementById("sm1p3button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#sm1p3video").show();
    $("#sm1p3button").css("background-color", "#e7edf0");
  });
}


const checkcompleted1 = function() {
let prognum = 0;
    if (document.querySelector("#sm1p1x").style.display == "block") {
      prognum++;
    }
    if (document.querySelector("#sm1p2x").style.display == "block") {
      prognum++;
    }
    if (document.querySelector("#sm1p3x").style.display == "block") {
      prognum++;
    }
    document.querySelector("#prognum").textContent = prognum;
}

{
  var iframe = document.querySelector("#sm1p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#sm1p1").hide();
    $("#sm1p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ ab1p1: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#sm1p2video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#sm1p2").hide();
    $("#sm1p2x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ ab1p2: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#sm1p3video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#sm1p3").hide();
    $("#sm1p3x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ ab1p3: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}

}, 2000);
