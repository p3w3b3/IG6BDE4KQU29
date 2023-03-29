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
    
    {
      document.getElementById("s2p1button").addEventListener("click", (event) => {
        $(".section1selection").css("background-color", "white");
        $(".section1div").hide();
        $("#s2p1video").show();
        $("#s2p1button").css("background-color", "#e7edf0");
      });
    }
    {
      document.getElementById("s2p2button").addEventListener("click", (event) => {
        $(".section1selection").css("background-color", "white");
        $(".section1div").hide();
        $("#s2p2video").show();
        $("#s2p2button").css("background-color", "#e7edf0");
      });
    }
    
    {
      document.getElementById("s2p3button").addEventListener("click", (event) => {
        $(".section1selection").css("background-color", "white");
        $(".section1div").hide();
        $("#s2p3video").show();
        $("#s2p3button").css("background-color", "#e7edf0");
      });
    }
    
    
    {
      document.getElementById("s2p4button").addEventListener("click", (event) => {
        $(".section1selection").css("background-color", "white");
        $(".section1div").hide();
        $("#s2p4video").show();
        $("#s2p4button").css("background-color", "#e7edf0");
      });
    }

    {
        document.getElementById("s2p5button").addEventListener("click", (event) => {
          $(".section1selection").css("background-color", "white");
          $(".section1div").hide();
          $("#s2p5video").show();
          $("#s2p5button").css("background-color", "#e7edf0");
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
    
    const checkcompleted2 = function() {
    let prognum2 = 0;
        if (document.querySelector("#s2p1x").style.display == "block") {
          prognum2++;
        }
        if (document.querySelector("#s2p2x").style.display == "block") {
          prognum2++;
        }
        if (document.querySelector("#s2p3x").style.display == "block") {
          prognum2++;
        }
        if (document.querySelector("#s2p4x").style.display == "block") {
          prognum2++;
        }
        if (document.querySelector("#s2p5x").style.display == "block") {
        prognum2++;
        }
        document.querySelector("#prognum2").textContent = prognum2;
    }
    
    
    {
      var iframe = document.querySelector("#s1p1video");
      var player = new Vimeo.Player(iframe);
      var finished = function () {
        videoended = "true";
        $("#s1p1").hide();
        $("#s1p1x").show();
        firebase.firestore().doc("users/" + firebase.auth().currentUser.uid)
          .set({ stackone_p1v1: true }, { merge: true });
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
          .set({ stackone_p1v2: true }, { merge: true });
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
          .set({ stackone_p1v3: true }, { merge: true });
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
          .set({ stackone_p1v4: true }, { merge: true });
        checkcompleted1()
      };
      player.on("ended", finished);
    }
    
    {
      var iframe = document.querySelector("#s2p1video");
      var player = new Vimeo.Player(iframe);
      var finished = function () {
        videoended = "true";
        $("#s2p1").hide();
        $("#s2p1x").show();
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ stackone_p2v1: true }, { merge: true });
        checkcompleted2()
      };
      player.on("ended", finished);
    }
    
    {
      var iframe = document.querySelector("#s2p2video");
      var player = new Vimeo.Player(iframe);
      var finished = function () {
        videoended = "true";
        $("#s2p2").hide();
        $("#s2p2x").show();
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ stackone_p2v2: true }, { merge: true });
        checkcompleted2()
      };
      player.on("ended", finished);
    }
    
    {
      var iframe = document.querySelector("#s2p3video");
      var player = new Vimeo.Player(iframe);
      var finished = function () {
        videoended = "true";
        $("#s2p3").hide();
        $("#s2p3x").show();
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ stackone_p2v3: true }, { merge: true });
        checkcompleted2()
      };
      player.on("ended", finished);
    }

    {
      var iframe = document.querySelector("#s2p4video");
      var player = new Vimeo.Player(iframe);
      var finished = function () {
        videoended = "true";
        $("#s2p4").hide();
        $("#s2p4x").show();
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ stackone_p2v4: true }, { merge: true });
        checkcompleted2()
      };
      player.on("ended", finished);
    }
    
    {
      var iframe = document.querySelector("#s2p5video");
      var player = new Vimeo.Player(iframe);
      var finished = function () {
        videoended = "true";
        $("#s2p5").hide();
        $("#s2p5x").show();
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ stackone_p2v5: true }, { merge: true });
        checkcompleted2()
      };
      player.on("ended", finished);
    }
    
    

    }, 2000);
