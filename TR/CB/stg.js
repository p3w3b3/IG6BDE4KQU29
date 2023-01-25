{

  const email = document.querySelector('#email'); 
  const signOutButton = document.querySelector('#signOutButton');
  const userName = document.querySelector('#userName');
  const userName2 = document.querySelector('#userName2');
  const loader = document.querySelector('#loadanimation');
  const maincontent = document.querySelector('#maincontent');
  
  
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

  
document.getElementById("retake-cb1").addEventListener("click", () => {
$("#cb1-quiz").css("display", "flex");
$("#cb1-quiz-completed").hide();
});

document.getElementById("retake-cb3").addEventListener("click", () => {
$("#cb3-quiz").css("display", "flex");
$("#cb3-quiz-completed").hide();
});

document.getElementById("retake-cb4").addEventListener("click", () => {
$("#cb4-quiz").css("display", "flex");
$("#cb4-quiz-completed").hide();
});

document.getElementById("retake-cb6").addEventListener("click", () => {
$("#cb6-quiz").css("display", "flex");
$("#cb6-quiz-completed").hide();
});


  $(".section1selection").css("background-color", "white");
  $(".section1div").hide();
  $("#cb1p1video").show();
  $("#cb1p1button").css("background-color", "#e7edf0");
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const authChanged = firebase.auth().onAuthStateChanged(user =>{
  let cbprognum = 0
  let cbprognum2 = 0
  let cbprognum3 = 0
  let cbprognum4 = 0
  let cbprognum5 = 0
  let cbprognum6 = 0
  let cbprognum7 = 0



      
  const signout = () => {
      auth.signOut();
  }
  
  signOutButton.addEventListener('click', signout);
  
  
  auth.onAuthStateChanged(async (user) => {
    let currentPath = window.location.pathname;
    if (user) {
      maincontent.style.display='flex';
          loader.style.display='none';
      let myFS = firebase.firestore()
      let docSnap = await myFS.doc("users/"+firebase.auth().currentUser.uid).get();
      let data = docSnap.data()
      let curUser = firebase.auth().currentUser;
      let prereq = data['prereq'];
      let name = data['Name'];
      let emaild = data['Email']; 
      let firstletter = name.substring(0, 1)
      $('.firstletter').html(firstletter);
  
      let restaurant = data['Restaurant']; 
      let quiz1 = data['cb2p4']; 
      let quiz3 = data['cb3p6']; 
      let quiz4 = data['cb4p3']; 
      let quiz6 = data['cb6p6']; 
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

let course15 = data['burgercourse1']
let course16 = data['burgercourse2']
let course17 = data['burgercourse3']


if(course15 === true){
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
    
    if(course16 === true){
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
    
    if(course17 === true){
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
    
  
  
if(!!quiz1) {
$('#cb1-quiz').hide()
$('#cb1-quiz-completed').css("display", "flex");
}

if(!!quiz3) {
$('#cb3-quiz').hide()
$('#cb3-quiz-completed').css("display", "flex");
}

if(!!quiz4) {
$('#cb4-quiz').hide()
$('#cb4-quiz-completed').css("display", "flex");
}

if(!!quiz6) {
$('#cb6-quiz').hide()
$('#cb6-quiz-completed').css("display", "flex");
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
      
      let cb1p1 = data['cb1p1'];    
      let cb1p2 = data['cb1p2'];    
      let cb1p3 = data['cb1p3'];    
      let cb1p4 = data['cb1p4']; 
       
      let cb2p1 = data['cb2p1'];    
      let cb2p2 = data['cb2p2'];    
      let cb2p3 = data['cb2p3'];
      let cb2p4 = data['cb2p4']
  
      let cb3p1 = data['cb3p1'];    
      let cb3p2 = data['cb3p2']; 
      let cb3p3 = data['cb3p3'];    
      let cb3p4 = data['cb3p4']; 
      let cb3p5 = data['cb3p5'];    
      let cb3p6 = data['cb3p6'];    
  
      let cb4p1 = data['cb4p1'];  
      let cb4p2 = data['cb4p2'];  
      let cb4p3 = data['cb4p3'];  
  
  
      let cb5p1 = data['cb5p1'];  
      let cb5p2 = data['cb5p2'];  
  
  
      let cb6p1 = data['cb6p1']; 
      let cb6p2 = data['cb6p2']; 
      let cb6p3 = data['cb6p3']; 
      let cb6p4 = data['cb6p4']; 
      let cb6p5 = data['cb6p5']; 
      let cb6p6 = data['cb6p6']; 
  
  
      let cb7p1 = data['cb7p1']; 
      let cb7p2 = data['cb7p2']; 
      let cb7p3 = data['cb7p3']; 
      let cb7p4 = data['cb7p4']; 
      let cb7p5 = data['cb7p5']; 


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
  name: "'"+name+"'", // Full name
  email: "'"+emaild+"'", // Email address
  user_id: "'"+profileuid+"'" // UID FIREBASE
};
}
{
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/e84ncf6y'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
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
      
document.querySelector('#userName').textContent=name;
document.querySelector('#userName2').textContent=name;

if(emaild.length>30) {
document.querySelector('#email').textContent = emaild.slice(0,17) + '...'
document.querySelector('#email2').textContent = emaild.slice(0,17) + '...'
} else {
document.querySelector('#email').textContent=emaild;
document.querySelector('#email2').textContent=emaild;
}

      
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';} 


      if( cb1p1 == true) {
  $('#cb1p1').hide()
  $('#cb1p1x').show()
  cbprognum++
  }
      if( cb1p2 == true) {
  $('#cb1p2').hide()
  $('#cb1p2x').show()
  cbprognum++
  }
  
      if( cb1p3 == true) {
  $('#cb1p3').hide()
  $('#cb1p3x').show()
  cbprognum++
  }
  
      if( cb1p4 == true) {
  $('#cb1p4').hide()
  $('#cb1p4x').show()
  cbprognum++
  }
      if( cb2p1 == true) {
  $('#cb2p1').hide()
  $('#cb2p1x').show()
  cbprognum2++
  }
      if( cb2p2 == true) {
  $('#cb2p2').hide()
  $('#cb2p2x').show()
  cbprognum2++
  }
      if( cb2p3 == true) {
  $('#cb2p3').hide()
  $('#cb2p3x').show()
  cbprognum2++
  }
  
      if( cb2p4 == true) {
  $('#cb2p4').hide()
  $('#cb2p4x').show()
  cbprognum2++
  }
  
      if( cb3p1 == true) {
  $('#cb3p1').hide()
  $('#cb3p1x').show()
  cbprognum3++
  }
      if( cb3p2 == true) {
  $('#cb3p2').hide()
  $('#cb3p2x').show()
  cbprognum3++
  }
      if( cb3p3 == true) {
  $('#cb3p3').hide()
  $('#cb3p3x').show()
  cbprognum3++
  }
      if( cb3p4 == true) {
  $('#cb3p4').hide()
  $('#cb3p4x').show()
  cbprognum3++
  }
      if( cb3p5 == true) {
  $('#cb3p5').hide()
  $('#cb3p5x').show()
  cbprognum3++
  }
      if( cb3p6 == true) {
  $('#cb3p6').hide()
  $('#cb3p6x').show()
  cbprognum3++
  }
      if( cb4p1 == true) {
  $('#cb4p1').hide()
  $('#cb4p1x').show()
  cbprognum4++
  }
      if( cb4p2 == true) {
  $('#cb4p2').hide()
  $('#cb4p2x').show()
  cbprognum4++
  }
      if( cb4p3 == true) {
  $('#cb4p3').hide()
  $('#cb4p3x').show()
  cbprognum4++
  }
  
      if( cb5p1 == true) {
  $('#cb5p1').hide()
  $('#cb5p1x').show()
  cbprognum5++
  }
      if( cb5p2 == true) {
  $('#cb5p2').hide()
  $('#cb5p2x').show()
  cbprognum5++
  }
      if( cb6p1 == true) {
  $('#cb6p1').hide()
  $('#cb6p1x').show()
  cbprognum6++
  }
      if( cb6p2 == true) {
  $('#cb6p2').hide()
  $('#cb6p2x').show()
  cbprognum6++
  }
      if( cb6p3 == true) {
  $('#cb6p3').hide()
  $('#cb6p3x').show()
  cbprognum6++
  }
      if( cb6p4 == true) {
  $('#cb6p4').hide()
  $('#cb6p4x').show()
  cbprognum6++
  }
      if( cb6p5 == true) {
  $('#cb6p5').hide()
  $('#cb6p5x').show()
  cbprognum6++
  }
      if( cb6p6 == true) {
  $('#cb6p6').hide()
  $('#cb6p6x').show()
  cbprognum6++
  }
  
      if( cb7p1 == true) {
  $('#cb7p1').hide()
  $('#cb7p1x').show()
  cbprognum7++
  }
  
  
      if( cb7p2 == true) {
  $('#cb7p2').hide()
  $('#cb7p2x').show()
  cbprognum7++
  }
  
  
      if( cb7p3 == true) {
  $('#cb7p3').hide()
  $('#cb7p3x').show()
  cbprognum7++
  }
  
  
      if( cb7p4 == true) {
  $('#cb7p4').hide()
  $('#cb7p4x').show()
  cbprognum7++
  }
  
  
      if( cb7p5 == true) {
  $('#cb7p5').hide()
  $('#sp5x').show()
  cbprognum7++
  }
  
  
  let sp =((cbprognum+cbprognum2+cbprognum3+cbprognum4+cbprognum5+cbprognum6+cbprognum7)/30*100)
  let spn = Math.round(sp)+'%'
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({CBN:spn}, {merge:true})
  
  
   if(prereq !== true) {
          location.href = '/onboarding';
          }
   if(!!name) {
        $('#userName2').html(name);
    } else {
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({Name:user.displayName}, {merge:true})
    {
    setTimeout(() => { 
           window.location.href = '/dashboard/training/flip-the-bird';
    
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
  document.querySelector('#cbprognum').textContent = cbprognum
  document.querySelector('#cbprognum2').textContent = cbprognum2
  document.querySelector('#cbprognum3').textContent = cbprognum3
  document.querySelector('#cbprognum4').textContent = cbprognum4
  document.querySelector('#cbprognum5').textContent = cbprognum5
  document.querySelector('#cbprognum6').textContent = cbprognum6
  document.querySelector('#cbprognum7').textContent = cbprognum7
  
  })})
  
  }
  
  
  
  {
  document.getElementById('cb1-quiz').addEventListener('submit', function() {
  
  let cb1q1 = document.querySelector('#cb1-quiz-1').value == 'correct'
  let cb1q2 = document.querySelector('#cb1-quiz-2').value == 'correct'
  let cb1q3 = document.querySelector('#cb1-quiz-3').value == 'correct'
  let cb1q4 = document.querySelector('#cb1-quiz-4').value == 'correct'
  let cb1q5 = document.querySelector('#cb1-quiz-5').value == 'correct'
  let cb1q6 = document.querySelector('#cb1-quiz-6').value == 'correct'
  let cb1q7 = document.querySelector('#cb1-quiz-7').value == 'correct'
  
  
  let percentage = 0
  if(cb1q1) { percentage++}
  if(cb1q2) { percentage++}
  if(cb1q3) { percentage++}
  if(cb1q4) { percentage++}
  if(cb1q5) { percentage++}
  if(cb1q6) { percentage++}
  if(cb1q7) { percentage++}
  
  let correct = Math.round((percentage * 14.28))
  document.getElementById('cb1p5percentage').textContent = correct+'%'
  
  if(cb1q1 && cb1q2 && cb1q3 && cb1q4 && cb1q5 && cb1q6 && cb1q7 ) {
  $('#cb1-quiz-incorrect').hide()
  $('#cb1-quiz-correct').css("display", "flex");
  $('#cb2p4x').show()
  $('#cb2p4').hide()
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({cb2p4:true},{merge:true})
  
  let cbprognum2 = 0
  if (document.querySelector('#cb2p1x').style.display == 'block'){cbprognum2++}
  if (document.querySelector('#cb2p2x').style.display == 'block'){cbprognum2++}
  if (document.querySelector('#cb2p3x').style.display == 'block'){cbprognum2++}
  if (document.querySelector('#cb2p4x').style.display == 'block'){cbprognum2++}
  document.querySelector('#cbprognum2').textContent = cbprognum2
  
  }
  
  else {
  $('#cb1-quiz-incorrect').css("display", "flex");
  $('#cb1-quiz-correct').hide()
  }
  
  })
  }
  
  
  {
  document.getElementById('cb3-quiz').addEventListener('submit', function() {
  
  let cb3q1 = document.querySelector('#cb3-quiz-1').value == 'correct'
  let cb3q2 = document.querySelector('#cb3-quiz-2').value == 'correct'
  let cb3q3 = document.querySelector('#cb3-quiz-3').value == 'correct'
  let cb3q4 = document.querySelector('#cb3-quiz-4').value == 'correct'
  let cb3q5 = document.querySelector('#cb3-quiz-5').value == 'correct'
  let cb3q6 = document.querySelector('#cb3-quiz-6').value == 'correct'
  
  
  let percentage = 0
  if(cb3q1) { percentage++}
  if(cb3q2) { percentage++}
  if(cb3q3) { percentage++}
  if(cb3q4) { percentage++}
  if(cb3q5) { percentage++}
  if(cb3q6) { percentage++}
  let correct = Math.round((percentage * 16.66))
  document.getElementById('cb3p6percentage').textContent = correct+'%'
  
  if(cb3q1 && cb3q2 && cb3q3 && cb3q4 && cb3q5 && cb3q6 ) {
  $('#cb3-quiz-incorrect').hide()
  $('#cb3-quiz-correct').css("display", "flex");
  $('#cb3p6x').show()
  $('#cb3p6').hide()
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({cb3p6:true},{merge:true})
  
  let cbprognum3 = 0
  if (document.querySelector('#cb3p1x').style.display == 'block'){cbprognum3++}
  if (document.querySelector('#cb3p2x').style.display == 'block'){cbprognum3++}
  if (document.querySelector('#cb3p3x').style.display == 'block'){cbprognum3++}
  if (document.querySelector('#cb3p4x').style.display == 'block'){cbprognum3++}
  if (document.querySelector('#cb3p5x').style.display == 'block'){cbprognum3++}
  if (document.querySelector('#cb3p6x').style.display == 'block'){cbprognum3++}
  document.querySelector('#cbprognum3').textContent = cbprognum3
  
  }
  
  else {
  $('#cb3-quiz-incorrect').css("display", "flex");
  $('#cb3-quiz-correct').hide()
  console.log('incorrect')
  }
  
  })
  
  }
  
  
  {
  document.getElementById('cb4-quiz').addEventListener('submit', function() {
  
  let cb4q1 = document.querySelector('#cb4-quiz-1').value == 'correct'
  let cb4q2 = document.querySelector('#cb4-quiz-2').value == 'correct'
  let cb4q3 = document.querySelector('#cb4-quiz-3').value == 'correct'
  let cb4q4 = document.querySelector('#cb4-quiz-4').value == 'correct'
  let cb4q5 = document.querySelector('#cb4-quiz-5').value == 'correct'
  let cb4q6 = document.querySelector('#cb4-quiz-6').value == 'correct'
  
  let percentage = 0
  if(cb4q1) { percentage++}
  if(cb4q2) { percentage++}
  if(cb4q3) { percentage++}
  if(cb4q4) { percentage++}
  if(cb4q5) { percentage++}
  if(cb4q6) { percentage++}
  let correct = Math.round((percentage * 16.66))
  document.getElementById('cb4p3percentage').textContent = correct+'%'
  
  if(cb4q1 && cb4q2 && cb4q3 && cb4q4 && cb4q5 && cb4q6 ) {
  $('#cb4-quiz-incorrect').hide()
  $('#cb4-quiz-correct').css("display", "flex");
  $('#cb4p3x').show()
  $('#cb4p3').hide()
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({f4p3:true},{merge:true})
  
  let cbprognum4 = 0
  if (document.querySelector('#cb4p1x').style.display == 'block'){cbprognum4++}
  if (document.querySelector('#cb4p2x').style.display == 'block'){cbprognum4++}
  if (document.querySelector('#cb4p3x').style.display == 'block'){cbprognum4++}
  document.querySelector('#cbprognum4').textContent = cbprognum4
  
  }
  
  else {
  $('#cb4-quiz-incorrect').css("display", "flex");
  $('#cb4-quiz-correct').hide()
  }
  
  })
  }
  
  
  
  {
  document.getElementById('cb6-quiz').addEventListener('submit', function() {
  
  let cb6q1 = document.querySelector('#cb6-quiz-1').value == 'correct'
  let cb6q2 = document.querySelector('#cb6-quiz-2').value == 'correct'
  let cb6q3 = document.querySelector('#cb6-quiz-3').value == 'correct'
  let cb6q4 = document.querySelector('#cb6-quiz-4').value == 'correct'
  let cb6q5 = document.querySelector('#cb6-quiz-5').value == 'correct'
  let cb6q6 = document.querySelector('#cb6-quiz-6').value == 'correct'
  let cb6q7 = document.querySelector('#cb6-quiz-7').value == 'correct'
  let cb6q8 = document.querySelector('#cb6-quiz-8').value == 'correct'
  
  
  let percentage = 0
  if(cb6q1) { percentage++}
  if(cb6q2) { percentage++}
  if(cb6q3) { percentage++}
  if(cb6q4) { percentage++}
  if(cb6q5) { percentage++}
  if(cb6q6) { percentage++}
  if(cb6q7) { percentage++}
  if(cb6q8) { percentage++}
  let correct = Math.round((percentage * 12.50))
  document.getElementById('cb6p5percentage').textContent = correct+'%'
  
  if(cb6q1 && cb6q2 && cb6q3 && cb6q4 && cb6q5 && cb6q6 && cb6q7 && cb6q8) {
  $('#cb6-quiz-incorrect').hide()
  $('#cb6-quiz-correct').css("display", "flex");
  $('#cb6p6x').show()
  $('#cb6p6').hide()
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({cb6p6:true},{merge:true})
  
  let cbprognum6 = 0
  if (document.querySelector('#cb6p1x').style.display == 'block'){cbprognum6++}
  if (document.querySelector('#cb6p2x').style.display == 'block'){cbprognum6++}
  if (document.querySelector('#cb6p3x').style.display == 'block'){cbprognum6++}
  if (document.querySelector('#cb6p4x').style.display == 'block'){cbprognum6++}
  if (document.querySelector('#cb6p5x').style.display == 'block'){cbprognum6++}
  if (document.querySelector('#cb6p6x').style.display == 'block'){cbprognum6++}
  document.querySelector('#cbprognum6').textContent = cbprognum6
  
  }
  
  else {
  $('#cb6-quiz-incorrect').css("display", "flex");
  $('#cb6-quiz-correct').hide()
  }
  
  })
  }
