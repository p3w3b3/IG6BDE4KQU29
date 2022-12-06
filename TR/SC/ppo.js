{

const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



const firebaseConfig = {
  apiKey: "AIzaSyB5X0NgXNQ8d3UjqVP5p_xB9Yt8cOk1ut8",
  authDomain: "peckwater-system.firebaseapp.com",
  projectId: "peckwater-system",
  storageBucket: "peckwater-system.appspot.com",
  messagingSenderId: "620518934310",
  appId: "1:620518934310:web:84c9c701f5794161d863e7",
  measurementId: "G-EZSWDWDTB6"
};



mixpanel.init('34ab50f7acd413779598bfe06a25b8c3', {debug: true}); 
document.getElementById("retake-s1").addEventListener("click", () => {
  $("#s1-quiz").css("display", "flex");
  $("#s1-quiz-completed").hide();
});

document.getElementById("retake-s3").addEventListener("click", () => {
  $("#s3-quiz").css("display", "flex");
  $("#s3-quiz-completed").hide();
});

document.getElementById("retake-s4").addEventListener("click", () => {
  $("#s4-quiz").css("display", "flex");
  $("#s4-quiz-completed").hide();
});

document.getElementById("retake-s6").addEventListener("click", () => {
  $("#s6-quiz").css("display", "flex");
  $("#s6-quiz-completed").hide();
});


    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#s1p1video").show();
    $("#s1p1button").css("background-color", "#e7edf0");


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged(user =>{
let prognum = 0
let prognum2 = 0
let prognum3 = 0
let prognum4 = 0
let prognum5 = 0
let prognum6 = 0
let prognum7 = 0
let prognum8 = 0

const signout = () => {
    auth.signOut();
}

signOutButton.addEventListener('click', signout);


auth.onAuthStateChanged(async (user) => {
  let currentPath = window.location.pathname;
  if (user) {
    let myFS = firebase.firestore()
    let docSnap = await myFS.doc("users/"+firebase.auth().currentUser.uid).get();
    let data = docSnap.data()
    let prereq = data['prereq'];
      let name = data['Name'];
      let emaild = data['Email']; 
      	  let firstletter = name.substring(0, 1)
        $('.firstletter').html(firstletter);



      let curUser = firebase.auth().currentUser;
      let docRef = myFS.doc("users/" + curUser.uid);
      let restaurant = data['Restaurant']; 
      let quiz1 = data['s2p4']; 
      let quiz3 = data['s3p6']; 
      let quiz4 = data['s4p3']; 
      let quiz6 = data['s6p5']; 
      let profileuid = curUser.uid      


let sstid = data['stid'].toLowerCase()
let ops = data['operations']

if(ops == true){
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
    name: "'"+name+"'", 
    email: "'"+emaild+"'",
    user_id: "'"+profileuid+"'"
  };
}
{
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}





if(!!quiz1) {
$('#s1-quiz').hide()
$('#s1-quiz-completed').css("display", "flex");
}

if(!!quiz3) {
$('#s3-quiz').hide()
$('#s3-quiz-completed').css("display", "flex");
}

if(!!quiz4) {
$('#s4-quiz').hide()
$('#s4-quiz-completed').css("display", "flex");
}

if(!!quiz6) {
$('#s6-quiz').hide()
$('#s6-quiz-completed').css("display", "flex");
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
document.querySelector('#userName2').textContent=name;
document.querySelector('#userName4').textContent=name;
	  
if(emaild.length>30) {
document.querySelector('#email').textContent = emaild.slice(0,17) + '...'
document.querySelector('#email2').textContent = emaild.slice(0,17) + '...'
} else {
document.querySelector('#email').textContent=emaild;
document.querySelector('#email2').textContent=emaild;
}

document.querySelector('#profile-email').textContent=emaild;
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';} 


    let s1p1 = data['s1p1'];    
    let s1p2 = data['s1p2'];    
    let s1p3 = data['s1p3'];    
    let s1p4 = data['s1p4']; 
     
    let s2p1 = data['s2p1'];    
    let s2p2 = data['s2p2'];    
    let s2p3 = data['s2p3'];        
    let s2p4 = data['s2p4']; 
    let s3p1 = data['s3p1'];    
    let s3p2 = data['s3p2']; 
    let s3p3 = data['s3p3'];    
    let s3p4 = data['s3p4']; 
    let s3p5 = data['s3p5'];    
    let s3p6 = data['s3p6'];    
    let s4p1 = data['s4p1']; 
    let s4p2 = data['s4p2']; 
    let s4p3 = data['s4p3'];  
    let s5p1 = data['s5p1'];  
    let s6p1 = data['s6p1']; 
    let s6p2 = data['s6p2']; 
    let s6p3 = data['s6p3']; 
    let s6p4 = data['s6p4']; 
    let s6p5 = data['s6p5']; 

    let s7p1 = data['s7p1']; 
    let s7p2 = data['s7p2']; 
    let s7p3 = data['s7p3']; 
    let s7p4 = data['s7p4']; 
    let s7p5 = data['s7p5']; 

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


let lang = data["language"];
document.querySelector('#languageselector').textContent = lang

if(lang === 'usa'){
document.querySelector('#section00button').style.display = 'flex'
document.querySelector('#usonly1').style.display = 'flex'
document.querySelector('#usonly2').style.display = 'flex'
	
document.querySelector('#section0button').style.display = 'none'
document.querySelector('#nonus').style.display = 'none'
} else {
document.querySelector('#section00button').style.display = 'none'
document.querySelector('#usonly1').style.display = 'none'
document.querySelector('#usonly2').style.display = 'none'
	
document.querySelector('#section0button').style.display = 'flex'
document.querySelector('#nonus').style.display = 'flex'
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

if (admin == true) {
$("#n5").show();
$("#trackermob").show();
} else {
$("#n5").hide();
$("#trackermob").hide();
}
  
	  
    if( s1p1 == true) {
$('#s1p1').hide()
$('#s1p1x').show()
prognum++
}
    if( s1p2 == true) {
$('#s1p2').hide()
$('#s1p2x').show()
prognum++
}

    if( s1p3 == true) {
$('#s1p3').hide()
$('#s1p3x').show()
prognum++
}

    if( s1p4 == true) {
$('#s1p4').hide()
$('#s1p4x').show()
prognum++
}

    if( s2p1 == true) {
$('#s2p1').hide()
$('#s2p1x').show()
prognum2++
}
    if( s2p2 == true) {
$('#s2p2').hide()
$('#s2p2x').show()
prognum2++
}
    if( s2p3 == true) {
$('#s2p3').hide()
$('#s2p3x').show()
prognum2++
}

    if( s2p4 == true) {
$('#s2p4').hide()
$('#s2p4x').show()
prognum2++
}

    if( s3p1 == true) {
$('#s3p1').hide()
$('#s3p1x').show()
prognum3++
}
    if( s3p2 == true) {
$('#s3p2').hide()
$('#s3p2x').show()
prognum3++
}
    if( s3p3 == true) {
$('#s3p3').hide()
$('#s3p3x').show()
prognum3++
}
    if( s3p4 == true) {
$('#s3p4').hide()
$('#s3p4x').show()
prognum3++
}
    if( s3p5 == true) {
$('#s3p5').hide()
$('#s3p5x').show()
prognum3++
}
    if( s3p6 == true) {
$('#s3p6').hide()
$('#s3p6x').show()
prognum3++
}
    if( s4p1 == true) {
$('#s4p1').hide()
$('#s4p1x').show()
prognum4++
}
    if( s4p2 == true) {
$('#s4p2').hide()
$('#s4p2x').show()
prognum4++
}
    if( s4p3 == true) {
$('#s4p3').hide()
$('#s4p3x').show()
prognum4++
}

    if( s5p1 == true) {
$('#s5p1').hide()
$('#s5p1x').show()
prognum5++
}
    if( s6p1 == true) {
$('#s6p1').hide()
$('#s6p1x').show()
prognum6++
}
    if( s6p2 == true) {
$('#s6p2').hide()
$('#s6p2x').show()
prognum6++
}
    if( s6p3 == true) {
$('#s6p3').hide()
$('#s6p3x').show()
prognum6++
}
    if( s6p4 == true) {
$('#s6p4').hide()
$('#s6p4x').show()
prognum6++
}
    if( s6p5 == true) {
$('#s6p5').hide()
$('#s6p5x').show()
prognum6++
}


    if( s7p1 == true) {
$('#s7p1').hide()
$('#s7p1x').show()
prognum8++
}

    if( s7p2 == true) {
$('#s7p2').hide()
$('#s7p2x').show()
prognum8++
}
	  
    if( s7p3 == true) {
$('#s7p3').hide()
$('#s7p3x').show()
prognum8++
}

   if( s7p4 == true) {
$('#s7p4').hide()
$('#s7p4x').show()
prognum8++
}
	  
    if( s7p5 == true) {
$('#s7p5').hide()
$('#s7p5x').show()
prognum8++
}
	  
let sp =((prognum+prognum2+prognum3+prognum4+prognum5+prognum6+prognum8)/28*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({SEC:spn}, {merge:true})

 if(!!name) {
      $('#userName2').html(name);
  } else {
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({Name:user.displayName}, {merge:true})
  {
  setTimeout(() => { 
         window.location.href = '/dashboard/training/seoul-chikin';
  
  }, 2000);
  
  }
  
      $('#userName2').html(name);
  }

  if(!!emaild) {
  }} else {
    console.log('user logged out');
    signOutButton.style.display="none";
    if('/' != currentPath){location.href = '/login';}
    maincontent.style.display='none';
		loader.style.display='flex';
  }
signOutButton.addEventListener('click', signout);
document.querySelector('#prognum').textContent = prognum
document.querySelector('#prognum2').textContent = prognum2
document.querySelector('#prognum3').textContent = prognum3
document.querySelector('#prognum4').textContent = prognum4
document.querySelector('#prognum5').textContent = prognum5
document.querySelector('#prognum6').textContent = prognum6
document.querySelector('#prognum7').textContent = prognum7
document.querySelector('#prognum8').textContent = prognum8

})})

}


{
document.getElementById('s1-quiz').addEventListener('submit', function() {

let s1q1 = document.querySelector('#s1-quiz-1').value == 'correct'
let s1q2 = document.querySelector('#s1-quiz-2').value == 'correct'
let s1q3 = document.querySelector('#s1-quiz-3').value == 'correct'
let s1q4 = document.querySelector('#s1-quiz-4').value == 'correct'
let s1q5 = document.querySelector('#s1-quiz-5').value == 'correct'
let s1q6 = document.querySelector('#s1-quiz-6').value == 'correct'
let s1q7 = document.querySelector('#s1-quiz-7').value == 'correct'


let percentage = 0
if(s1q1) { percentage++}
if(s1q2) { percentage++}
if(s1q3) { percentage++}
if(s1q4) { percentage++}
if(s1q5) { percentage++}
if(s1q6) { percentage++}
if(s1q7) { percentage++}

let correct = Math.round((percentage * 14.28))
document.getElementById('s1p5percentage').textContent = correct+'%'

if(s1q1 && s1q2 && s1q3 && s1q4 && s1q5 && s1q6 && s1q7 ) {
$('#s1-quiz-incorrect').hide()
$('#s1-quiz-correct').css("display", "flex");
$('#s2p4x').show()
$('#s2p4').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s2p4:true},{merge:true})

let prognum2 = 0
if (document.querySelector('#s2p4x').style.display == 'block'){prognum2++}
if (document.querySelector('#s2p2x').style.display == 'block'){prognum2++}
if (document.querySelector('#s2p3x').style.display == 'block'){prognum2++}
if (document.querySelector('#s2p4x').style.display == 'block'){prognum2++}
document.querySelector('#prognum2').textContent = prognum2

}

else {
$('#s1-quiz-incorrect').css("display", "flex");
$('#s1-quiz-correct').hide()
}

})
}


