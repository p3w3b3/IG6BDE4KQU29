setTimeout(() => {
{
const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");

 const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q"
  };

mixpanel.init('bb6d2603674e27d7b31d045acf3ae77f', {debug: true}); 
 
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged((user) => {
let prognumv = 0;

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
location.reload();
}, 2000);
}
$("#userName2").html(name);
}
if (!!emaild) {

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
});
});
}
});
setTimeout(() => {
$(".section1selection").css("background-color", "white");
$(".section1div").hide();
$("#v1p1video").show();
$("#v1p1button").css("background-color", "#e7edf0");
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


let sstid = data['stid'].toLowerCase()

let ops = data['operations']
let enterprise = data['enterprise']
if(ops === true ) {
document.querySelector("#mydas").addEventListener("click", () => {
location.href = '/operations/'+sstid
})
document.querySelector("#mbmenu1").addEventListener("click", () => {
location.href = '/operations/'+sstid
})
}else if(enterprise===true){
document.querySelector("#mydas").addEventListener("click", () => {
window.location.href = '/enterprise/all'
document.querySelector("#mbmenu1").addEventListener("click", () => {
window.location.href = '/enterprise/all'
})
})
}
 
if(!!ops || !!enterprise ) {
$("#operations").css("display", "flex");
$('#normal').hide()
} else {
$('#operations').hide()
$("#normal").css("display", "flex");
}
 
{
window.intercomSettings = {
api_base: "https://api-iam.intercom.io",
app_id: "e84ncf6y",
hide_default_launcher: false,
name: "'" + name + "'",
email: "'" + emaild + "'", 
user_id: "'" + profileuid + "'",
};
}
{
(function () {
var w = window;
var ic = w.Intercom;
if (typeof ic === "function") {
ic("reattach_activator");
ic("update", w.intercomSettings);
} else {
var d = document;
var i = function () {
i.c(arguments);
};
i.q = [];
i.c = function (args) {
i.q.push(args);
};
w.Intercom = i;
var l = function () {
var s = d.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://widget.intercom.io/widget/e84ncf6y";
var x = d.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
};
if (document.readyState === "complete") {
l();
} else if (w.attachEvent) {
w.attachEvent("onload", l);
} else {
w.addEventListener("load", l, false);
}
}
})();
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

if (admin == true) {
$("#n5").show();
$("#trackermob").show();
} else {
$("#n5").hide();
$("#trackermob").hide();
}
  
const auth = firebase.auth();
const signout2 = () => {
auth.signOut2();
};
const signOutButton2 = document.querySelector("#mobsignout")
signOutButton2.addEventListener('click', signout2);
document.querySelector("#profile-uid").textContent = profileuid;
document.querySelector("#profile-name").textContent = name;
document.querySelector('#userName3').textContent=name;

document.querySelector('#userName').textContent=name;
document.querySelector('#userName2').textContent=name;

if(emaild.length>30) {
document.querySelector('#email').textContent = emaild.slice(0,17) + '...'
document.querySelector('#email2').textContent = emaild.slice(0,17) + '...'
} else {
document.querySelector('#email').textContent=emaild;
document.querySelector('#email2').textContent=emaild;
}


 
 
document.querySelector("#profile-email").textContent = emaild;
if (!!restaurant) {
document.querySelector("#profile-restaurant").textContent = restaurant;
} else {
document.querySelector("#profile-restaurant").textContent = "-";
}
});
}, 2000);
