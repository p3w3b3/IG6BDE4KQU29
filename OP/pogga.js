{
function selectup() {
$('#selectstid').selectize({ 
onInitialize: function() {
this.trigger('change', true);
},
onChange: function() {
contentvis()
updateaws()
updatemarketing()
donutcharts()
updatecharts()
updatedata()
updatedata2()
updatedata3()
updatedata4()
}})}

 
const firebaseConfig = {
apiKey: "AIzaSyB5X0NgXNQ8d3UjqVP5p_xB9Yt8cOk1ut8",
authDomain: "peckwater-system.firebaseapp.com",
projectId: "peckwater-system",
storageBucket: "peckwater-system.appspot.com",
messagingSenderId: "620518934310",
appId: "1:620518934310:web:84c9c701f5794161d863e7",
measurementId: "G-EZSWDWDTB6"
};
const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const signOutButton2 = document.querySelector("#mobsignout");
const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date = (today.getDate()+'-'+(today.getMonth()+1)+'-')+today.getFullYear()

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged((user) => {
const signout = () => {
auth.signOut();
};
signOutButton.addEventListener('click', signout);
signOutButton2.addEventListener('click', signout);
auth.onAuthStateChanged(async (user) => {

let currentPath = window.location.pathname;
if(user) {

let curUser = firebase.auth().currentUser;
let myFS = firebase.firestore()
let docRef = myFS.doc("users/" + curUser.uid);
docRef.get().then(docSnap => {
let data = docSnap.data()
let name = data['Name'];
let emaild = data['Email'];
let prereq = data['prereq'];
let lang = data["language"];
let usc = data["uscontent"];


let stid = data['stid'].toUpperCase()
let myselect = document.querySelector('#selectstid')

 
/**
if(stid.includes(',')){

let mys = stid.split(',')
for (i = 0 ; i < mys.length; i++) {
myselect.add(new Option(mys[i],mys[i]));
}} 
 
else {
myselect.add(new Option(stid,stid));
selectup()
}
**/

setTimeout(() => {
  while (myselect.options.length > 0) {                
  myselect.remove(0);
  }
  myselect.add(new Option('Select site',''));
  
    if(stid.includes(',')){
    let mys = stid.split(',')
    for (i = 0 ; i < mys.length; i++) {
    let cus = document.getElementById('username-'+mys[i]).textContent
    myselect.add(new Option(cus,mys[i]))}
    selectup()  
  } else if(stid !== '*') {
    let cusd = document.getElementById('username-'+stid).textContent
    myselect.add(new Option(cusd,stid));
    selectup()  
  }
  }, "8000")

setTimeout(() => {
  if(stid === '*'){ 
  myselect.remove(0);
  myselect.add(new Option('Select site',''));
  const cll = document.getElementsByClassName("user-stid");
  for (let i = 0; i < cll.length; i++) {
  myselect.add(new Option(cll[i].textContent,cll[i].textContent));
  }
  selectup()
  }
  }, "15000"
 

document.querySelector('#uscontent').textContent = usc
document.querySelector('#languageselector').textContent = lang
let profileuids = curUser.uid
{
window.intercomSettings = {
api_base: "https://api-iam.intercom.io",
app_id: "e84ncf6y",
hide_default_launcher: true,
name: name, // Full name
email: emaild, // Email address
user_id: profileuids, // UID FIREBASE
custom_launcher_selector:'#intercom-url'
};
}
{

(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}



// if gsign and no name
if(!!name) {
$('#userName').html(name);
$('#userName2').html(name);
} else {
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Name:user.displayName}, {merge:true})
{
setTimeout(() => {
window.location.href = '/portal/dashboard'
}, 2000);
}
$('#userName2').html(name);
$('#userName').html(name);
}

{
let firstletter = name.substring(0, 1)
$('.firstletters').html(firstletter);
let restaurant = data['Restaurant'];
let profileuid = curUser.uid

let lang = data["language"];
document.querySelector('#lang').textContent = lang


let course1=data['ftbcourse']
let course2=data['seccourse']
let course3=data['wbwcourse']
let course4=data['dlvcourse']
let course5=data['smcourse']
let course6=data['vcourse']
let course7=data['mcourse']
let course8=data['rcourse']
let course9=data['nyamcourse']
let course10=data['lockedcourse']
let course11=data['cluckcourse']
let course12=data['rebelritocourse']
let course13=data['ktowncourse']
let course14=data['chicboxcourse']
let course15=data['sbcourse']
let course16=data['mlcourse']
let course17=data['tscourse']

let rtrue = data['rated'];
if(rtrue === true) {
document.querySelector('#npsdiv').style.display = 'none'
} else {
document.querySelector('#npsdiv').style.display = 'flex'
}


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
$('#ml02').css('display', 'flex');
$('#ml022').css('display', 'flex');
} else  {
$('#ml02').hide()
$('#ml022').hide()
}

if(course17 == true){
$('#sm02').css('display', 'flex');
$('#sm022').css('display', 'flex');
} else  {
$('#sm02').hide()
$('#sm022').hide()
}


document.querySelector('#profile-uid').textContent=profileuid;
document.querySelector('#profile-name').textContent=name;
document.querySelector('#profile-email').textContent=emaild;
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';}
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Timestamp:date}, {merge:true})


if(!!emaild) {
$('#email').html(emaild);
} else {
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Email:user.email}, {merge:true})
$('#email').html(emaild);
}
}})

} else {
console.log('user logged out');
signOutButton.style.display="none";
if('/' != currentPath){location.href = '/login';}
maincontent.style.display='none';
loader.style.display='flex';



}})})}


let campaign = document.querySelectorAll('.coll-marketing')
for (var i = 0; i < campaign.length; i++) {
let cam = campaign[i].children[0].children[1].children[0].textContent.toString()
let cambutton = campaign[i].children[0].children[5].children[1]
cambutton.addEventListener("click", function() {
let mysel = document.querySelector('#selectstid').value
firebase.firestore().doc("stid/"+mysel).set({ [cam]:cam }, {merge:true})

this.textContent = 'Opted In'
cambutton.classList.add("on")
})
}

let campaign2 = document.querySelectorAll('.featured-promo')
for (var i = 0; i < campaign2.length; i++) {
let campbutton2 = campaign2[i].children[1].children[3].children[1]
let cam2 = campaign2[i].children[1].children[3].children[2].textContent
campbutton2.addEventListener("click", function() {
let mysel = document.querySelector('#selectstid').value
firebase.firestore().doc("stid/"+mysel).set({ [cam2]:cam2 }, {merge:true})
this.textContent = 'Opted In'
campbutton2.classList.add("on")

});
}

