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
    let name = data['Name'];
    let admin = data['admin'];
    let emaild = data['Email'];
    
//if(stid !== location.href.split('/operations/')[1].toUpperCase()){
//location.href = 'https://portal.peckwaterbrands.com/operations/'+stid.toLowerCase() 
//}
        
        
        
stidfinished = false

async function stidsfetch() {
try {
const response = await fetch('https://x828-xess-evjx.n7.xano.io/api:7Fnlue2C:v1/new_normal_stid',{
headers: {
'Content-type' : 'application/json'
}
});
const data = await response.json();
if (!response.ok) {
throw new Error(data.message);
}
if(data !== null){
for (let i = 0; i < data.length; i++) {
document.querySelector('#selectstid').add(new Option(data[i].name,data[i].uid))
}
stidfinished = true
}
} catch (error) {
console.error(error);
}}

async function stidsfetchspecific(stid) {
try {
const response = await fetch('https://x828-xess-evjx.n7.xano.io/api:7Fnlue2C:v1/new_normal_stid_specific?stid='+stid,{
headers: {
'Content-type' : 'application/json'
}
});
const data = await response.json();
if (!response.ok) {
throw new Error(data.message);
}
if(data !== null){
for (let i = 0; i < data.length; i++) {
document.querySelector('#selectstid').add(new Option(data[i].name,data[i].uid))
}
stidfinished = true
}
} catch (error) {
console.error(error);
}}

async function getbympid(mpid) {
try {
const response = await fetch('https://x828-xess-evjx.n7.xano.io/api:7Fnlue2C:v1/new_normal?mpid='+mpid,{
headers: {
'Content-type' : 'application/json'
}
});
const data = await response.json();
if (!response.ok) {
throw new Error(data.message);
}
if(data !== null){
for (var i = 0; i < data.length; i++) {
myselect.add(new Option(data[i].name,data[i].uid));
}
stidfinished = true
}
} catch (error) {
console.error(error);
}}

if(stid === '*'){
stidsfetch()
} 

if(stid.includes(',')){
let mys = stid.split(',')
for (i = 0 ; i < mys.length; i++) {
stidsfetchspecific(mys[i])
}}

if(stid !== 'FINLAND' && stid !== 'CZECH' && stid !== 'HUNGARY' && stid !== 'SWEDEN' && stid !== '*' && !stid.includes(',')) {
stidsfetchspecific(stid)
}

if(stid === 'FINLAND'){
getbympid('FI')
}

if(stid === 'SWEDEN'){
getbympid('SE')
}

if(stid === 'CZECH'){
getbympid('CZ')
}

if(stid === 'HUNGARY'){
getbympid('HU')
}

        

let cstid = location.href.split('/operations/')[1]
var intervals= setInterval(function() {
if(stidfinished === true){
try {
$('#selectstid').selectize({ 
onInitialize: function() {
this.trigger('change', true);
document.querySelector('#selectstid').style.display = 'flex'
},
onChange: function() {
const stidselect = document.querySelector('#selectstid').value.toLowerCase()
if(cstid !== stidselect){
location.replace('https://portal.peckwaterbrands.com/operations/'+stidselect)
}}})

clearInterval(intervals);
} catch (error) {

}}})


    const width = window.innerWidth;
        
    if(admin === true && width>992){
    document.querySelector('#trackerbutton').style.display = 'flex'
    } else if(admin === true && width<992){
    document.querySelector('#trackerbuttonmob').style.display = 'flex'
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
 
    let profileuid = curUser.uid

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
    

    document.querySelector('#profile-uid').textContent=profileuid;
    document.querySelector('#profile-name').textContent=name;
    document.querySelector('#profile-email').textContent=emaild;
    
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
    