{
document.getElementById('s3-quiz').addEventListener('submit', function() {

let s3q1 = document.querySelector('#s3-quiz-1').value == 'correct'
let s3q2 = document.querySelector('#s3-quiz-2').value == 'correct'
let s3q3 = document.querySelector('#s3-quiz-3').value == 'correct'
let s3q4 = document.querySelector('#s3-quiz-4').value == 'correct'
let s3q5 = document.querySelector('#s3-quiz-5').value == 'correct'
let s3q6 = document.querySelector('#s3-quiz-6').value == 'correct'


let percentage = 0
if(s3q1) { percentage++}
if(s3q2) { percentage++}
if(s3q3) { percentage++}
if(s3q4) { percentage++}
if(s3q5) { percentage++}
if(s3q6) { percentage++}
let correct = Math.round((percentage * 16.66))
document.getElementById('s3p6percentage').textContent = correct+'%'

if(s3q1 && s3q2 && s3q3 && s3q4 && s3q5 && s3q6 ) {
$('#s3-quiz-incorrect').hide()
$('#s3-quiz-correct').css("display", "flex");
$('#s3p6x').show()
$('#s3p6').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s3p6:true},{merge:true})

let prognum3 = 0
if (document.querySelector('#s3p1x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p2x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p3x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p4x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p5x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p6x').style.display == 'block'){prognum3++}
document.querySelector('#prognum3').textContent = prognum3

}

else {
$('#s3-quiz-incorrect').css("display", "flex");
$('#s3-quiz-correct').hide()
console.log('incorrect')
}

})

}


