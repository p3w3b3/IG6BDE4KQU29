Webflow.push(function () {
  $("#search-field").submit(function () {
    return false;
  });
});
const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const signOutButton2 = document.querySelector("#signoutmobile");

const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
document.querySelector(".closetracker").addEventListener("click", function () {
  $(".tracking-popup").hide();
  $(".tracking-wrapper").hide();
});

document
  .querySelector(".tracking-wrapper")
  .addEventListener("click", function () {
    $(".tracking-popup").hide();
    $(".tracking-wrapper").hide();
  });

document.querySelector(".closeadduser").addEventListener("click", function () {
  $("#createuserpopup").hide();
  $(".signwrapper").hide();
});
const firebaseConfig = {
  apiKey: "AIzaSyB5X0NgXNQ8d3UjqVP5p_xB9Yt8cOk1ut8",
  authDomain: "peckwater-system.firebaseapp.com",
  projectId: "peckwater-system",
  storageBucket: "peckwater-system.appspot.com",
  messagingSenderId: "620518934310",
  appId: "1:620518934310:web:84c9c701f5794161d863e7",
  measurementId: "G-EZSWDWDTB6"
};
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
        let restaurant = data["Restaurant"];
        let profileuid = curUser.uid;
        let pdt1 = data["pdate1"];
        let pdt2 = data["pdate2"];
        let pdt3 = data["pdate3"];
        let pdt4 = data["pdate4"];
        let pdt5 = data["pdate5"];
        let datastid = data["stid"]

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


	
let rtrue = data['rated']; 

if(rtrue===true) {
document.querySelector('#npsdiv').style.display = 'none'
} else {
document.querySelector('#npsdiv').style.display = 'flex'
}

document.querySelector('#question-name').value = data['Name']
document.querySelector('#question-stid').value = data['stid']

        
document.querySelector('#mystid').textContent = datastid
    
        let admin = data["admin"];

        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ prereq: true }, { merge: true });


        if (course1) {
          $("#cr1").css("display", "flex");
          $("#crs1").css("display", "flex");
        } else {
          $("#cr1").hide();
          $("#crs1").hide();
        }

        if (course2) {
          $("#cr2").css("display", "flex");
          $("#crs2").css("display", "flex");
        } else {
          $("#cr2").hide();
          $("#crs2").hide();
        }

        if (course3) {
          $("#cr3").css("display", "flex");
          $("#crs3").css("display", "flex");
        } else {
          $("#cr3").hide();
          $("#crs3").hide();
        }

        if (course4) {
          $("#cr4").css("display", "flex");
          $("#crs4").css("display", "flex");
        } else {
          $("#cr4").hide();
          $("#crs4").hide();
        }

if(course5){
$('#cr01').css('display', 'flex');
$('#crs01').css('display', 'flex');

} else  {
$('#cr01').hide()
$('#crs01').hide()

}

if(course6 == true){
$('#cr02').css('display', 'flex');
$('#crs02').css('display', 'flex');
} else  {
$('#cr02').hide()
$('#crs02').hide()

}
        
 if(course7 == true){
$('#mx33').css('display', 'flex');
$('#mx02').css('display', 'flex');
$('#mx033').css('display', 'flex');

} else  {
$('#mx33').hide()
$('#mx02').hide()
$('#mx033').hide()

}       

 if(course8 == true){
$('#rx33').css('display', 'flex');
$('#rx02').css('display', 'flex');
$('#rx033').css('display', 'flex');

} else  {
$('#rx33').hide()
$('#rx02').hide()
$('#rx033').hide()
}    
if(course9 == true){
$("#locked33").css("display", "flex");
$("#locked44").css("display", "flex");
$("#locked55").css("display", "flex");
} else {
$('#locked33').hide()
$('#locked44').hide()
$('#locked55').hide()
}
	
