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
    
  

      $(".section1selection").css("background-color", "white");
      $(".section1div").hide();
      $("#m1p1video").show();
      $("#m1p1button").css("background-color", "#e7edf0");
  
  
  
  firebase.initializeApp(firebaseConfig);
  mixpanel.init('bb6d2603674e27d7b31d045acf3ae77f', {debug: true});   
  const auth = firebase.auth();
  const authChanged = firebase.auth().onAuthStateChanged(user =>{
  let mprognum = 0
  let mprognum2 = 0
  let mprognum3 = 0
  let mprognum4 = 0
  let mprognum5 = 0
  let curUser = firebase.auth().currentUser;
  let profileuid = curUser.uid      

       
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
      let prereq = data['prereq'];
      let name = data['Name'];
      let restaurant = data['Restaurant']; 
      let emaild = data['Email']; 
      let firstletter = name.substring(0, 1)
      $('.firstletter').html(firstletter);
  
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

  
      let m1p1 = data['m1p1'];    
      let m1p2 = data['m1p2'];    
      let m1p3 = data['m1p3'];    
      let m1p4 = data['m1p4']; 
      let m1p5 = data['m1p5'];    
      let m1p6 = data['m1p6'];    
      let m1p7 = data['m1p7'];    
       
      let m2p1 = data['m2p1'];    
      let m2p2 = data['m2p2'];    
      let m2p3 = data['m2p3'];
      let m2p4 = data['m2p4'];
      let m2p5 = data['m2p5'];    
      let m2p6 = data['m2p6'];    
      let m2p7 = data['m2p7'];
      let m2p8 = data['m2p8'];
  
      let m3p1 = data['m3p1'];    
      let m3p2 = data['m3p2'];    
      let m3p3 = data['m3p3'];
      let m3p4 = data['m3p4'];
      
      let m4p1 = data['m4p1'];    
      let m4p2 = data['m4p2'];    
      let m4p3 = data['m4p3'];
      let m4p4 = data['m4p4'];
  
      let m5p1 = data['m5p1'];
  
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


      if( m1p1 == true) {
  $('#m1p1').hide()
  $('#m1p1x').show()
  mprognum++
  }
      if( m1p2 == true) {
  $('#m1p2').hide()
  $('#m1p2x').show()
  mprognum++
  }
  
      if( m1p3 == true) {
  $('#m1p3').hide()
  $('#m1p3x').show()
  mprognum++
  }
  
      if( m1p4 == true) {
  $('#m1p4').hide()
  $('#m1p4x').show()
  mprognum++
  }
  
      if( m1p5 == true) {
  $('#m1p5').hide()
  $('#m1p5x').show()
  mprognum++
  }
  
      if( m1p6 == true) {
  $('#m1p6').hide()
  $('#m1p6x').show()
  mprognum++
  }
  
      if( m1p7 == true) {
  $('#m1p7').hide()
  $('#m1p7x').show()
  mprognum++
  }
    
  if( m2p1 == true) {
  $('#m2p1').hide()
  $('#m2p1x').show()
  mprognum2++
  }
      
  if( m2p2 == true) {
  $('#m2p2').hide()
  $('#m2p2x').show()
  mprognum2++
  }
    
      
  if( m2p3 == true) {
  $('#m2p3').hide()
  $('#m2p3x').show()
  mprognum2++
  }
      
  if( m2p4 == true) {
  $('#m2p4').hide()
  $('#m2p4x').show()
  mprognum2++
  }
  
  if( m2p5 == true) {
  $('#m2p5').hide()
  $('#m2p5x').show()
  mprognum2++
  }
  
  if( m2p6 == true) {
  $('#m2p6').hide()
  $('#m2p6x').show()
  mprognum2++
  }
      
  if( m2p7 == true) {
  $('#m2p7').hide()
  $('#m2p7x').show()
  mprognum2++
  }
  
  if( m2p8 == true) {
  $('#m2p8').hide()
  $('#m2p8x').show()
  mprognum2++
  }
  
  if( m3p1 == true) {
  $('#m3p1').hide()
  $('#m3p1x').show()
  mprognum3++
  }
      
  if( m3p2 == true) {
  $('#m3p2').hide()
  $('#m3p2x').show()
  mprognum3++
  }
  
  if( m3p3 == true) {
  $('#m3p3').hide()
  $('#m3p3x').show()
  mprognum3++
  }
  
  if( m3p4 == true) {
  $('#m3p4').hide()
  $('#m3p4x').show()
  mprognum3++
  }
  
  if( m4p1 == true) {
  $('#m4p1').hide()
  $('#m4p1x').show()
  mprognum4++
  }
      
  if( m4p2 == true) {
  $('#m4p2').hide()
  $('#m4p2x').show()
  mprognum4++
  }
    
  if( m4p3 == true) {
  $('#m4p3').hide()
  $('#m4p3x').show()
  mprognum4++
  }  
  
  if( m4p4 == true) {
  $('#m4p4').hide()
  $('#m4p4x').show()
  mprognum4++
  }
  
  if( m5p1 == true) {
  $('#m5p1').hide()
  $('#m5p1x').show()
  mprognum5++
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
  
  
  let sp =((mprognum+mprognum2+mprognum3+mprognum4+mprognum5)/24*100)
  let spn = Math.round(sp)+'%'
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({MXC:spn}, {merge:true})
  
  
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
           window.location.href = '/dashboard/training/fiesta-mexico';
    
    }, 2000);
    
    }
    
        $('#userName2').html(name);
    }
  
    if(!!emaild) {
        $('#email').html(emaild);
    }} else {
      console.log('user logged out');
      signOutButton.style.display="none";
      if('/' != currentPath){location.href = '/login';}
      maincontent.style.display='none';
      loader.style.display='flex';
    }
  signOutButton.addEventListener('click', signout);
  document.querySelector('#mprognum').textContent = mprognum
  document.querySelector('#mprognum2').textContent = mprognum2
  document.querySelector('#mprognum3').textContent = mprognum3
  document.querySelector('#mprognum4').textContent = mprognum4
  document.querySelector('#mprognum5').textContent = mprognum5
  
  })})
  
  }
