Webflow.push(function () {
$("#search-field").submit(function () {
return false;
});
});

const signOutButton = document.querySelector("#signOutButton");
const signOutButton2 = document.querySelector("#signoutmobile");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date =
today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

const firebaseConfig = {
apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
authDomain: "stonegate-system.firebaseapp.com",
projectId: "stonegate-system",
storageBucket: "stonegate-system.appspot.com",
messagingSenderId: "798322604618",
appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
measurementId: "G-1J8XNVRV7Q",
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
let name = data['Name']
let emaild = user.email
let profileuid = curUser.uid
let pdt1 = data["pdate1"];
let pdt2 = data["pdate2"];
let pdt3 = data["pdate3"];
let pdt4 = data["pdate4"];
let pdt5 = data["pdate5"];
let datastid = data["stid"]


{
window.addEventListener("load", function(){
let unm = name
let umail = emaild
let ustid = datastid
let ufid = curUser.uid

if(unm !== 'Loading..') {

mixpanel.init('bb6d2603674e27d7b31d045acf3ae77f', {debug: true});
distinct_id = mixpanel.get_distinct_id();
document.querySelector('#mydistinct').textContent = distinct_id
mixpanel.identify(ufid);
mixpanel.people.set_once({ "$name": unm, "$email": umail,"stid": ustid});
}
$(document).ready(function() {
$(document).on('click', '[data-tracker]', function(e) {

var trackData = $(this).data('tracker');
if (!trackData) { return; }

var tagData = ParseTagData.tagData(trackData);
if (!tagData.action || !tagData.label ) { return; }

Track.trackEvent('click', { action: tagData.action , label:  tagData.label });
});

var ParseTagData = { tagData : function ( data ) {
var tmpData = data.split("|");
if (tmpData.length !=2 ) { return ""; }
return { "action": tmpData[0] ,"label": tmpData[1] };
}
};

var Track= { trackEvent: function (eventType, data) {
mixpanel.track( data.action );
}
};
})
})
}


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

let course15 = data['burgercourse1']
let course16 = data['burgercourse2']
let course17 = data['burgercourse3']


if(course15 === true){
    document.querySelector('#brgr1-1').style.display = 'flex'
    document.querySelector('#brgr1-2').style.display = 'flex'
    } else {
    document.querySelector('#brgr1-1').style.display = 'none'
    document.querySelector('#brgr1-2').style.display = 'none'
    }
    
    if(course16 === true){
      document.querySelector('#brgr2-1').style.display = 'flex'
      document.querySelector('#brgr2-2').style.display = 'flex'
      } else {
      document.querySelector('#brgr2-1').style.display = 'none'
      document.querySelector('#brgr2-2').style.display = 'none'
      }
    
    if(course17 === true){
      document.querySelector('#brgr3-1').style.display = 'flex'
      document.querySelector('#brgr3-2').style.display = 'flex'
      } else {
      document.querySelector('#brgr3-1').style.display = 'none'
      document.querySelector('#brgr3-2').style.display = 'none'
      }
    
  
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

firebase
.firestore()
.doc("users/" + firebase.auth().currentUser.uid)
.set({ Timestamp: date }, { merge: true });


document.querySelector('#userName').textContent = name
document.querySelector('#userName2').textContent = name


document.querySelector('#email').textContent = user.email

document.querySelector('#profile-name').textContent = name
document.querySelector('#profile-email').textContent = user.email
document.querySelector("#profile-uid").textContent = profileuid;


var fletter = document.getElementsByClassName("firstletter");
for (var i = 0; i < fletter.length; i++) {
fletter[i].textContent = name.substring(0,1)
}



});
} else {
auth.signOut();
location.href = '/'
}



})})