if(course10 == true){
$("#nyam33").css("display", "flex");
$("#nyam44").css("display", "flex");
$("#nyam55").css("display", "flex");
} else  {
$('#nyam33').hide()
$('#nyam44').hide()
$('#nyam55').hide()
}
	
if(course11 == true){
$("#cluck33").css("display", "flex");
$("#cluck44").css("display", "flex");
$("#cluck55").css("display", "flex");
} else  {
$('#cluck33').hide()
$('#cluck44').hide()
$('#cluck55').hide()
}
	      

 if(course12 == true){
$('#rrx33').css('display', 'flex');
$('#rrx02').css('display', 'flex');
$('#rrx033').css('display', 'flex');

} else  {
$('#rrx33').hide()
$('#rrx02').hide()
$('#rrx033').hide()
}  
	      
if(course13 == true){
$('#kt2').css('display', 'flex');
$('#kt22').css('display', 'flex');
$('#kt222').css('display', 'flex');

} else  {
$('#kt2').hide()
$('#kt22').hide()
$('#kt222').hide()
}

if(course14 == true){
$('#cb2').css('display', 'flex');
$('#cb22').css('display', 'flex');
$('#cb222').css('display', 'flex');

} else  {
$('#cb2').hide()
$('#cb22').hide()
$('#cb222').hide()
}

