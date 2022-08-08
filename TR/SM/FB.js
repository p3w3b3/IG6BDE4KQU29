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
  let prognumsm = 0
  
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
      let sm1p1 = data['sm1p1'];    
  
  mixpanel.init('34ab50f7acd413779598bfe06a25b8c3', {debug: true}); 

      $(".section1selection").css("background-color", "white");
      $(".section1div").hide();
      $("#sm1p1video").show();
      $("#sm1p1button").css("background-color", "#e7edf0");
  
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
  if(!!restaurant) {
  document.querySelector('#profile-restaurant').textContent=restaurant;
  } else {document.querySelector('#profile-restaurant').textContent='-';} 
  
      if( sm1p1 == true) {
  $('#sm1p1').hide()
  $('#sm1p1x').show()
  prognumsm++
  }
  
  let sp =((prognumsm)/1*100)
  let spn = Math.round(sp)+'%'
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({sammies:spn}, {merge:true})
  
  
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
           window.location.href = '/dashboard/training/sammies';
    
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
  document.querySelector('#prognumsm').textContent = prognumsm
  
  })})
  
  }
  
