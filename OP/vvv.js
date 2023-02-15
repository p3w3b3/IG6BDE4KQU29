
{
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
    stid = data['stid'].toUpperCase()
    name = data['Name'];
    let admin = data['admin'];
    let emaild = data['Email'];
    let prereq = data['prereq'];
    let lang = data["language"];
    let usc = data["uscontent"];
    
      
    

    if(admin === true){
    document.querySelector('#trackerbutton').style.display = 'flex'
    document.querySelector('#trackerbuttonmob').style.display = 'flex'
    }
      
    
    document.querySelector('#uscontent').textContent = usc
    document.querySelector('#languageselector').textContent = lang
    let profileuids = curUser.uid
    {
    window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "e84ncf6y",
    hide_default_launcher: false,
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
    document.querySelector('#userName').textContent = name
    document.querySelector('#userName2').textContent = name
    } else {
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({Name:user.displayName}, {merge:true})
    {
    setTimeout(() => {
    window.location.href = '/portal/dashboard'
    }, 2000);
    }
    document.querySelector('#userName').textContent = name
    document.querySelector('#userName2').textContent = name
    }
    
    {
    let firstletter = name.substring(0, 1)
    
    var fel = document.getElementsByClassName("firstletters");
    for(var i = 0; i < fel.length; i++)
    {
    fel[i].textContent = firstletter
    }
    
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
    
    let course18 = data['burgercourse1']
    let course19 = data['burgercourse2']
    let course20 = data['burgercourse3']
    
    if(course18 === true){
        document.querySelector('#brgr1-1').style.display = 'flex'
        document.querySelector('#brgr1-2').style.display = 'flex'
        } else {
        document.querySelector('#brgr1-1').style.display = 'none'
        document.querySelector('#brgr1-2').style.display = 'none'
        }
        
        if(course19 === true){
          document.querySelector('#brgr2-1').style.display = 'flex'
          document.querySelector('#brgr2-2').style.display = 'flex'
          } else {
          document.querySelector('#brgr2-1').style.display = 'none'
          document.querySelector('#brgr2-2').style.display = 'none'
          }
        
        if(course20 === true){
          document.querySelector('#brgr3-1').style.display = 'flex'
          document.querySelector('#brgr3-2').style.display = 'flex'
          } else {
          document.querySelector('#brgr3-1').style.display = 'none'
          document.querySelector('#brgr3-2').style.display = 'none'
          }
      
    let rtrue = data['rated'];
    if(rtrue === true) {
    document.querySelector('#npsdiv').style.display = 'none'
    } else {
    document.querySelector('#npsdiv').style.display = 'flex'
    }
    
    
    if(course1 == true){
    document.querySelector('#train1').style.display = 'flex'
    document.querySelector('#train11').style.display = 'flex'
    document.querySelector('#mbtraining2').style.display = 'flex'
    } else  {
    document.querySelector('#train1').style.display = 'none'
    document.querySelector('#train11').style.display = 'none'
    document.querySelector('#mbtraining2').style.display = 'none'
    }
    
    if(course2 == true){
    document.querySelector('#train22').style.display = 'flex'
    document.querySelector('#mbtraining1').style.display = 'flex'
    } else  {
    document.querySelector('#train22').style.display = 'none'
    document.querySelector('#mbtraining1').style.display = 'none'
    }
    
    if(course3 == true){
    document.querySelector('#mbtraining3').style.display = 'flex'
    document.querySelector('#train33').style.display = 'flex'
    } else  {
    document.querySelector('#mbtraining3').style.display = 'none'
    document.querySelector('#train33').style.display = 'none'
    }
    
    if(course4 == true){
    document.querySelector('#mbtraining4').style.display = 'flex'
    document.querySelector('#train44').style.display = 'flex'
    } else  {
    document.querySelector('#mbtraining4').style.display = 'none'
    document.querySelector('#train44').style.display = 'none'
    }
    
    if(course5 == true){
    document.querySelector('#mbtraining10').style.display = 'flex'
    document.querySelector('#train55').style.display = 'flex'
    } else  {
    document.querySelector('#mbtraining10').style.display = 'none'
    document.querySelector('#train55').style.display = 'none'
    }
    
    if(course6 == true){
    document.querySelector('#mbtraining11').style.display = 'flex'
    document.querySelector('#train66').style.display = 'flex'
    } else  {
    document.querySelector('#mbtraining11').style.display = 'none'
    document.querySelector('#train66').style.display = 'none'
    }
    
    if(course7 == true){
    document.querySelector('#mbfiesta').style.display = 'flex'
    document.querySelector('#train77').style.display = 'flex'
    } else  {
    document.querySelector('#mbfiesta').style.display = 'none'
    document.querySelector('#train77').style.display = 'none'
    }
    
    if(course8 == true){
    document.querySelector('#mbrebelrito').style.display = 'flex'
    document.querySelector('#train88').style.display = 'flex'
    } else  {
    document.querySelector('#mbrebelrito').style.display = 'none'
    document.querySelector('#train88').style.display = 'none'
    }
    
    if(course9 == true){
    document.querySelector('#mbnomnyam').style.display = 'flex'
    document.querySelector('#train99').style.display = 'flex'
    } else  {
    document.querySelector('#mbnomnyam').style.display = 'none'
    document.querySelector('#train99').style.display = 'none'
    }
    
    if(course10 == true){
    document.querySelector('#mblockednloaded').style.display = 'flex'
    document.querySelector('#train100').style.display = 'flex'
    } else  {
    document.querySelector('#mblockednloaded').style.display = 'none'
    document.querySelector('#train100').style.display = 'none'
    }
    
    if(course11 == true){
    document.querySelector('#mbclucknrun').style.display = 'flex'
    document.querySelector('#train111').style.display = 'flex'
    } else  {
    document.querySelector('#mbclucknrun').style.display = 'none'
    document.querySelector('#train111').style.display = 'none'
    }
    
    if(course12 == true){
    document.querySelector('#mbrealrito').style.display = 'flex'
    document.querySelector('#train122').style.display = 'flex'
    } else  {
    document.querySelector('#mbrealrito').style.display = 'none'
    document.querySelector('#train122').style.display = 'none'
    }
    
    if(course13 == true){
    document.querySelector('#train133').style.display = 'flex'
    document.querySelector('#mbktown').style.display = 'flex'
    } else  {
    document.querySelector('#train133').style.display = 'none'
    document.querySelector('#mbktown').style.display = 'none'
    }
    
    if(course14 == true){
    document.querySelector('#train144').style.display = 'flex'
    document.querySelector('#mbcbox').style.display = 'flex'
    } else  {
    document.querySelector('#train144').style.display = 'none'
    document.querySelector('#mbcbox').style.display = 'none'
    }
    
    if(course15 == true){
    document.querySelector('#sb02').style.display = 'flex'
    document.querySelector('#sb022').style.display = 'flex'
    } else  {
    document.querySelector('#sb02').style.display = 'none'
    document.querySelector('#sb022').style.display = 'none'
    }
    
    if(course16 == true){
    document.querySelector('#ml02').style.display = 'flex'
    document.querySelector('#ml022').style.display = 'flex'
    } else  {
    document.querySelector('#ml02').style.display = 'none'
    document.querySelector('#ml022').style.display = 'none'
    }
    
    if(course17 == true){
    document.querySelector('#sm02').style.display = 'flex'
    document.querySelector('#sm022').style.display = 'flex'
    } else  {
    document.querySelector('#sm02').style.display = 'none'
    document.querySelector('#sm022').style.display = 'none'
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
    document.querySelector('#email').textContent = emaild
    } else {
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({Email:user.email}, {merge:true})
    document.querySelector('#email').textContent = emaild
    }
    }})
    
    } else {
    console.log('user logged out');
    signOutButton.style.display="none";
    if('/' != currentPath){location.href = '/login';}
    maincontent.style.display='none';
    loader.style.display='flex';
    
    }})})}    