if(course15 == true){
$('#sb2').css('display', 'flex');
$('#sb22').css('display', 'flex');
}else{
$('#sb2').hide()
$('#sb22').hide()
}
if(course16 == true){
$('#ml2').css('display', 'flex');
$('#ml22').css('display', 'flex');
}else{
$('#ml2').hide()
$('#ml22').hide()
}
if(course17 == true){
$('#sm2').css('display', 'flex');
$('#sm22').css('display', 'flex');
}else{
$('#sm2').hide()
$('#sm22').hide()
}
  
 if (!!admin) {
$("#n5").show();
$("#trackermob").show();
} else {
$("#n5").hide();
$("#trackermob").hide();
}

        document.querySelector("#userName").textContent = name;

        if (!!pdt1) {
          $("#daterow1").css("display", "flex");
          $("#daterow1ph").hide();
          document.querySelector("#dated1").textContent = pdt1;
        } else {
          $("#daterow1").hide();
          $("#daterow1ph").css("display", "flex");
        }
        if (!!pdt2) {
          $("#daterow2").css("display", "flex");
          $("#daterow2ph").hide();
          document.querySelector("#dated2").textContent = pdt2;
        } else {
          $("#daterow2").hide();
          $("#daterow2ph").css("display", "flex");
        }
        if (!!pdt3) {
          $("#daterow3").css("display", "flex");
          $("#daterow3ph").hide();
          document.querySelector("#dated3").textContent = pdt3;
        } else {
          $("#daterow3").hide();
          $("#daterow3ph").css("display", "flex");
        }
        if (!!pdt4) {
          $("#daterow4").css("display", "flex");
          $("#daterow4ph").hide();
          document.querySelector("#dated4").textContent = pdt4;
        } else {
          $("#daterow4").hide();
          $("#daterow4ph").css("display", "flex");
        }
        if (!!pdt5) {
          $("#daterow5").css("display", "flex");
          $("#daterow5ph").hide();
          document.querySelector("#dated5").textContent = pdt5;
        } else {
          $("#daterow5").hide();
          $("#daterow5ph").css("display", "flex");
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
        //if(prereq !== true) {
        // location.href = '/onboarding';}

        if (!!emaild) {
          $("#email").html(emaild);
        } else {
          firebase
            .firestore()
            .doc("users/" + firebase.auth().currentUser.uid)
            .set({ Email: user.email }, { merge: true });
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
              window.location.href = "/dashboard";
            }, 2000);
          }
          $("#userName2").html(name);
        }
        
        let firstletter = name.substring(0, 1);
        $(".firstletter").html(firstletter);
        

      });
    } else {
    auth.signOut();
location.href = '/login'
    }

    let currentPath2 = location.href;
    if ("https://www.peckwaterbrands.com/dashboard#contact" === currentPath2) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#obsidebar").hide();
      $("#contactbox").show();
      $(".nav-button").css("border-color", "transparent");
      $("#n4").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#onboarding" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#ob1").show();
      $("#contactbox").hide();
      $(".nav-button").css("border-color", "transparent");
      $("#n2").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#onboarding1" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#obsidebar").show();
      $("#ob1").show();
      $("#contactbox").hide();
      $(".nav-button").css("border-color", "transparent");
      $("#n2").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#onboarding2" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#ob2").show();
      $("#contactbox").hide();
      $(".nav-button").css("border-color", "transparent");
      $("#n2").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#tracking" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#obsidebar").hide();
      $("#ob1").hide();
      $("#contactbox").hide();
      $("#trackerbox").show();
      $(".nav-button").css("border-color", "transparent");
      $("#n5").css("border-color", "white");
    }

    {
      {
        const db = firebase.firestore();
        let myResults = [];
        let myUid = [];
        db.collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              myResults.push({ data: doc.data() });
              myUid.push({ id: doc.id });
            });
            var e = $("#training-table");
            for (let i = 0; i < myResults.length; i++) {
              const newItem = e.clone();
              newItem.children("#uName")[0].textContent =
                myResults[i].data.Name;
              newItem.children("#Enrolled")[0].textContent =
                myResults[i].data.Enrolled;
              newItem.children("#uRestaurant")[0].textContent =
                myResults[i].data.Restaurant;
              newItem.children("#uTimestamp")[0].textContent =
                myResults[i].data.Timestamp;
              newItem[0].id = "user-" + i;
              newItem.find("#tracking-name")[0].textContent =
                "User - " + myResults[i].data.Name;
              newItem.find("#tracking-id")[0].textContent = myUid[i].id;
              newItem.children("#uPopup")[0].id = "uPopup-" + i;
              newItem.find("#uButton")[0].id = "uButton-" + i;
              newItem.find("#accesslevel")[0].id = "accesslevel-" + i;
              newItem.find("#course1")[0].id = "course1-" + i;
              newItem.find("#course2")[0].id = "course2-" + i;
              newItem.find("#course3")[0].id = "course3-" + i;
              newItem.find("#course4")[0].id = "course4-" + i;
              newItem.find("#course5")[0].id = "course5-" + i;
              newItem.find("#course6")[0].id = "course6-" + i;
              newItem.find("#course7")[0].id = "course7-" + i;
              newItem.find("#course8")[0].id = "course8-" + i;
              newItem.find("#course9")[0].id = "course9-" + i;
              newItem.find("#course10")[0].id = "course10-" + i;
              newItem.find("#course11")[0].id = "course11-" + i;
	            newItem.find("#course12")[0].id = "course12-" + i;
              newItem.find("#course13")[0].id = "course13-" + i;
	            newItem.find("#course14")[0].id = "course14-" + i;
              newItem.find("#course15")[0].id = "course15-" + i;
	            newItem.find("#course16")[0].id = "course16-" + i;
              newItem.find("#course17")[0].id = "course17-" + i;
              newItem.find("#popfieldfirst")[0].id = "popfieldfirst-" + i;
              newItem.find("#stid")[0].id = "stid-" + i;

              newItem.find("#uSTID")[0].id = "uSTID-" + i;
              newItem.find("#ftbcount")[0].id = "ftbcount-" + i;
              newItem.find("#seccount")[0].id = "seccount-" + i;
              newItem.find("#wbwcount")[0].id = "wbwcount-" + i;
              newItem.find("#dlvcount")[0].id = "dlvcount-" + i;

              newItem.find("#ftbtrue")[0].id = "ftbtrue-" + i;
              newItem.find("#sectrue")[0].id = "sectrue-" + i;
              newItem.find("#wbwtrue")[0].id = "wbwtrue-" + i;
              newItem.find("#dlvtrue")[0].id = "dlvtrue-" + i;


              newItem.find("#country")[0].id = "country-" + i;

              newItem.find("#popfieldsecond")[0].id = "popfieldsecond-" + i;
              newItem.find("#popfieldthird")[0].id = "popfieldthird-" + i;
              newItem.find("#popfieldfourth")[0].id = "popfieldfourth-" + i;
              newItem.find("#popfieldfifth")[0].id = "popfieldfifth-" + i;
              var pfield1 = myResults[i].data.pdate1;

              var pfield2 = myResults[i].data.pdate2;
              var pfield3 = myResults[i].data.pdate3;
              var pfield4 = myResults[i].data.pdate4;
              var pfield5 = myResults[i].data.pdate5;

              var datastid = myResults[i].data.stid;
              
              var countryus = myResults[i].data.uscontent;
              
              var accessps = myResults[i].data.prereq;
              var accessps2 = myResults[i].data.admin;
              var accessps3 = myResults[i].data.operations;

              var course11 = myResults[i].data.ftbcourse;
              var course22 = myResults[i].data.seccourse;
              var course33 = myResults[i].data.wbwcourse;
              var course44 = myResults[i].data.dlvcourse;
              var course55 = myResults[i].data.smcourse;
              var course66 = myResults[i].data.vcourse;
              var course77 = myResults[i].data.mcourse;
              var course88 = myResults[i].data.rcourse;
              var course99 = myResults[i].data.nyamcourse;
              var course100 = myResults[i].data.lockedcourse;
              var course111 = myResults[i].data.cluckcourse;
              var course122 = myResults[i].data.rebelritocourse;
              var course133 = myResults[i].data.ktowncourse;
              var course144 = myResults[i].data.chicboxcourse;
              var course155 = myResults[i].data.sbcourse;
              var course166 = myResults[i].data.mlcourse;
              var course177 = myResults[i].data.tscourse;

              if (countryus == true) {
                newItem.find("#country-" + i)[0].value = "us";
              } else {
                newItem.find("#country-" + i)[0].value = "uk";
              }
              
              
              if (course11 == undefined) {
                newItem.find("#course1-" + i)[0].checked = false;
                newItem.find("#ftbtrue-" + i)[0].textContent = false;
              } else if (course11 == true) {
                newItem.find("#course1-" + i)[0].checked = true;
                newItem.find("#ftbtrue-" + i)[0].textContent = true;
              }

              if (course22 == undefined) {
                newItem.find("#course2-" + i)[0].checked = false;
                newItem.find("#sectrue-" + i)[0].textContent = false;
              } else if (course22 == true) {
                newItem.find("#course2-" + i)[0].checked = true;
                newItem.find("#sectrue-" + i)[0].textContent = true;
              }

              if (course33 == undefined) {
                newItem.find("#course3-" + i)[0].checked = false;
                newItem.find("#wbwtrue-" + i)[0].textContent = false;
              } else if (course33 == true) {
                newItem.find("#course3-" + i)[0].checked = true;
                newItem.find("#wbwtrue-" + i)[0].textContent = true;
              }

              if (course44 == undefined) {
                newItem.find("#course4-" + i)[0].checked = false;
                newItem.find("#dlvtrue-" + i)[0].textContent = false;
              } else if (course44 == true) {
                newItem.find("#course4-" + i)[0].checked = true;
                newItem.find("#dlvtrue-" + i)[0].textContent = false;
              }

              if (course55 == undefined) {
                newItem.find("#course5-" + i)[0].checked = false;
              } else if (course55 == true) {
                newItem.find("#course5-" + i)[0].checked = true;
              }

              if (course66 == undefined) {
                newItem.find("#course6-" + i)[0].checked = false;
              } else if (course66 == true) {
                newItem.find("#course6-" + i)[0].checked = true;
              }


              if (course77 == undefined) {
                newItem.find("#course7-" + i)[0].checked = false;
              } else if (course77 == true) {
                newItem.find("#course7-" + i)[0].checked = true;
              }

              if (course88 == undefined) {
                newItem.find("#course8-" + i)[0].checked = false;
              } else if (course88 == true) {
                newItem.find("#course8-" + i)[0].checked = true;
              }
              if (course99 == undefined) {
                newItem.find("#course9-" + i)[0].checked = false;
              } else if (course99 == true) {
                newItem.find("#course9-" + i)[0].checked = true;
              }

              if (course100 == undefined) {
                newItem.find("#course10-" + i)[0].checked = false;
              } else if (course100 == true) {
                newItem.find("#course10-" + i)[0].checked = true;
              }
              if (course111 == undefined) {
                newItem.find("#course11-" + i)[0].checked = false;
              } else if (course111 == true) {
                newItem.find("#course11-" + i)[0].checked = true;
              }

              if (course122 == undefined) {
                newItem.find("#course12-" + i)[0].checked = false;
              } else if (course122 == true) {
                newItem.find("#course12-" + i)[0].checked = true;
              }

              if (course133 == undefined) {
                newItem.find("#course13-" + i)[0].checked = false;
              } else if (course133 == true) {
                newItem.find("#course13-" + i)[0].checked = true;
              }

              if (course144 == undefined) {
                newItem.find("#course14-" + i)[0].checked = false;
              } else if (course144 == true) {
                newItem.find("#course14-" + i)[0].checked = true;
              }
              if (course155 == undefined) {
                newItem.find("#course15-" + i)[0].checked = false;
              } else if (course155 == true) {
                newItem.find("#course15-" + i)[0].checked = true;
              }
              if (course166 == undefined) {
                newItem.find("#course14-" + i)[0].checked = false;
              } else if (course166 == true) {
                newItem.find("#course14-" + i)[0].checked = true;
              }
              if (course177 == undefined) {
                newItem.find("#course177-" + i)[0].checked = false;
              } else if (course144 == true) {
                newItem.find("#course177-" + i)[0].checked = true;
              }

              if (accessps == undefined && accessps == undefined) {
                newItem.find("#accesslevel-" + i)[0].value = "";
              }

              if (!!accessps3) {
                newItem.find("#accesslevel-" + i)[0].value = "operations";
              }

              if (!!accessps) {
                newItem.find("#accesslevel-" + i)[0].value = "preq";
              }

              if (!!accessps && !!accessps2) {
                newItem.find("#accesslevel-" + i)[0].value = "admin";
              }

              if (datastid == undefined) {
                newItem.find("#stid-" + i)[0].textContent = "-";
              } else {
                newItem.find("#stid-" + i)[0].textContent = datastid;
              }

              if (pfield1 == undefined) {
                newItem.find("#popfieldfirst-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldfirst-" + i)[0].placeholder = pfield1;
              }
              if (pfield2 == undefined) {
                newItem.find("#popfieldsecond-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldsecond-" + i)[0].placeholder = pfield2;
              }
              if (pfield3 == undefined) {
                newItem.find("#popfieldthird-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldthird-" + i)[0].placeholder = pfield3;
              }
              if (pfield4 == undefined) {
                newItem.find("#popfieldfourth-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldfourth-" + i)[0].placeholder = pfield4;
              }
              if (pfield5 == undefined) {
                newItem.find("#popfieldfifth-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldfifth-" + i)[0].placeholder = pfield5;
              }
              document.addEventListener("input", () => {
                let course1 = newItem.find("#course1-" + i)[0].checked == true;
                let course2 = newItem.find("#course2-" + i)[0].checked == true;
                let course3 = newItem.find("#course3-" + i)[0].checked == true;
                let course4 = newItem.find("#course4-" + i)[0].checked == true;
                let course5 = newItem.find("#course5-" + i)[0].checked == true;
                let course6 = newItem.find("#course6-" + i)[0].checked == true;
                let course7 = newItem.find("#course7-" + i)[0].checked == true;
                let course8 = newItem.find("#course8-" + i)[0].checked == true;
                let course9 = newItem.find("#course9-" + i)[0].checked == true;
                let course10 = newItem.find("#course10-" + i)[0].checked == true;
                let course11 = newItem.find("#course11-" + i)[0].checked == true;
                let course12 = newItem.find("#course12-" + i)[0].checked == true; 
                let course13 = newItem.find("#course13-" + i)[0].checked == true;
                let course14 = newItem.find("#course14-" + i)[0].checked == true;       
                let course15 = newItem.find("#course15-" + i)[0].checked == true;       
                let course16 = newItem.find("#course16-" + i)[0].checked == true;       
                let course17 = newItem.find("#course17-" + i)[0].checked == true;          
 
                let paccess = newItem.find("#accesslevel-" + i)[0].value;
                let stid = newItem.find("#stid-" + i)[0].value;
                
                let uscont = newItem.find("#country-" + i)[0].value;
                
                let pdate1 = newItem.find("#popfieldfirst-" + i)[0].value;
                let pdate2 = newItem.find("#popfieldsecond-" + i)[0].value;
                let pdate3 = newItem.find("#popfieldthird-" + i)[0].value;
                let pdate4 = newItem.find("#popfieldfourth-" + i)[0].value;
                let pdate5 = newItem.find("#popfieldfifth-" + i)[0].value;
                let tid = myUid[i].id;
                newItem
                  .find("#uButton-" + i)[0]
                  .addEventListener("click", function () {

                    if (uscont === "us") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ uscontent: true }, { merge: true });
                    }

                    if (uscont === "uk") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ uscontent: false }, { merge: true });
                    }

                    if (course1) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ ftbcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ ftbcourse: false }, { merge: true });
                    }

                    if (course2) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ seccourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ seccourse: false }, { merge: true });
                    }

                    if (course3) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ wbwcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ wbwcourse: false }, { merge: true });
                    }

                    if (course4) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ dlvcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ dlvcourse: false }, { merge: true });
                    }
                  
                              if (course5) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ smcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ smcourse: false }, { merge: true });
                    }
                          
                              if (course6) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ vcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ vcourse: false }, { merge: true });
                    }

                              if (course7) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ mcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ mcourse: false }, { merge: true });
                    }
                  
                              if (course8) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ rcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ rcourse: false }, { merge: true });
                    }
                  
                  
                              if (course9) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ nyamcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ nyamcourse: false }, { merge: true });
                    }
                  
                              if (course10) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ lockedcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ lockedcourse: false }, { merge: true });
                    }
                              if (course11) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ cluckcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ cluckcourse: false }, { merge: true });
                    }

                              if (course12) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ rebelritocourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ rebelritocourse: false }, { merge: true });
                    }

                              if (course13) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ ktowncourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ ktowncourse: false }, { merge: true });
                    }

                              if (course14) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ chicboxcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ chicboxcourse: false }, { merge: true });
                    }
                  
                              if (course15) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ sbcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ sbcourse: false }, { merge: true });
                    }
                              if (course16) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ mlcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ mlcourse: false }, { merge: true });
                    }
                              if (course17) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ tscourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ tscourse: false }, { merge: true });
                    }
                  
                  
                    if (paccess === "operations") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ operations: true }, { merge: true });
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ prereq: true }, { merge: true });
                    }

                    if (paccess === "preq") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ prereq: true }, { merge: true });
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ admin: false }, { merge: true });
                    }

                    if (paccess === "admin") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ 
                        prereq: true }, { merge: true });
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ admin: true }, { merge: true });
                    }

                    if (stid !== undefined && stid !== "-" && stid !== " ") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ stid: stid }, { merge: true });
                    }



                    if (!!pdate1) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate1: pdate1 }, { merge: true });
                    }
                    if (!!pdate2) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate2: pdate2 }, { merge: true });
                    }
                    if (!!pdate3) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate3: pdate3 }, { merge: true });
                    }
                    if (!!pdate4) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate4: pdate4 }, { merge: true });
                    }
                    if (!!pdate5) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate5: pdate5 }, { merge: true });
                    }
                  });
              });

              newItem
                .children("#uGear")[0]
                .addEventListener("click", function () {
                  $("#uPopup-" + i).show();
                  $(".tracking-wrapper").show();
                });

              newItem.find("#uClose")[0].addEventListener("click", function () {
                $("#uPopup-" + i).hide();
                $(".tracking-wrapper").hide();
              });

              newItem
                .find("#uButton-" + i)[0].addEventListener("click", function () {
		  document.querySelector("#uButton-"+i).innerHTML = "Saving..."
    		  setTimeout(() => {
                  $("#uPopup-" + i).hide();
                  $(".tracking-wrapper").hide();
  		  document.querySelector("#uButton-"+i).innerHTML = "Save"
		  }, 7500);
                });

              var ftbn = parseInt(myResults[i].data.FTB);
              var secn = parseInt(myResults[i].data.SEC);
              var wbwn = parseInt(myResults[i].data.WBW);
              var dlv = parseInt(myResults[i].data.deliverect);
              var stidtxt = myResults[i].data.stid;

              var ftbtrue = myResults[i].data.ftbtrue;
              var sectrue = myResults[i].data.sectrue;
              var wbwtrue = myResults[i].data.wbwtrue;
              var dlvtrue = myResults[i].data.dlvtrue;

              let totn = 0;
              if (myResults[i].data.FTB == undefined) {
                newItem.children("#uFTB")[0].textContent = "0%";
                newItem.children("#ftbcount-" + i)[0].textContent = "0%";

                var ftbn = 0;
              } else {
                newItem.children("#uFTB")[0].textContent = ftbn + "%";
                newItem.children("#ftbcount-" + i)[0].textContent = ftbn + "%";
              }
              if (myResults[i].data.SEC == undefined) {
                newItem.children("#uSEC")[0].textContent = "0%";
                newItem.children("#seccount-" + i)[0].textContent = "0%";

                var secn = 0;
              } else {
                newItem.children("#uSEC")[0].textContent = secn + "%";
                newItem.children("#seccount-" + i)[0].textContent = secn + "%";
              }
              if (myResults[i].data.WBW == undefined) {
                newItem.children("#uWBW")[0].textContent = "0%";
                newItem.children("#wbwcount-" + i)[0].textContent = "0%";

                var wbwn = 0;
              } else {
                newItem.children("#uWBW")[0].textContent = wbwn + "%";
                newItem.children("#wbwcount-" + i)[0].textContent = wbwn + "%";
              }
              if (myResults[i].data.deliverect == undefined) {
                newItem.children("#uDLV")[0].textContent = "0%";
                newItem.children("#dlvcount-" + i)[0].textContent = "0%";

                var dlv = 0;
              } else {
                newItem.children("#uDLV")[0].textContent = dlv + "%";
                newItem.children("#dlvcount-" + i)[0].textContent = dlv + "%";
              }

              if (myResults[i].data.stid == undefined) {
                newItem.children("#uSTID-" + i)[0].textContent = "-";
              } else {
                newItem.children("#uSTID-" + i)[0].textContent = stidtxt;
              }

              let totaln = ((secn + ftbn + wbwn + dlv) / 400) * 100;
              let ntotal = Math.round(totaln) + "%";
              if (ntotal !== "NaN%") {
                newItem.children("#uTotal")[0].textContent = ntotal;
              } else {
                newItem.children("#uTotal")[0].textContent = " ";
              }
              newItem.insertAfter(".training-headings");
            }
          });
      }
      setTimeout(() => {
        $(".training-table").css("opacity", "1.0");
        $("#training-table").remove();
      }, 3500);
    }
  });
});


{
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
window.addEventListener("load", function(){
maincontent.style.display = 'flex'
loader.style.display = 'none'
}); 
}