{
document.getElementById('s4-quiz').addEventListener('submit', function() {

let s4q1 = document.querySelector('#s4-quiz-1').value == 'correct'
let s4q2 = document.querySelector('#s4-quiz-2').value == 'correct'
let s4q3 = document.querySelector('#s4-quiz-3').value == 'correct'
let s4q4 = document.querySelector('#s4-quiz-4').value == 'correct'
let s4q5 = document.querySelector('#s4-quiz-5').value == 'correct'
let s4q6 = document.querySelector('#s4-quiz-6').value == 'correct'

let percentage = 0
if(s4q1) { percentage++}
if(s4q2) { percentage++}
if(s4q3) { percentage++}
if(s4q4) { percentage++}
if(s4q5) { percentage++}
if(s4q6) { percentage++}
let correct = Math.round((percentage * 16.66))
document.getElementById('s4p3percentage').textContent = correct+'%'

if(s4q1 && s4q2 && s4q3 && s4q4 && s4q5 && s4q6 ) {
$('#s4-quiz-incorrect').hide()
$('#s4-quiz-correct').css("display", "flex");
$('#s4p3x').show()
$('#s4p3').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s4p3:true},{merge:true})

let prognum4 = 0
if (document.querySelector('#s4p1x').style.display == 'block'){prognum4++}
if (document.querySelector('#s4p2x').style.display == 'block'){prognum4++}
if (document.querySelector('#s4p3x').style.display == 'block'){prognum4++}
document.querySelector('#prognum4').textContent = prognum4

}

else {
$('#s4-quiz-incorrect').css("display", "flex");
$('#s4-quiz-correct').hide()
}

})
}



