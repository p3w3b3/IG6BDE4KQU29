{
  {
    document.getElementById("dash-button-1").addEventListener("click", () => {
      $(".dash-sep").hide();
      $("#dashpart3").css("display", "flex");
    });

    document.getElementById("dash-button-4").addEventListener("click", () => {
      $(".dash-sep").hide();
      $("#dashpart5").css("display", "flex");
    });

    document.getElementById("dash-button-5").addEventListener("click", () => {
      $(".dash-sep").hide();
      $("#dashpart4").css("display", "flex");
    });

    document.getElementById("dash-button-7").addEventListener("click", () => {
      $(".main-section-ops").hide();
      $(".dash-sep").hide();
      $("#db-insights").css("display", "flex");
    });

    document.getElementById("dash-button-8").addEventListener("click", () => {
      $(".main-section-ops").hide();
      $(".dash-sep").hide();
      $("#db4").css("display", "flex");
      $("#dashpart7").css("display", "flex");
      
    });

    document.getElementById("mbmenu1").addEventListener("click", () => {
      $(".mobile-menu-button").removeClass("current");
      $("#mbmenu1").addClass("current");

      $(".main-section-ops").hide();
      $("#db1").css("display", "flex");
      $(".dash-sep").hide();
      $("#dashpart1").css("display", "flex");

      $(".middle-box").hide();
      $("#mbox1").css("display", "flex");

      $(".mobile-menu-wrapper").click();
      $(".bottom-bar-dsb").hide();
      $("#db-bar-1").css("display", "flex");
    });

    document.getElementById("mbmenuleader").addEventListener("click", () => {
      $(".mobile-menu-button").removeClass("current");
      $("#mbmenuleader").addClass("current");

      $(".main-section-ops").hide();
      $("#db2").css("display", "flex");
      $(".middle-box").hide();
      $("#mbox1").css("display", "flex");

      $(".mobile-menu-wrapper").click();
      $(".bottom-bar-dsb").hide();
      $("#db-bar-lead").css("display", "flex");
    });

    document.getElementById("mbmenu3").addEventListener("click", () => {
      $(".mobile-menu-button").removeClass("current");
      $("#mbmenu3").addClass("current");

      $(".main-section-ops").hide();
      $("#db4").css("display", "flex");
      $(".dash-sep").hide();
      $("#dashpart7").css("display", "flex");

      $(".bottom-bar-dsb").hide();
      $("#db-bar-3").css("display", "flex");

      $(".middle-box").hide();
      $("#mbox3").css("display", "flex");

      $(".mobile-menu-wrapper").click();
    });

    document.getElementById("mbmenu4").addEventListener("click", () => {
      $(".mobile-menu-button").removeClass("current");
      $("#mbmenu4").addClass("current");

      $(".main-section-ops").hide();
      $("#db5").css("display", "flex");
      $(".dash-sep").hide();
      $("#dashpart8").css("display", "flex");

      $(".bottom-bar-dsb").hide();
      $("#db-bar-4").css("display", "flex");

      $(".middle-box").hide();
      $("#mbox5").css("display", "flex");

      $(".mobile-menu-wrapper").click();
    });

   
    
}

}


