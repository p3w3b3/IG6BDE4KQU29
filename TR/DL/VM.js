setTimeout(() => { 
{
  document.getElementById("s1p1button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#s1p1video").show();
    $("#s1p1button").css("background-color", "#e7edf0");
  });
}

{
  document.getElementById("s1p2button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#s1p2video").show();
    $("#s1p2button").css("background-color", "#e7edf0");
  });
}

{
  document.getElementById("s1p3button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#s1p3video").show();
    $("#s1p3button").css("background-color", "#e7edf0");
  });
}

{
  document.getElementById("s1p4button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#s1p4video").show();
    $("#s1p4button").css("background-color", "#e7edf0");
  });
}


const checkcompleted1 = function() {
let prognum = 0;
    if (document.querySelector("#s1p1x").style.display == "block") {
      prognum++;
    }
    if (document.querySelector("#s1p2x").style.display == "block") {
      prognum++;
    }
    if (document.querySelector("#s1p3x").style.display == "block") {
      prognum++;
    }
    if (document.querySelector("#s1p4x").style.display == "block") {
      prognum++;
    }
    document.querySelector("#prognum").textContent = prognum;
}

{
  var iframe = document.querySelector("#s1p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s1p1").hide();
    $("#s1p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ d1p1: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#s1p2video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s1p2").hide();
    $("#s1p2x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ d1p2: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#s1p3video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s1p3").hide();
    $("#s1p3x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ d1p3: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#s1p4video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s1p4").hide();
    $("#s1p4x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ d1p4: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}



}, 2000);
