{
  const email = document.querySelector("#email");
  const signOutButton = document.querySelector("#signOutButton");
  const userName = document.querySelector("#userName");
  const userName2 = document.querySelector("#userName2");
  const loader = document.querySelector("#loadanimation");
  const maincontent = document.querySelector("#maincontent");

  const firebaseConfig = {
    apiKey: "AIzaSyB5X0NgXNQ8d3UjqVP5p_xB9Yt8cOk1ut8",
    authDomain: "peckwater-system.firebaseapp.com",
    projectId: "peckwater-system",
    storageBucket: "peckwater-system.appspot.com",
    messagingSenderId: "620518934310",
    appId: "1:620518934310:web:84c9c701f5794161d863e7",
    measurementId: "G-EZSWDWDTB6",
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const authChanged = firebase.auth().onAuthStateChanged((user) => {

mixpanel.init('34ab50f7acd413779598bfe06a25b8c3', {debug: true}); 

    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#rr1p1video").show();
    $("#rr1p1button").css("background-color", "#e7edf0");


    let rrprognum = 0;
    let rrprognum2 = 0;
    let rrprognum3 = 0;
    let rrprognum4 = 0;
    let rrprognum5 = 0;

    const signout = () => {
      auth.signOut();
    };

    signOutButton.addEventListener("click", signout);

    auth.onAuthStateChanged(async (user) => {
      let currentPath = window.location.pathname;
      if (user) {
        maincontent.style.display = "flex";
        loader.style.display = "none";
        let myFS = firebase.firestore();
        let docSnap = await myFS
          .doc("users/" + firebase.auth().currentUser.uid)
          .get();
        let data = docSnap.data();
        let prereq = data["prereq"];
        let name = data["Name"];
        let emaild = data["Email"];
        let firstletter = name.substring(0, 1);
        $(".firstletter").html(firstletter);
        let curUser = firebase.auth().currentUser;
        let restaurant = data['Restaurant']; 
        let profileuid = curUser.uid    

let sstid = data['stid'].toLowerCase()
let ops = data['operations']
document.querySelector("#mydas").addEventListener("click", () => {
window.location.href = '/operations/'+sstid
})
document.querySelector("#mbmenu1").addEventListener("click", () => {
window.location.href = '/operations/'+sstid
})

if(ops == true){
$("#operations").css("display", "flex");
$('#normal').hide()
} else {
$('#operations').hide()
$("#normal").css("display", "flex");
}


const auth = firebase.auth();
const signout2 = () => {
auth.signOut2();
};
const signOutButton2 = document.querySelector("#mobsignout")
signOutButton2.addEventListener('click', signout2);

document.querySelector('#profile-uid').textContent=profileuid;
document.querySelector('#profile-name').textContent=name;
document.querySelector('#userName3').textContent=name;
document.querySelector('#profile-email').textContent=emaild;
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';} 

     
      
{
window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "e84ncf6y",
    hide_default_launcher: true,
    name: "'"+name+"'", // Full name
    email: "'"+emaild+"'", // Email address
		user_id: "'"+profileuid+"'" // UID FIREBASE
  };
}
{
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}
      
   

        let rr1p1 = data["rr1p1"];
        let rr1p2 = data["rr1p2"];
        let rr1p3 = data["rr1p3"];
        let rr1p4 = data["rr1p4"];
        let rr1p5 = data["rr1p5"];
        let rr1p6 = data["rr1p6"];
        let rr1p7 = data["rr1p7"];

        let rr2p1 = data["rr2p1"];
        let rr2p2 = data["rr2p2"];
        let rr2p3 = data["rr2p3"];
        let rr2p4 = data["rr2p4"];
        let rr2p5 = data["rr2p5"];
        let rr2p6 = data["rr2p6"];
        let rr2p7 = data["rr2p7"];
        let rr2p8 = data["rr2p8"];

        let rr3p1 = data["rr3p1"];
        let rr3p2 = data["rr3p2"];
        let rr3p3 = data["rr3p3"];
        let rr3p4 = data["rr3p4"];

        let rr4p1 = data["rr4p1"];
        let rr4p2 = data["rr4p2"];
        let rr4p3 = data["rr4p3"];
        let rr4p4 = data["rr4p4"];

        let rr5p1 = data["rr5p1"];

        if (rr1p1 == true) {
          $("#rr1p1").hide();
          $("#rr1p1x").show();
          rrprognum++;
        }
        if (rr1p2 == true) {
          $("#rr1p2").hide();
          $("#rr1p2x").show();
          rrprognum++;
        }

        if (rr1p3 == true) {
          $("#rr1p3").hide();
          $("#rr1p3x").show();
          rrprognum++;
        }

        if (rr1p4 == true) {
          $("#rr1p4").hide();
          $("#rr1p4x").show();
          rrprognum++;
        }

        if (rr1p5 == true) {
          $("#rr1p5").hide();
          $("#rr1p5x").show();
          rrprognum++;
        }

        if (rr1p6 == true) {
          $("#rr1p6").hide();
          $("#rr1p6x").show();
          rrprognum++;
        }

        if (rr1p7 == true) {
          $("#rr1p7").hide();
          $("#rr1p7x").show();
          rrprognum++;
        }

        if (rr2p1 == true) {
          $("#rr2p1").hide();
          $("#rr2p1x").show();
          rrprognum2++;
        }

        if (rr2p2 == true) {
          $("#rr2p2").hide();
          $("#rr2p2x").show();
          rrprognum2++;
        }

        if (rr2p3 == true) {
          $("#rr2p3").hide();
          $("#rr2p3x").show();
          rrprognum2++;
        }

        if (rr2p4 == true) {
          $("#rr2p4").hide();
          $("#rr2p4x").show();
          rrprognum2++;
        }

        if (rr2p5 == true) {
          $("#rr2p5").hide();
          $("#rr2p5x").show();
          rrprognum2++;
        }

        if (rr2p6 == true) {
          $("#rr2p6").hide();
          $("#rr2p6x").show();
          rrprognum2++;
        }

        if (rr2p7 == true) {
          $("#rr2p7").hide();
          $("#rr2p7x").show();
          rrprognum2++;
        }

        if (rr2p8 == true) {
          $("#rr2p8").hide();
          $("#rr2p8x").show();
          rrprognum2++;
        }

        if (rr3p1 == true) {
          $("#rr3p1").hide();
          $("#rr3p1x").show();
          rrprognum3++;
        }

        if (rr3p2 == true) {
          $("#rr3p2").hide();
          $("#rr3p2x").show();
          rrprognum3++;
        }

        if (rr3p3 == true) {
          $("#rr3p3").hide();
          $("#rr3p3x").show();
          rrprognum3++;
        }

        if (rr3p4 == true) {
          $("#rr3p4").hide();
          $("#rr3p4x").show();
          rrprognum3++;
        }

        if (rr4p1 == true) {
          $("#rr4p1").hide();
          $("#rr4p1x").show();
          rrprognum4++;
        }

        if (rr4p2 == true) {
          $("#rr4p2").hide();
          $("#rr4p2x").show();
          rrprognum4++;
        }

        if (rr4p3 == true) {
          $("#rr4p3").hide();
          $("#rr4p3x").show();
          rrprognum4++;
        }

        if (rr4p4 == true) {
          $("#rr4p4").hide();
          $("#rr4p4x").show();
          rrprognum4++;
        }

        if (rr5p1 == true) {
          $("#rr5p1").hide();
          $("#rr5p1x").show();
          rrprognum5++;
        }


    let admin = data["admin"];
    let course1 = data["ftbcourse"];
    let course2 = data["seccourse"];
    let course3 = data["wbwcourse"];
    let course4 = data["dlvcourse"];
    let course5 = data["smcourse"];
    let course6 = data["vcourse"];
    let course7 = data["mcourse"];
    let course8 = data["rcourse"];
    let course9 = data['nyamcourse']
    let course10 = data['lockedcourse']
    let course11 = data['cluckcourse']
    let course12 = data['rebelritocourse']
    let course13 = data['ktowncourse']
    let course14 = data['chicboxcourse']
    let course15 = data['sbcourse']
    let course16 = data['mlcourse']
    let course17 = data['tscourse']
    
   
if (admin == true) {
$("#n5").show();
$("#trackermob").show();
} else {
$("#n5").hide();
$("#trackermob").hide();
}
  

if(course1 == true){
$('#cr1').css('display', 'flex');
$('#cr11').css('display', 'flex');
$('#cr111').css('display', 'flex');
$('#crs1').css('display', 'flex');
$('#crs11').css('display', 'flex');
$('#train11').css('display', 'flex');
$('#mbtraining2').css('display', 'flex');
} else  {
$('#cr1').hide()
$('#cr11').hide()
$('#cr111').hide()
$('#crs1').hide()
$('#crs11').hide()
$('#train11').hide()
$('#mbtraining2').hide()
}
if(course2 == true){
$('#cr2').css('display', 'flex');
$('#cr22').css('display', 'flex');
$('#cr222').css('display', 'flex');
$('#crs2').css('display', 'flex');
$('#crs22').css('display', 'flex');
$('#train22').css('display', 'flex');
$('#mbtraining1').css('display', 'flex');
} else  {
$('#cr2').hide()
$('#cr22').hide()
$('#cr222').hide()
$('#crs2').hide()
$('#crs22').hide()
$('#train22').hide()
$('#mbtraining1').hide()
}
if(course3 == true){
$('#cr3').css('display', 'flex');
$('#cr33').css('display', 'flex');
$('#cr333').css('display', 'flex');
$('#crs3').css('display', 'flex');
$('#train33').css('display', 'flex');
$('#mbtraining3').css('display', 'flex');
} else  {
$('#cr3').hide()
$('#cr33').hide()
$('#cr333').hide()
$('#crs3').hide()
$('#train33').hide()
$('#mbtraining3').hide()
}
if(course4 == true){
$('#cr4').css('display', 'flex');
$('#cr44').css('display', 'flex');
$('#cr444').css('display', 'block');
$('#crs4').css('display', 'flex');
$('#train44').css('display', 'flex');
$('#mbtraining4').css('display', 'flex');
}else{
$('#cr4').hide()
$('#cr44').hide()
$('#cr444').hide()
$('#crs4').hide()
$('#train44').hide()
$('#mbtraining4').hide()
}
if(course5 == true){
$('#cr01').css('display', 'flex');
$('#cr011').css('display', 'flex');
$('#crs01').css('display', 'flex');
$('#crs011').css('display', 'flex');
$('#train55').css('display', 'flex');
$('#mbtraining10').css('display', 'flex');
}else{
$('#cr01').hide()
$('#cr011').hide()
$('#crs01').hide()
$('#crs011').hide()
$('#train55').hide()
$('#mbtraining10').hide()
}
if(course6 == true){
$('#cr02').css('display', 'flex');
$('#cr022').css('display', 'flex');
$('#crs02').css('display', 'flex');
$('#train66').css('display', 'flex');
$('#mbtraining11').css('display', 'flex');
}else{
$('#cr02').hide()
$('#cr022').hide()
$('#crs02').hide()
$('#train66').hide()
$('#mbtraining11').hide()
}
if(course7 == true){
$('#mx33').css('display', 'flex');
$('#mx02').css('display', 'flex');
$('#mx033').css('display', 'flex');
$('#train77').css('display', 'flex');
$('#mbfiesta').css('display', 'flex');
}else{
$('#mx33').hide()
$('#mx02').hide()
$('#mx033').hide()
$('#train77').hide()
$('#mbfiesta').hide()
}
if(course8 == true){
$('#rx33').css('display', 'flex');
$('#rx02').css('display', 'flex');
$('#rx033').css('display', 'flex');
$('#train88').css('display', 'flex');
$('#mbrebelrito').css('display', 'flex');
}else{
$('#rx33').hide()
$('#rx02').hide()
$('#rx033').hide()
$('#train88').hide()
$('#mbrebelrito').hide()
}
if(course9 == true){
$("#nyam33").css("display", "flex");
$("#nyam44").css("display", "flex");
$("#nyam55").css("display", "flex");
$('#train99').css('display', 'flex');
$('#mbnomnyam').css('display', 'flex');
}else{
$('#nyam33').hide()
$('#nyam44').hide()
$('#nyam55').hide()
$('#train99').hide()
$('#mbnomnyam').hide()
}	
if(course10 == true){
$("#locked33").css("display", "flex");
$("#locked44").css("display", "flex");
$("#locked55").css("display", "flex");
$('#train100').css('display', 'flex');
$('#mblockednloaded').css('display', 'flex');

}else{
$('#locked33').hide()
$('#locked44').hide()
$('#locked55').hide()
$('#train100').hide()
$('#mblockednloaded').hide()
}	
if(course11 == true){
$("#cluck33").css("display", "flex");
$("#cluck44").css("display", "flex");
$("#cluck55").css("display", "flex");
$('#train111').css('display', 'flex');
$('#mbclucknrun').css('display', 'flex');
}else{
$('#cluck33').hide()
$('#cluck44').hide()
$('#cluck55').hide()
$('#train111').hide()
$('#mbclucknrun').hide()
}
if(course12 == true){
$('#rrx33').css('display', 'flex');
$('#rrx02').css('display', 'flex');
$('#rrx033').css('display', 'flex');
$('#train122').css('display', 'flex');
$('#mbrealrito').css('display', 'flex');
}else{
$('#rrx33').hide()
$('#rrx02').hide()
$('#rrx033').hide()
$('#train122').hide()
$('#mbrealrito').hide()
}
if(course13 == true){
$('#kt2').css('display', 'flex');
$('#kt22').css('display', 'flex');
$('#kt222').css('display', 'flex');
$('#train133').css('display', 'flex');
$('#mbktown').css('display', 'flex');
}else{
$('#kt2').hide()
$('#kt22').hide()
$('#kt222').hide()
$('#train133').hide()
$('#mbktown').hide()
}
if(course14 == true){
$('#cb2').css('display', 'flex');
$('#cb22').css('display', 'flex');
$('#cb222').css('display', 'flex');
$('#train144').css('display', 'flex');
$('#mbcbox').css('display', 'flex');
}else{
$('#cb2').hide()
$('#cb22').hide()
$('#cb222').hide()
$('#train144').hide()
$('#mbcbox').hide()
}
if(course15 == true){
$('#sb2').css('display', 'flex');
$('#sb22').css('display', 'flex');
$('#sb022').css('display', 'flex');
$('#train022').css('display', 'flex');
$('#mstacked').css('display', 'flex');
}else{
$('#sb2').hide()
$('#sb22').hide()
$('#sb022').hide()
$('#train022').hide()
$('#mstacked').hide()
}
if(course16 == true){
$('#ml2').css('display', 'flex');
$('#ml22').css('display', 'flex');
$('#ml022').css('display', 'flex');
$('#train033').css('display', 'flex');
$('#mobilemarius').css('display', 'flex');
}else{
$('#ml2').hide()
$('#ml22').hide()
$('#ml022').hide()
$('#train033').hide()
$('#mobilemarius').hide()
}
if(course17 == true){
$('#sm2').css('display', 'flex');
$('#sm22').css('display', 'flex');
$('#sm022').css('display', 'flex');
$('#train044').css('display', 'flex');
$('#mwingery').css('display', 'flex');
}else{
$('#sm2').hide()
$('#sm22').hide()
$('#sm022').hide()
$('#train044').hide()
$('#mwingery').hide()
}


        let sp =
          ((rrprognum + rrprognum2 + rrprognum3 + rrprognum4 + rrprognum5) / 24) *
          100;
        let spn = Math.round(sp) + "%";
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ RRITO: spn }, { merge: true });

        if (prereq !== true) {
          location.href = "/onboarding";
        }
        if (!!name) {
          $("#userName2").html(name);
        } else {
          firebase
            .firestore()
            .doc("users/" + firebase.auth().currentUser.uid)
            .set({ Name: user.displayName }, { merge: true });
          {
            setTimeout(() => {
              window.location.href = "/dashboard/training/rebel-rito";
            }, 2000);
          }

          $("#userName2").html(name);
        }

        if (!!emaild) {
          $("#email").html(emaild);
        }
      } else {
        console.log("user logged out");
        signOutButton.style.display = "none";
        if ("/" != currentPath) {
          location.href = "/login";
        }
        maincontent.style.display = "none";
        loader.style.display = "flex";
      }
      signOutButton.addEventListener("click", signout);
      document.querySelector("#rrprognum").textContent = rrprognum;
      document.querySelector("#rrprognum2").textContent = rrprognum2;
      document.querySelector("#rrprognum3").textContent = rrprognum3;
      document.querySelector("#rrprognum4").textContent = rrprognum4;
      document.querySelector("#rrprognum5").textContent = rrprognum5;
    });
  });
}
