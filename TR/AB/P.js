{

const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



// Firebase configuration
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
const authChanged = firebase.auth().onAuthStateChanged(user =>{
let prognum = 0

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
    let s1p1 = data['ab1p1'];    
    let s1p2 = data['ab1p2'];    
    let s1p3 = data['ab1p3'];    
    let restaurant = data['Restaurant']; 
    let curUser = firebase.auth().currentUser;
    let profileuid = curUser.uid      
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
    let course18 = data['burgercourse1']
    let course19 = data['burgercourse2']
    let course20 = data['burgercourse3']


    let chickenstack = data["chickenstack"]
    let mexicanstack = data["mexicanstack"]

    if(course1 === true | course2 === true | course3 === true | chickenstack === true){
    document.getElementById('stack1-1').style.display = 'flex'
    document.getElementById('stack1-2').style.display = 'flex'
    document.getElementById('stack1-3').style.display = 'flex'
    document.getElementById('stack1-4').style.display = 'flex'
    document.getElementById('stack1-5').style.display = 'flex'
    }
    
    if(course7 === true | course8 === true | course12 === true | mexicanstack === true){
    document.getElementById('stack2-1').style.display = 'flex'
    document.getElementById('stack2-2').style.display = 'flex'
    document.getElementById('stack2-3').style.display = 'flex'
    document.getElementById('stack2-4').style.display = 'flex'
    document.getElementById('stack2-5').style.display = 'flex'
    }
    
    
if(course18 === true){
    document.querySelector('#brgr1-1').style.display = 'flex'
    document.querySelector('#brgr1-2').style.display = 'flex'
    document.querySelector('#brgr1-3').style.display = 'flex'
    document.querySelector('#brgr1-4').style.display = 'flex'
    document.querySelector('#brgr1-5').style.display = 'flex'
    } else {
    document.querySelector('#brgr1-1').style.display = 'none'
    document.querySelector('#brgr1-2').style.display = 'none'
    document.querySelector('#brgr1-3').style.display = 'none'
    document.querySelector('#brgr1-4').style.display = 'none'
    document.querySelector('#brgr1-5').style.display = 'none'
    }
    
    if(course19 === true){
      document.querySelector('#brgr2-1').style.display = 'flex'
      document.querySelector('#brgr2-2').style.display = 'flex'
      document.querySelector('#brgr2-3').style.display = 'flex'
      document.querySelector('#brgr2-4').style.display = 'flex'
      document.querySelector('#brgr2-5').style.display = 'flex'
      } else {
      document.querySelector('#brgr2-1').style.display = 'none'
      document.querySelector('#brgr2-2').style.display = 'none'
      document.querySelector('#brgr2-3').style.display = 'none'
      document.querySelector('#brgr2-4').style.display = 'none'
      document.querySelector('#brgr2-5').style.display = 'none'
      }
    
    if(course20 === true){
      document.querySelector('#brgr3-1').style.display = 'flex'
      document.querySelector('#brgr3-2').style.display = 'flex'
      document.querySelector('#brgr3-3').style.display = 'flex'
      document.querySelector('#brgr3-4').style.display = 'flex'
      document.querySelector('#brgr3-5').style.display = 'flex'
      } else {
      document.querySelector('#brgr3-1').style.display = 'none'
      document.querySelector('#brgr3-2').style.display = 'none'
      document.querySelector('#brgr3-3').style.display = 'none'
      document.querySelector('#brgr3-4').style.display = 'none'
      document.querySelector('#brgr3-5').style.display = 'none'
      }
	  
let course21 = data['pizzacourse1']
let course22 = data['pizzacourse2']
let course23 = data['pizzacourse3']

  if(course21 == true){
  document.querySelector('#pza1').style.display = 'flex'
  document.querySelector('#pza11').style.display = 'flex'
  document.querySelector('#pza111').style.display = 'flex'
  document.querySelector('#pza1111').style.display = 'flex'
  document.querySelector('#pza11111').style.display = 'flex'

  } else {
  document.querySelector('#pza1').style.display = 'none'
  document.querySelector('#pza11').style.display = 'none'
  document.querySelector('#pza111').style.display = 'none'
  document.querySelector('#pza1111').style.display = 'none'
  document.querySelector('#pza11111').style.display = 'none'
  }

  if(course22 == true){
  document.querySelector('#pza2').style.display = 'flex'
  document.querySelector('#pza22').style.display = 'flex'
  document.querySelector('#pza222').style.display = 'flex'
  document.querySelector('#pza2222').style.display = 'flex'
  document.querySelector('#pza22222').style.display = 'flex'

  } else {
  document.querySelector('#pza2').style.display = 'none'
  document.querySelector('#pza22').style.display = 'none'
  document.querySelector('#pza222').style.display = 'none'
  document.querySelector('#pza2222').style.display = 'none'
  document.querySelector('#pza22222').style.display = 'none'
  }
        
  if(course23 == true){
  document.querySelector('#pza3').style.display = 'flex'
  document.querySelector('#pza33').style.display = 'flex'
  document.querySelector('#pza333').style.display = 'flex'
  document.querySelector('#pza3333').style.display = 'flex'
  document.querySelector('#pza33333').style.display = 'flex'

  } else {
  document.querySelector('#pza3').style.display = 'none'
  document.querySelector('#pza33').style.display = 'none'
  document.querySelector('#pza333').style.display = 'none'
  document.querySelector('#pza3333').style.display = 'none'
  document.querySelector('#pza33333').style.display = 'none'
  }
	  
let lang = data["language"];
document.querySelector('#languageselector').textContent = lang

mixpanel.init('34ab50f7acd413779598bfe06a25b8c3', {debug: true}); 

    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#k1p1video").show();
    $("#k1p1button").css("background-color", "#e7edf0");

      
{
window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "e84ncf6y",
    hide_default_launcher: false,
    name: "'"+name+"'", // Full name
    email: "'"+emaild+"'", // Email address
    user_id: "'"+profileuid+"'" // UID FIREBASE
  };
}
{
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}
      
      


let sstid = data['stid'].toLowerCase()
let ops = data['operations']

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


    if( s1p1 == true) {
$('#sm1p1').hide()
$('#sm1p1x').show()
prognum++
}
    if( s1p2 == true) {
$('#sm1p2').hide()
$('#sm1p2x').show()
prognum++
}

    if( s1p3 == true) {
$('#sm1p3').hide()
$('#sm1p3x').show()
prognum++
}

if (admin == true) {
$("#n5").show();
$("#trackermob").show();
} else {
$("#n5").hide();
$("#trackermob").hide();
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


let sp =((prognum)/3*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({apicbase:spn}, {merge:true})

 if(!!name) {
      $('#userName2').html(name);
  } else {
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({Name:user.displayName}, {merge:true})
  {
  setTimeout(() => { 
         window.location.href = '/dashboard/training/apicbase';
  
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

})})}
    
