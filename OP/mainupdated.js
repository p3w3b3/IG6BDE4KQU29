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
let stid = data['stid'].toUpperCase()
let name = data['Name'];
let emaild = data['Email'];
let prereq = data['prereq'];
let lang = data["language"];
let usc = data["uscontent"];

 // start

 let myselect = document.querySelector('#selectstid')

  while (myselect.options.length > 0) {                
  myselect.remove(0);
  }
  myselect.add(new Option('Select site',''));
 
 if(stid.includes(',')){
 let mys = stid.split(',')
 for (i = 0 ; i < mys.length; i++) {
 
 let docstid1 = myFS.doc("stids/" + mys[i])
 docstid1.get().then(docSnap => {
 let data2 = docSnap.data()
 let nm1 = data2['NAME']
 let sm1 = data2['STID']
 myselect.add(new Option(nm1,sm1));
})}
setTimeout(() => {
document.querySelector('.finishedloading').textContent = '1'
}, 1000);
}
 
 if(stid !== '*' && !stid.includes(',')) {

 let docstid2 = myFS.doc("stids/" + stid)
 docstid2.get().then(docSnap => {
 let data3 = docSnap.data()
 let nm2 = data3['NAME']
 let sm2 = data3['STID']
 myselect.add(new Option(nm2,sm2));
setTimeout(() => {
document.querySelector('.finishedloading').textContent = '1'
}, 1000);
})

}
 
 if(stid === '*'){
 myFS.collection("stids").get().then((docSnap) => {
 docSnap.forEach((doc) => {
 let data4 = doc.data()
 let nm3 = data4['NAME']
 let sm3 = data4['STID']
 myselect.add(new Option(nm3,sm3));
 })})
setTimeout(() => {
document.querySelector('.finishedloading').textContent = '1'
}, 1000);
 }

 //finnish
if(stid === 'finnish'){
    myFS.collection("stids").get().then((docSnap) => {
    docSnap.forEach((doc) => {
    let data4 = doc.data()
    let nm3 = data4['NAME']
    let sm3 = data4['STID']
    let cntry = data4['language']
if(cntry = 'finnish'){
    myselect.add(new Option(nm3,sm3));
  }})})
   setTimeout(() => {
   document.querySelector('.finishedloading').textContent = '1'
   }, 1000);
    }


//swedish
if(stid === 'swedish'){
    myFS.collection("stids").get().then((docSnap) => {
    docSnap.forEach((doc) => {
    let data4 = doc.data()
    let nm3 = data4['NAME']
    let sm3 = data4['STID']
    let cntry = data4['language']
if(cntry = 'swedish'){
    myselect.add(new Option(nm3,sm3));
  }})})
   setTimeout(() => {
   document.querySelector('.finishedloading').textContent = '1'
   }, 1000);
    }


//czech
 if(stid === 'czech'){
    myFS.collection("stids").get().then((docSnap) => {
    docSnap.forEach((doc) => {
    let data4 = doc.data()
    let nm3 = data4['NAME']
    let sm3 = data4['STID']
    let cntry = data4['language']
if(cntry = 'czech'){
    myselect.add(new Option(nm3,sm3));
  }})})
   setTimeout(() => {
   document.querySelector('.finishedloading').textContent = '1'
   }, 1000);
    }

//hungary
if(stid === 'hungary'){
    myFS.collection("stids").get().then((docSnap) => {
    docSnap.forEach((doc) => {
    let data4 = doc.data()
    let nm3 = data4['NAME']
    let sm3 = data4['STID']
    let cntry = data4['language']
if(cntry = 'hungary'){
    myselect.add(new Option(nm3,sm3));
  }})})
   setTimeout(() => {
   document.querySelector('.finishedloading').textContent = '1'
   }, 1000);
    }

// end
  
 
 
 

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




window.addEventListener('load', (event) => {
var interval = setInterval(function() {
let pagload = document.querySelector('.finishedloading').textContent
var itemcount = document.querySelectorAll('.userinfo').length
if (pagload === '1' && itemcount>900) {
       document.querySelector('.loadingnewportal').style.display = 'none'
       clearInterval(interval);
        function selectup() {
        $('#selectstid').selectize({ 
        onInitialize: function() {
        this.trigger('change', true);
        document.querySelector('#selectstid').style.display = 'flex'
        },
        onChange: function() {
        contentvis()
        donutcharts()
        updatecharts()
        updatedata()
        updatedata2()
        updatedata4()
        updatedata5()
        updatedata6()
        invoices1()
        invoices2()
        ordernum1()
        ordernum2()
        updaterating()
        ratinglength()      
        checkspot()
setTimeout(() => {
checkdonuts()
}, "2500")
        }})}

        selectup()   
}
}, 1000);

})


