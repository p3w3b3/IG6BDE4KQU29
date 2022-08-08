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
document.getElementById("retake-k1").addEventListener("click", () => {
  $("#k1-quiz").css("display", "flex");
  $("#k1-quiz-completed").hide();
});

document.getElementById("retake-k3").addEventListener("click", () => {
  $("#k3-quiz").css("display", "flex");
  $("#k3-quiz-completed").hide();
});

document.getElementById("retake-k4").addEventListener("click", () => {
  $("#k4-quiz").css("display", "flex");
  $("#k4-quiz-completed").hide();
});

document.getElementById("retake-k6").addEventListener("click", () => {
  $("#k6-quiz").css("display", "flex");
  $("#k6-quiz-completed").hide();
});


    $(".section1selection").css("background-color", "white");
    $(".section1div").hide();
    $("#k1p1video").show();
    $("#k1p1button").css("background-color", "#e7edf0");

    
    
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const authChanged = firebase.auth().onAuthStateChanged(user =>{
    let kprognum = 0
    let kprognum2 = 0
    let kprognum3 = 0
    let kprognum4 = 0
    let kprognum5 = 0
    let kprognum6 = 0
    let kprognum7 = 0

    
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
          let emaild = data['Email']; 
                let firstletter = name.substring(0, 1)
            $('.firstletter').html(firstletter);
        let k1p1 = data['k1p1'];    
        let k1p2 = data['k1p2'];    
        let k1p3 = data['k1p3'];    
        let k1p4 = data['k1p4']; 
         
        let k2p1 = data['k2p1'];    
        let k2p2 = data['k2p2'];    
        let k2p3 = data['k2p3'];        
        let k2p4 = data['k2p4']; 
        let k3p1 = data['k3p1'];    
        let k3p2 = data['k3p2']; 
        let k3p3 = data['k3p3'];    
        let k3p4 = data['k3p4']; 
        let k3p5 = data['k3p5'];    
        let k3p6 = data['k3p6'];    
        let k4p1 = data['k4p1']; 
        let k4p2 = data['k4p2']; 
        let k4p3 = data['k4p3'];  
        let k5p1 = data['k5p1'];  
        let k6p1 = data['k6p1']; 
        let k6p2 = data['k6p2']; 
        let k6p3 = data['k6p3']; 
        let k6p4 = data['k6p4']; 
        let k6p5 = data['k6p5']; 
    
        let k7p1 = data['k7p1']; 
        let k7p2 = data['k7p2']; 
        let k7p3 = data['k7p3']; 
        let k7p4 = data['k7p4']; 
        let k7p5 = data['k7p5']; 

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


     let restaurant = data['Restaurant']; 
      let quiz1 = data['k2p4']; 
      let quiz3 = data['k3p6']; 
      let quiz4 = data['k4p3']; 
      let quiz6 = data['k6p5']; 
      let curUser = firebase.auth().currentUser;
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

if(!!quiz1) {
$('#k1-quiz').hide()
$('#k1-quiz-completed').css("display", "flex");
}

if(!!quiz3) {
$('#k3-quiz').hide()
$('#k3-quiz-completed').css("display", "flex");
}

if(!!quiz4) {
$('#k4-quiz').hide()
$('#k4-quiz-completed').css("display", "flex");
}

if(!!quiz6) {
$('#k6-quiz').hide()
$('#k6-quiz-completed').css("display", "flex");
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
          
        if( k1p1 == true) {
    $('#k1p1').hide()
    $('#k1p1x').show()
    kprognum++
    }
        if( k1p2 == true) {
    $('#k1p2').hide()
    $('#k1p2x').show()
    kprognum++
    }
    
        if( k1p3 == true) {
    $('#k1p3').hide()
    $('#k1p3x').show()
    kprognum++
    }
    
        if( k1p4 == true) {
    $('#k1p4').hide()
    $('#k1p4x').show()
    kprognum++
    }
    
        if( k2p1 == true) {
    $('#k2p1').hide()
    $('#k2p1x').show()
    kprognum2++
    }
        if( k2p2 == true) {
    $('#k2p2').hide()
    $('#k2p2x').show()
    kprognum2++
    }
        if( k2p3 == true) {
    $('#k2p3').hide()
    $('#k2p3x').show()
    kprognum2++
    }
    
        if( k2p4 == true) {
    $('#k2p4').hide()
    $('#k2p4x').show()
    kprognum2++
    }
    
        if( k3p1 == true) {
    $('#k3p1').hide()
    $('#k3p1x').show()
    kprognum3++
    }
        if( k3p2 == true) {
    $('#k3p2').hide()
    $('#k3p2x').show()
    kprognum3++
    }
        if( k3p3 == true) {
    $('#k3p3').hide()
    $('#k3p3x').show()
    kprognum3++
    }
        if( k3p4 == true) {
    $('#k3p4').hide()
    $('#k3p4x').show()
    kprognum3++
    }
        if( k3p5 == true) {
    $('#k3p5').hide()
    $('#k3p5x').show()
    kprognum3++
    }
        if( k3p6 == true) {
    $('#k3p6').hide()
    $('#k3p6x').show()
    kprognum3++
    }
        if( k4p1 == true) {
    $('#k4p1').hide()
    $('#k4p1x').show()
    kprognum4++
    }
        if( k4p2 == true) {
    $('#k4p2').hide()
    $('#k4p2x').show()
    kprognum4++
    }
        if( k4p3 == true) {
    $('#k4p3').hide()
    $('#k4p3x').show()
    kprognum4++
    }
    
        if( k5p1 == true) {
    $('#k5p1').hide()
    $('#k5p1x').show()
    kprognum5++
    }
        if( k6p1 == true) {
    $('#k6p1').hide()
    $('#k6p1x').show()
    kprognum6++
    }
        if( k6p2 == true) {
    $('#k6p2').hide()
    $('#k6p2x').show()
    kprognum6++
    }
        if( k6p3 == true) {
    $('#k6p3').hide()
    $('#k6p3x').show()
    kprognum6++
    }
        if( k6p4 == true) {
    $('#k6p4').hide()
    $('#k6p4x').show()
    kprognum6++
    }
        if( k6p5 == true) {
    $('#k6p5').hide()
    $('#k6p5x').show()
    kprognum6++
    }
    
    
        if( k7p1 == true) {
    $('#k7p1').hide()
    $('#k7p1x').show()
    kprognum7++
    }
    
        if( k7p2 == true) {
    $('#k7p2').hide()
    $('#k7p2x').show()
    kprognum7++
    }
          
        if( k7p3 == true) {
    $('#k7p3').hide()
    $('#k7p3x').show()
    kprognum7++
    }
    
       if( k7p4 == true) {
    $('#k7p4').hide()
    $('#k7p4x').show()
    kprognum7++
    }
          
        if( k7p5 == true) {
    $('#k7p5').hide()
    $('#k7p5x').show()
    kprognum7++
    }
          
    let sp =((kprognum+kprognum2+kprognum3+kprognum4+kprognum5+kprognum6+kprognum7)/28*100)
    let spn = Math.round(sp)+'%'
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
      .set({KTOWN:spn}, {merge:true})
    
    
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
             window.location.href = '/dashboard/training/k-town';
      
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
    document.querySelector('#kprognum').textContent = kprognum
    document.querySelector('#kprognum2').textContent = kprognum2
    document.querySelector('#kprognum3').textContent = kprognum3
    document.querySelector('#kprognum4').textContent = kprognum4
    document.querySelector('#kprognum5').textContent = kprognum5
    document.querySelector('#kprognum6').textContent = kprognum6
    document.querySelector('#kprognum7').textContent = kprognum7
    
    })})
    
    }
    
    
    
    {
    document.getElementById('k1-quiz').addEventListener('submit', function() {
    
    let k1q1 = document.querySelector('#k1-quiz-1').value == 'correct'
    let k1q2 = document.querySelector('#k1-quiz-2').value == 'correct'
    let k1q3 = document.querySelector('#k1-quiz-3').value == 'correct'
    let k1q4 = document.querySelector('#k1-quiz-4').value == 'correct'
    let k1q5 = document.querySelector('#k1-quiz-5').value == 'correct'
    let k1q6 = document.querySelector('#k1-quiz-6').value == 'correct'
    let k1q7 = document.querySelector('#k1-quiz-7').value == 'correct'
    
    
    let percentage = 0
    if(k1q1) { percentage++}
    if(k1q2) { percentage++}
    if(k1q3) { percentage++}
    if(k1q4) { percentage++}
    if(k1q5) { percentage++}
    if(k1q6) { percentage++}
    if(k1q7) { percentage++}
    
    let correct = Math.round((percentage * 14.28))
    document.getElementById('k1p5percentage').textContent = correct+'%'
    
    if(k1q1 && k1q2 && k1q3 && k1q4 && k1q5 && k1q6 && k1q7 ) {
    $('#k1-quiz-incorrect').hide()
    $('#k1-quiz-correct').css("display", "flex");
    $('#k2p4x').show()
    $('#k2p4').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k2p4:true},{merge:true})
    
    let kprognum2 = 0
    if (document.querySelector('#k2p4x').style.display == 'block'){kprognum2++}
    if (document.querySelector('#k2p2x').style.display == 'block'){kprognum2++}
    if (document.querySelector('#k2p3x').style.display == 'block'){kprognum2++}
    if (document.querySelector('#k2p4x').style.display == 'block'){kprognum2++}
    document.querySelector('#kprognum2').textContent = kprognum2
    
    }
    
    else {
    $('#k1-quiz-incorrect').css("display", "flex");
    $('#k1-quiz-correct').hide()
    }
    
    })
    }
    
    
    {
    document.getElementById('k3-quiz').addEventListener('submit', function() {
    
    let k3q1 = document.querySelector('#k3-quiz-1').value == 'correct'
    let k3q2 = document.querySelector('#k3-quiz-2').value == 'correct'
    let k3q3 = document.querySelector('#k3-quiz-3').value == 'correct'
    let k3q4 = document.querySelector('#k3-quiz-4').value == 'correct'
    let k3q5 = document.querySelector('#k3-quiz-5').value == 'correct'
    let k3q6 = document.querySelector('#k3-quiz-6').value == 'correct'
    
    
    let percentage = 0
    if(k3q1) { percentage++}
    if(k3q2) { percentage++}
    if(k3q3) { percentage++}
    if(k3q4) { percentage++}
    if(k3q5) { percentage++}
    if(k3q6) { percentage++}
    let correct = Math.round((percentage * 16.66))
    document.getElementById('k3p6percentage').textContent = correct+'%'
    
    if(k3q1 && k3q2 && k3q3 && k3q4 && k3q5 && k3q6 ) {
    $('#k3-quiz-incorrect').hide()
    $('#k3-quiz-correct').css("display", "flex");
    $('#k3p6x').show()
    $('#k3p6').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k3p6:true},{merge:true})
    
    let kprognum3 = 0
    if (document.querySelector('#k3p1x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p2x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p3x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p4x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p5x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p6x').style.display == 'block'){kprognum3++}
    document.querySelector('#kprognum3').textContent = kprognum3
    
    }
    
    else {
    $('#k3-quiz-incorrect').css("display", "flex");
    $('#k3-quiz-correct').hide()
    console.log('incorrect')
    }
    
    })
    
    }
    
    
    {
    document.getElementById('k4-quiz').addEventListener('submit', function() {
    
    let k4q1 = document.querySelector('#k4-quiz-1').value == 'correct'
    let k4q2 = document.querySelector('#k4-quiz-2').value == 'correct'
    let k4q3 = document.querySelector('#k4-quiz-3').value == 'correct'
    let k4q4 = document.querySelector('#k4-quiz-4').value == 'correct'
    let k4q5 = document.querySelector('#k4-quiz-5').value == 'correct'
    let k4q6 = document.querySelector('#k4-quiz-6').value == 'correct'
    
    let percentage = 0
    if(k4q1) { percentage++}
    if(k4q2) { percentage++}
    if(k4q3) { percentage++}
    if(k4q4) { percentage++}
    if(k4q5) { percentage++}
    if(k4q6) { percentage++}
    let correct = Math.round((percentage * 16.66))
    document.getElementById('k4p3percentage').textContent = correct+'%'
    
    if(k4q1 && k4q2 && k4q3 && k4q4 && k4q5 && k4q6 ) {
    $('#k4-quiz-incorrect').hide()
    $('#k4-quiz-correct').css("display", "flex");
    $('#k4p3x').show()
    $('#k4p3').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k4p3:true},{merge:true})
    
    let kprognum4 = 0
    if (document.querySelector('#k4p1x').style.display == 'block'){kprognum4++}
    if (document.querySelector('#k4p2x').style.display == 'block'){kprognum4++}
    if (document.querySelector('#k4p3x').style.display == 'block'){kprognum4++}
    document.querySelector('#kprognum4').textContent = kprognum4
    
    }
    
    else {
    $('#k4-quiz-incorrect').css("display", "flex");
    $('#k4-quiz-correct').hide()
    }
    
    })
    }
    
    
    
    {
    document.getElementById('k6-quiz').addEventListener('submit', function() {
    
    let k6q1 = document.querySelector('#k6-quiz-1').value == 'correct'
    let k6q2 = document.querySelector('#k6-quiz-2').value == 'correct'
    let k6q3 = document.querySelector('#k6-quiz-3').value == 'correct'
    let k6q4 = document.querySelector('#k6-quiz-4').value == 'correct'
    let k6q5 = document.querySelector('#k6-quiz-5').value == 'correct'
    let k6q6 = document.querySelector('#k6-quiz-6').value == 'correct'
    let k6q7 = document.querySelector('#k6-quiz-7').value == 'correct'
    
    let percentage = 0
    if(k6q1) { percentage++}
    if(k6q2) { percentage++}
    if(k6q3) { percentage++}
    if(k6q4) { percentage++}
    if(k6q5) { percentage++}
    if(k6q6) { percentage++}
    if(k6q7) { percentage++}
    let correct = Math.round((percentage * 14.28))
    document.getElementById('k6p5percentage').textContent = correct+'%'
    
    if(k6q1 && k6q2 && k6q3 && k6q4 && k6q5 && k6q6 && k6q7) {
    $('#k6-quiz-incorrect').hide()
    $('#k6-quiz-correct').css("display", "flex");
    $('#k6p5x').show()
    $('#k6p5').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k6p5:true},{merge:true})
    
    let kprognum6 = 0
    if (document.querySelector('#k6p1x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p2x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p3x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p4x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p5x').style.display == 'block'){kprognum6++}
    document.querySelector('#kprognum6').textContent = kprognum6
    
    }
    
    else {
    $('#k6-quiz-incorrect').css("display", "flex");
    $('#k6-quiz-correct').hide()
    }
    
    })
    }
    
