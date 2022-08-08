setTimeout(() => { 
{
  document.getElementById("v1p1button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#v1p1video").show();
    $("#v1p1button").css("background-color", "#e7edf0");
  });
}

const checkcompleted1 = function() {
let prognumv = 0;
    if (document.querySelector("#v1p1x").style.display == "block") {
      prognumv++;
    }
    document.querySelector("#prognumv").textContent = prognumv;
}

{
  var iframe = document.querySelector("#v1p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#v1p1").hide();
    $("#v1p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ v1p1: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}
  
}, 2000);
