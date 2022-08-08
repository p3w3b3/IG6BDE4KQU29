setTimeout(() => { 
{
  document.getElementById("sm1p1button").addEventListener("click", (event) => {
    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#sm1p1video").show();
    $("#sm1p1button").css("background-color", "#e7edf0");
  });
}

const checkcompleted1 = function() {
let prognumsm = 0;
    if (document.querySelector("#sm1p1x").style.display == "block") {
      prognumsm++;
    }
    document.querySelector("#prognumsm").textContent = prognumsm;
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
      .set({ sm1p1: true }, { merge: true });
    checkcompleted1()
  };
  player.on("ended", finished);
}
  
}, 2000);