{
document.getElementById('s6-quiz').addEventListener('submit', function() {

let s6q1 = document.querySelector('#s6-quiz-1').value == 'correct'
let s6q2 = document.querySelector('#s6-quiz-2').value == 'correct'
let s6q3 = document.querySelector('#s6-quiz-3').value == 'correct'
let s6q4 = document.querySelector('#s6-quiz-4').value == 'correct'
let s6q5 = document.querySelector('#s6-quiz-5').value == 'correct'
let s6q6 = document.querySelector('#s6-quiz-6').value == 'correct'
let s6q7 = document.querySelector('#s6-quiz-7').value == 'correct'

let percentage = 0
if(s6q1) { percentage++}
if(s6q2) { percentage++}
if(s6q3) { percentage++}
if(s6q4) { percentage++}
if(s6q5) { percentage++}
if(s6q6) { percentage++}
if(s6q7) { percentage++}
let correct = Math.round((percentage * 14.28))
document.getElementById('s6p5percentage').textContent = correct+'%'

if(s6q1 && s6q2 && s6q3 && s6q4 && s6q5 && s6q6 && s6q7) {
$('#s6-quiz-incorrect').hide()
$('#s6-quiz-correct').css("display", "flex");
$('#s6p5x').show()
$('#s6p5').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s6p5:true},{merge:true})

let prognum6 = 0
if (document.querySelector('#s6p1x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p2x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p3x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p4x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p5x').style.display == 'block'){prognum6++}
document.querySelector('#prognum6').textContent = prognum6

}

else {
$('#s6-quiz-incorrect').css("display", "flex");
$('#s6-quiz-correct').hide()
}

})
}
