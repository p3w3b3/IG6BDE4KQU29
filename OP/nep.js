{
    const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q"
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
    let name = data['Name'];
    let admin = data['admin'];
    let emaild = data['Email'];
    
    if(admin === true){
    document.querySelector('#trackerbutton').style.display = 'flex'
    document.querySelector('#trackerbuttonmob').style.display = 'flex'
    }
    
    let myselect = document.querySelector('#selectstid')
    
    while (myselect.options.length > 0) {
    myselect.remove(0);
    }
    myselect.add(new Option('Select site',''));
    
    if(stid !== ''){
    async function getstid() {
    try {
    const response = await fetch('https://x828-xess-evjx.n7.xano.io/api:7Fnlue2C:v1/partner?uid=STG7034168',{
    headers: {
    'Content-type' : 'application/json'
    }
    });
    const data = await response.json();
    if (!response.ok) {
    throw new Error(data.message);
    }
    if(data !== null){
    console.log(data)
    
    myselect.add(new Option(data['name'],data['uid']));
        
    }
    
    } catch (error) {
    console.error(error);
    }}
    
    getstid()
    
    
    setTimeout(() => {
    document.querySelector('.finishedloading').textContent = '1'
    }, 1000);
    
    }
    
    
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
    