{
  const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q",
  };

  const email = document.querySelector("#email");
  const signOutButton = document.querySelector("#signOutButton");
  const signOutButton2 = document.querySelector("#mobsignout");
  const userName = document.querySelector("#userName");
  const userName2 = document.querySelector("#userName2");
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const authChanged = firebase.auth().onAuthStateChanged((user) => {
	  
    const signout = () => {
      auth.signOut();
    };
    signOutButton.addEventListener("click", signout);
    signOutButton2.addEventListener("click", signout);
    auth.onAuthStateChanged(async (user) => {
      let currentPath = window.location.pathname;
      if (user) {
        let curUser = firebase.auth().currentUser;
        let myFS = firebase.firestore();
        let docRef = myFS.doc("users/" + curUser.uid);
        docRef.get().then((docSnap) => {
          let data = docSnap.data();
          let name = data["Name"];
          let emaild = data["Email"];
          let prereq = data["prereq"];

document.querySelector('#question-name').value = data['Name']
document.querySelector('#question-stid').value = data['stid']

let rtrue = data['rated']; 
if(!!rtrue) {
document.querySelector('#npsdiv').style.display = 'none'
} else {
document.querySelector('#npsdiv').style.display = 'flex'
}


 let profileuids = curUser.uid      
      
{
window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "e84ncf6y",
    hide_default_launcher: false,
    name: name, // Full name
    email: emaild, // Email address
    user_id: profileuids // UID FIREBASE
  };
}
{
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/e84ncf6y'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}



          // if gsign and no name
          if (!!name) {
            $("#userName").html(name);
            $("#userName2").html(name);
          } else {
            firebase
              .firestore()
              .doc("users/" + firebase.auth().currentUser.uid)
              .set({ Name: user.displayName }, { merge: true });
            {
              setTimeout(() => {
                window.location.href = "/enterprise/all";
              }, 2000);
            }
            $("#userName2").html(name);
            $("#userName").html(name);
          }



			  
          if (currentPath !== "/enterprise/all") {
            location.href = "/enterprise/all";
          }

          // if #actions

          if (
            $(window).width() < 1000 &&
            window.location.href.indexOf("#actions") != -1
          ) {
            $(".mobile-menu-button").removeClass("current");
            $("#mbmenu1").addClass("current");
            $(".main-section-ops").hide();
            $("#db1").css("display", "flex");
            $(".dash-sep").hide();
            $("#dashpart3").css("display", "flex");

            $(".middle-box").hide();
            $("#mbox1").css("display", "flex");
            $(".mobile-menu-wrapper").click();
            $(".bottom-bar-dsb").hide();
            $("#db-bar-1").css("display", "flex");
          }
		
          let firstletter = name.substring(0, 1);
          $(".firstletter").html(firstletter);
          let restaurant = data["Restaurant"];
          let profileuid = curUser.uid;
          let course1 = data["ftbcourse"];
          let course2 = data["seccourse"];
          let course3 = data["wbwcourse"];
          let course4 = data["dlvcourse"];
          let course5 = data["smcourse"];
          let course6 = data["vcourse"];
          let course7 = data['mcourse']
          let course8 = data['rcourse']
          let course9 = data['nyamcourse']
          let course10 = data['lockedcourse']
          let course11 = data['cluckcourse']
          let course12 = data['rebelritocourse']
	        let course13 = data['ktowncourse']
          let course14 = data['chicboxcourse']
          let course15 = data['sbcourse']
          let course16 = data['mlcourse']
          let course17 = data['tscourse']

          if(course1 == true){
  $('#train1').css('display', 'flex');
  $('#train11').css('display', 'flex');
  $('#mbtraining2').css('display', 'flex');
  } else  {
  $('#train1').hide()
  $('#train11').hide()
  $('#mbtraining2').hide()
  }
    
  if(course2 == true){
  $('#train22').css('display', 'flex');
  $('#mbtraining1').css('display', 'flex');
  } else  {
  $('#train22').hide()
  $('#mbtraining1').hide()
  }
   
  if(course3 == true){
  $('#mbtraining3').css('display', 'flex');
  $('#train33').css('display', 'flex');
  } else  {
  $('#mbtraining3').hide()
  $('#train33').hide()
  }
   
  if(course4 == true){
   $('#mbtraining4').css('display', 'flex');
   $('#train44').css('display', 'flex');
  } else  {
  $('#mbtraining4').hide()
  $('#train44').hide()
  }
  
  if(course5 == true){
  $('#train55').css('display', 'flex');
  $('#mbtraining10').css('display', 'flex');
  } else  {
  $('#train55').hide()
  $('#mbtraining10').hide()
  }
  
  if(course6 == true){
  $('#train66').css('display', 'flex');
  $('#mbtraining11').css('display', 'flex');
  } else  {
  $('#train66').hide()
  $('#mbtraining11').hide()
  }
   
  if(course7 == true){
  $('#train77').css('display', 'flex');
  $('#mbfiesta').css('display', 'flex');
  } else  {
  $('#train77').hide()
  $('#mbfiesta').hide()
  }
   
  if(course8 == true){
  $('#train88').css('display', 'flex');
  $('#mbrebelrito').css('display', 'flex');
  } else  {
  $('#train88').hide()
  $('#mbrebelrito').hide()
  }
  
  if(course9 == true){
  $('#train99').css('display', 'flex');
  $('#mbnomnyam').css('display', 'flex');
  } else  {
  $('#train99').hide()
  $('#mbnomnyam').hide()
  }
    
  if(course10 == true){
  $('#train100').css('display', 'flex');
  $('#mblockednloaded').css('display', 'flex');
  } else  {
  $('#train100').hide()
  $('#mblockednloaded').hide()
  }
  
  if(course11 == true){
  $('#train111').css('display', 'flex');
  $('#mbclucknrun').css('display', 'flex');
  } else  {
  $('#train111').hide()
  $('#mbclucknrun').hide()
  }
  
  if(course12 == true){
  $('#train122').css('display', 'flex');
  $('#mbrealrito').css('display', 'flex');
  } else  {
  $('#train122').hide()
  $('#mbrealrito').hide()
  }
  
  if(course13 == true){
  $('#train133').css('display', 'flex');
  $('#mbktown').css('display', 'flex');
  } else  {
  $('#train133').hide()
  $('#mbktown').hide()
  }
  
  if(course14 == true){
  $('#train144').css('display', 'flex');
  $('#mbcbox').css('display', 'flex');
  } else  {
  $('#train144').hide()
  $('#mbcbox').hide()
  }	


  if(course15 == true){
  $('#sb02').css('display', 'flex');
  $('#sb022').css('display', 'flex');
  } else  {
  $('#sb02').hide()
  $('#sb022').hide()
  }
  
  if(course16 == true){
  $('#sb02').css('display', 'flex');
  $('#sb022').css('display', 'flex');
  } else  {
  $('#sb02').hide()
  $('#sb022').hide()
  }

  if(course17 == true){
  $('#sm02').css('display', 'flex');
  $('#sm022').css('display', 'flex');
  } else  {
  $('#sm02').hide()
  $('#sm022').hide()
  }


		
          document.querySelector("#profile-uid").textContent = profileuid;
          document.querySelector("#profile-name").textContent = name;
          document.querySelector("#profile-email").textContent = emaild;
          if (!!restaurant) {
            document.querySelector(
              "#profile-restaurant"
            ).textContent = restaurant;
          } else {
            document.querySelector("#profile-restaurant").textContent = "-";
          }
          firebase
            .firestore()
            .doc("users/" + firebase.auth().currentUser.uid)
            .set({ Timestamp: date }, { merge: true });

  

          if (!!emaild) {
            $("#email").html(emaild);
if(emaild.length>20){
$('#email').html(emaild.slice(0,20)+"...")
}
          } else {
            firebase
              .firestore()
              .doc("users/" + firebase.auth().currentUser.uid)
              .set({ Email: user.email }, { merge: true });
            $("#email").html(emaild);
          }
        });
      } else {
        console.log("user logged out");
        signOutButton.style.display = "none";
        if ("/" != currentPath) {
          location.href = "/login";
        }
      }
    });
  });
}

{
{
let rating = Number($('#rat11').text())
let rathigh = Number($('#rathigh').text())
let ratlow = Number($('#ratlow').text())
if(rating>rathigh) {
$('#ra3').show()
$('#ra2').hide()
$('#ra1').hide()}
if(rating<ratlow) {
$('#ra3').hide()
$('#ra2').show()
$('#ra1').hide()
}}{
let preptime =  Number($('#prep11').text())
let prephigh =  Number($('#prephigh').text())
let preplow =  Number($('#preplow').text())
if(preptime<prephigh) {
$('#pa3').show()
$('#pa2').hide()
$('#pa1').hide()
}
if(preptime>preplow) {
$('#pa3').hide()
$('#pa2').show()
$('#pa1').hide()}
$('#rat11').text($('#rat1').text())
$('#prep11').text($('#prep1').text()) }
let rating = document.querySelectorAll('.amredtext')
rating.forEach((rating) => {
let r = rating.textContent
let rr = r.replace(/-/g,'')
rating.textContent = rr})



}


{
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
window.addEventListener("load", function(){
maincontent.style.display = 'flex'
loader.style.display = 'none'
}); 
}
