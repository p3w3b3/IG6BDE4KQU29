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
        language = data["language"];
        let name = data['Name'];
        let admin = data['admin'];
        let emaild = data['Email'];

            
            
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
    
    
    const options = []
    const mys = stid.split(',')
    document.querySelectorAll('#selectstid > option').forEach((option) => {
    if (options.includes(option.value)) option.remove()
    else options.push(option.value)
    }) 
        
    if(options.length>mys.length){
    stidfinished = true
    }
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
    document.querySelector('#selectstid').add(new Option(data[i].name,data[i].uid));
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
    document.querySelector('#selectstid').style.display = 'none'
    document.querySelector('.loadingstid').style.display = 'none'
    },
    onChange: function() {
    const stidselect = document.querySelector('#selectstid').value.toLowerCase()
    if(cstid !== stidselect && stidselect !== ''){
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
        
        }})})
        
    
    let hungarr = ['Vezérlőpult','Bevétel','Mérőszámok','Elkészítési idő','Nyitvatartási idő','Múlt hét','Előző hét','Múlt hét','Múlt hét','Múlt hét','Heti célok','Értékelés','Felkészülési idő','Egymást követő hetek','A hét megjegyzése','Promóció','Promóció','Promóció','Intézkedés','Megjegyzés','Akció','Hívás dátuma','Hívás foglalása','Megjegyzés','Akció','Megjegyzés','Akció','Megjegyzés','Akció','Megjegyzés','Akció','Megjegyzés','Akció','Promóció','Intézkedés','Promóció','Promóció','Képzett csapattagok','Múlt heti bruttó értékesítés','Értékelési ranglista','Ertékesítés','Értékelési','Aktuális hét','Múlt hét','Különbség','Ertékesítés','Értékelési','Értékelési ranglista','Nyitvatartási idő módosítása','Típus','Időkeret','Nap','Nyitás (reggel)','Zárás (reggel)','Nyitás (este)','Zárás (este)','Zárva','Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap','Visszatérítés visszautasítása','Platform','Márka','Párttag','Ok','Megrendelés azonosítója','Megrendelés dátuma','Megrendelés ideje','Bizonyíték','Értékesítés','Értékesítés','Értékesítés','Megrendelés','Eddig','Múlt hónap','Eddig','Eddig','Dátum','Referencia','Értékesítés','PWB Díj + áfa','Módosítások','Fizetve','Számlamenedzser','Ha további segítségre van szükséged, kérjük, vedd fel velünk a kapcsolatot a chat funkció használatával','Kiemelt promóciók','Peckwater Kezelt kampányok','Nem szeretnél részt venni a kampányban, vagy kérdésed van?','Vezérlőpult','Az én éttermem','Analitika','Képzés','Kontakt','Értékesítés','Vezérlőpult','Ranglisták','Az én étterem','Analitika','Képzés','Kontakt','Értékesítés','Profil','Kijelentkezés','Vezérlőpult','Vezérlőpult','Heti célok','Visszacsatolás','Az én étterem','Analitika','Képzés','Kontakt','Ranglisták','Visszatérítések','Nyitvatartási idő','Teljesítmény','Számlákat','Kampányok','Kontakt','Kontakt','Hozzáadása','Saját adatok','Étterem','Név','E-mail cím']
    if(language === 'hungarian'){
        for (i = 0 ; i < hungarr.length; i++) {
            if ($('#itemt-'+i).length){
        document.getElementById('itemt-'+i).textContent = hungarr[i]
        }}
    
        document.getElementById('intercom-url').textContent = 'kattints ide'
        
        document.getElementById('ops1').textContent = 'Vezérlőpult'
        document.getElementById('ops2').textContent = 'Ranglisták'
        document.getElementById('ops3').textContent = 'Üzleti műveletek'
        document.getElementById('ops4').textContent = 'Fiókok'
        document.getElementById('ops-in').textContent = 'Teljesítmény mutatók'
        document.getElementById('ops5').textContent = 'Kontakt'
        document.getElementById('marketingops').textContent = 'Kampányok'
        document.getElementById('profiledesk').textContent = 'Profil'
        document.getElementById('signOutButton').textContent = 'Kijelentkezés'
        document.getElementById('ra3').textContent = 'Elérése'
        document.getElementById('ra2').textContent = 'Az Elérés alatt'
        document.getElementById('ra1').textContent = 'Nem érik el'
        document.getElementById('pa3').textContent = 'Elérése'
        document.getElementById('pa2').textContent = 'Az Elérés alatt'
        document.getElementById('pa1').textContent = 'Nem érik el'
        document.getElementById('act1').textContent = 'Hozzáadása'
        document.getElementById('act2').textContent = 'Hozzáadása'
        document.getElementById('act3').textContent = 'Hozzáadása'
        document.getElementById('act4').textContent = 'Hozzáadása'
        document.getElementById('act5').textContent = 'Hozzáadása'
        document.getElementById('act6').textContent = 'Hozzáadása'
    
    
    
    document.getElementById('Type').options[1].text = 'Mindkét';
    document.getElementById('Type').options[3].text = 'Natív márka'
    
    document.getElementById('Timeframe').options[1].text = 'Ideiglenes';
    document.getElementById('Timeframe').options[2].text = 'Állandó';
    
    document.getElementById('cf3').options[1].text = 'Vevő';
    document.getElementById('cf3').options[2].text = 'Sofőr';
        
    document.getElementById('cf4').options[1].text = 'Késett a megrendelés beszerzése (több mint 15 percet)';
    document.getElementById('cf4').options[2].text = 'Lemondott megrendelés';
    document.getElementById('cf4').options[3].text = 'Nem érkezett meg';
    document.getElementById('cf4').options[4].text = 'Egyéb';
    
    document.getElementById('Type').options[1].text = 'Oba';
    document.getElementById('Type').options[3].text = 'Nativní značka'
    
    document.getElementById('Timeframe').options[1].text = 'Dočasný';
    document.getElementById('Timeframe').options[2].text = 'Trvalý';
    
    document.getElementById('cf3').options[1].text = 'Zákazník';
    document.getElementById('cf3').options[2].text = 'Šofér';
        
    document.getElementById('cf4').options[1].text = 'Byl pozdě na vyzvednutí objednávky (přes 15 min)'
    document.getElementById('cf4').options[2].text = 'Zrušená objednávka';
    document.getElementById('cf4').options[3].text = 'Neobjevil se'
    document.getElementById('cf4').options[4].text = 'Jiné';
        
    
        $('.submit-opse').text('Beküldés')
        document.getElementById('submitbutt').value = 'Beküldés'
        document.getElementById('sub-butt').value = 'Beküldés'
    
    
        const compl = document.querySelectorAll('.complete');
        compl.forEach(comple => {
        comple.innerHTML = 'Elkészült';
        });
    
        }
    
    let czecharr = ['Přehled','Promo akce','Hodnocení','Čas přípravy','Online čas','Minulý týden','Týden předtím','Minulý týden','Minulý týden','Minulý týden','Týdenní cíle','Hodnocení','Čas přípravu','Po sobě jdoucí týdny','Komentář týdne','Prémie','Prémie','Prémie','Sankce','Komentář','Akce','Další hovor','Rezervovat hovor','Komentář','Akce','Komentář','Akce','Komentář','Akce','Komentář','Akce','Komentář','Akce','Prémie','Sankce','Prémie','Prémie','Vyškolení členové týmu','Tržby profilů - pořadí','Tržba a hodnocení','Tržba','Hodnocení','Tento týden','Minulý týden','Změnit částku','Tržba','Hodnocení','Hodnocení profilů - pořadí','Změnit provozní dobu','Značka','Časové okno','Den','Otevřeno (ráno)','Zavřít (ráno)','Otevřeno (večer)','Zavřít (večer)','Zavřeno','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota','Neděle','Refundace objednávek','Plošina','Značka','Clen strany','Důvod','Číslo objednávky','Datum objednávky','Čas objednávky','Důkaz','Tržba','Tržba','Tržba','Objednávky','Měsíc k dnešnímu dni','Minulý měsíc','Od startu profilu','Od startu profilu','Datum','Referenční číslo','Tržba','PWB Poplatek + hovor','Dodatky','Částka vyplacená','Operations Manažer','Pro jakoukoli další podporu prosím použijte funkci chatové podpory','PPromo akce na:','Peckwater Spravované kampaně','Chcete se odhlásit z kampaně nebo máte otázku?','Přehled profilu','Moje restaurace','Statistiky','Zaškolení','Kontakt','Promo akce','Marketing','Přehled profilu','Moje restaurace','Statistiky','Zaškolení','Kontakt','Marketing','Profil','Odhlásit','Přehled profilu','Přehled profilu','Cíle','Zpětná vazba','Moje restaurace','Statistiky','Zaškoleníc','Kontakt','Marketing','Otevírací doba','Náhrady','Otevírací doba','Výkon','Faktury','Marketing','Kontakt','Komentovat','Moje informace','Restaurace','Jméno','E-Mail']
    
    if(language === 'czech'){
        for (i = 0 ; i < czecharr.length; i++) {
            if ($('#itemt-'+i).length){
        document.getElementById('itemt-'+i).textContent = czecharr[i]
        }}
    
        document.getElementById('intercom-url').textContent = 'klikněte zde'
        
        document.getElementById('ops1').textContent = 'Přehled profilu'
        document.getElementById('ops2').textContent = 'Promo akce'
        document.getElementById('ops3').textContent = 'Správa profilu'
        document.getElementById('ops4').textContent = 'Tržba a faktury'
        document.getElementById('ops-in').textContent = 'Statistiky'
        document.getElementById('ops5').textContent = 'Kontakt'
        document.getElementById('marketingops').textContent = 'Kampaň'
        document.getElementById('profiledesk').textContent = 'Profil'
        document.getElementById('signOutButton').textContent = 'Odhlášení'
        document.getElementById('ra3').textContent = 'Dosažení'
        document.getElementById('ra2').textContent = 'Nedosahování'
        document.getElementById('ra1').textContent = 'Nedosažení'
        document.getElementById('pa3').textContent = 'Dosažení'
        document.getElementById('pa2').textContent = 'Nedosahovánít'
        document.getElementById('pa1').textContent = 'Nedosažení'
        document.getElementById('act1').textContent = 'Komentovat'
        document.getElementById('act2').textContent = 'Komentovat'
        document.getElementById('act3').textContent = 'Komentovat'
        document.getElementById('act4').textContent = 'Komentovat'
        document.getElementById('act5').textContent = 'Komentovat'
        document.getElementById('act6').textContent = 'Komentovat'
        
        document.getElementById('nps1').textContent = 'Jak byste ohodnotili vaší zkušenost s Peckwater Brands?'
        document.querySelector('.glr-horizontal-launcher__text').textContent = 'Podpora'
    
    
        $('.submit-opse').text('Předložit')
        document.getElementById('submitbutt').value = 'Předložit'
        document.getElementById('sub-butt').value = 'Předložit'
        const compl = document.querySelectorAll('.complete');
        compl.forEach(comple => {
        comple.innerHTML = 'Dokončeno';
        });
    
    }
    
    let finarr = ['Kojelauta','Ravintolani','Mittarit','Valm. aika','Käytettävyys','Tämä viikko','Edellinen viikko','Edellinen viikko','Edellinen viikko','Edellinen viikko','Viikoittaiset tavoitteet','Luokitus','Valmistusaika','Peräkkäiset viikot','Kommenti','Palkinto','Palkinto','Palkinto','Sanktio','Kommenti','Tehtävä','Tuleva puhelu','Varaa puhelu','Kommenti','Tehtävä','Kommenti','Tehtävä','Kommenti','Tehtävä','Kommenti','Tehtävä','Kommenti','Tehtävä','Palkinto','Sanktio','Palkinto','Palkinto','Koulutetut Jäsenet','Viimeisen viikon bruttomyynnit','Sinun sijoituksesi','Bruttomyynnit','Arviointi','Kuluva viikko','Edellinen viikko','Muutos','Myynnit','Arvio','Ranking lista','Muuta aukioloaikaa','Brändi','Muutoksen pysyvyys','Päivä','Aukeaa (Aamu)','Sulkeutuu (Aamu)','Aukeaa (Ilta)','Sulkeutuu (Ilta)','Suljettu','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai','Sunnuntai','Haasteen hyvitys','Alusta','Brändi','Henkilö','Syy','Tilausnumero','Tilauksen pvm','Tilausaika','Todiste','Brutto myynnit','Brutto myynnit','Brutto myynnit','Tilaukset','Kuukausi tähän päivään asti','Viimeinen kuukausi','Kaikkien aikojen','Kaikkien aikojen','Pvm','Viite','Brutto myynnit','PWB maksu + alv','Muutokset','Maksettu','Tilin johtaja','Jos tarvitset lisätukea, käytä chat-tukiominaisuutta.','Kampanjat','Peckwaterin hallitsemat kampanjat','Haluatko lopettaa kampanjan tilauksen tai sinulla on muuta kysyttävää?','Kojelauta','Oma ravintola','Analytiikka','Kurssit','Ota yhteyttä','Markkinointi','Kojelauta','Tulostaulukko','Oma ravintola','Analytiikka','Kurssit','Ota yhteyttä','Markkinointi','Profiili','Kirjaudu ulos','Kojelauta','Kojelauta','Tavoitteet','Palaute','Oma ravintola','Analytiikka','Kurssit','Ota yhteyttä','Markkinointi','Aukioloajat','Korvaus','Aukioloajat','Analytiikka','Laskut','Markkinointi','Ota yhteyttä','Kommentoi','Omat tiedot','Ravintola','Nimi','Sähköposti']
    
    if(language === 'finnish'){
        for (i = 0 ; i < finarr.length; i++) {
            if ($('#itemt-'+i).length){
        document.getElementById('itemt-'+i).textContent = finarr[i]
        }}
        document.getElementById('intercom-url').textContent = 'Paina tästä'
         
        document.getElementById('ops1').textContent = 'Kojelauta'
        document.getElementById('ops2').textContent =   'Tulostaulukko'
        document.getElementById('ops3').textContent = 'Liiketoiminta'
        document.getElementById('ops4').textContent = 'Tilit'
        document.getElementById('ops-in').textContent = 'Havainnot'
        document.getElementById('ops5').textContent = 'Ota yhteyttä'
        document.getElementById('marketingops').textContent = 'Kampanja'
        document.getElementById('profiledesk').textContent = 'Profiili'
        document.getElementById('signOutButton').textContent = 'Kirjaudu ulos'
        document.getElementById('ra3').textContent = 'Saavutettu'
        document.getElementById('ra2').textContent = 'Saav. rajan alla'
        document.getElementById('ra1').textContent = 'Saavutettavissa'
        document.getElementById('pa3').textContent = 'Saavutettu'
        document.getElementById('pa2').textContent = 'Saav. rajan alla'
        document.getElementById('pa1').textContent = 'Saavutettavissa'
        document.getElementById('act1').textContent = 'Kommentoi'
        document.getElementById('act2').textContent = 'Kommentoi'
        document.getElementById('act3').textContent = 'Kommentoi'
        document.getElementById('act4').textContent = 'Kommentoi'
        document.getElementById('act5').textContent = 'Kommentoi'
        document.getElementById('act6').textContent = 'Kommentoi'
    
    
        $('.submit-opse').text('Lähetä')
        document.getElementById('submitbutt').value = 'Lähetä'
        document.getElementById('sub-butt').value = 'Lähetä'
    
    document.getElementById('Type').options[1].text = 'Molemmat';
    document.getElementById('Type').options[3].text = 'Alkuperäinen';
    
    
    document.getElementById('Timeframe').options[1].text = 'Väliaikaisesti';
    document.getElementById('Timeframe').options[2].text = 'Pysyvästi';
    
    document.getElementById('cf3').options[1].text = 'Asiakas';
    document.getElementById('cf3').options[2].text = 'Kuljettaja';
    
    
    document.getElementById('cf4').options[1].text = 'Tilauksen nouto myöhästyi (yli 15 minuuttia)';
    
    document.getElementById('cf4').options[2].text = 'Tilaus peruttu';
    
    document.getElementById('cf4').options[3].text = 'Ei tullut paikalle';
    
    
    document.getElementById('cf4').options[4].text = 'Muu syy';
    
    
    
    
    
    
        const compl = document.querySelectorAll('.complete');
        compl.forEach(comple => {
        comple.innerHTML = 'Valmis';
        });
    
    }
    
    let swedarr = ['Dashboard','Min restaurang','Betyg','Tillagningstid','Användbarhet','Denna vecka','Föregående vecka','Föregående vecka','Föregående vecka','Föregående vecka','Veckomål','Betyg','Förberedelsetid','På varandra följande veckor','Veckans kommentar','Kampanj','Kampanj','Kampanj','Sanktion','Kommentar','Uppdrag','Kommande samtal','Boka ett samtal','Kommentar','Uppdrag','Kommentar','Uppdrag','Kommentar','Uppdrag','Kommentar','Uppdrag','Kommentar','Uppdrag','Kampanj','Sanktion','Kampanj','Kampanj','Utbildade medlemmar','Ledartavla för betygsättning','Din ranking','Bruttoförsäljning','Betyg','Veckan som går','Föregående vecka','Förändra','Försäljning','Betyg','Rankinglista','Ändra öppettider','Koncept','Förändringens varaktighet','Dag','Öppet (morgon)','Stäng (morgon)','Öppet(kväll)','Stäng(kväll)','Stängd','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag','Återbetalning för utmaning','Plattform','Koncept','Person','Anledning','Beställnings-ID','Beställningsdatum','Beställningstid','Bevis','Bruttoförsäljning','Bruttoförsäljning','Bruttoförsäljning','Beställning','Innevarande månad','Förra månaden','Hela tiden','Hela tiden','Datum','Referens','Bruttoförsäljning','PWB Avgift + moms','Ändringar','Betalt','Kontoansvarig','Om du behöver ytterligare stöd kan du använda chattfunktionen för att kontakta oss.','Kampanjer','Kampanjer som hanteras av Peckwater','Vill du sluta prenumerera på kampanjen eller har du andra frågor?','Dashboard','Min restaurang','Analyser','Utbildning','Kontakt','Marknadsföring','Dashboard','Topplistor','Min restaurang','Analyser','Utbildning','Kontakt','Marknadsföring','Profil','Logga ut','Dashboard','Dashboard','Mål','Respons','Min restaurang','Analyser','Utbildning','Kontakt','Marknadsföring','Besökstid','Korvaus','Besökstid','Analyser','Fakturor','Marknadsföring','Kontakt','Kommentera','Min information','Restaurang','Namn','E-post']
    
    function contdif(cur) {
    
      document.getElementById('rev11').textContent = cur
      document.getElementById('rev22').textContent = cur
      document.getElementById('uscontent4').textContent = cur
      document.getElementById('uscontent5').textContent = cur
      document.getElementById('uscontent6').textContent = cur
      document.getElementById('uscontent7').textContent = cur
      
          
      let usconte = document.querySelectorAll('.uscontentsign');
      usconte.forEach(usconte => {
      usconte.innerHTML = cur;
      });
      
      let usconte2 = document.querySelectorAll('.uscontentsign1');
      usconte2.forEach(usconte2 => {
      usconte2.innerHTML = cur;
      });
          
      let usconte3 = document.querySelectorAll('.amtextsign3');
      usconte3.forEach(usconte3 => {
      usconte3.innerHTML = cur
      });
      
      let usconte4 = document.querySelectorAll('.amtext3');
      usconte4.forEach(usconte4 => {
      usconte4.innerHTML = cur
      });
      
      let usconte5 = document.querySelectorAll('.amtext0');
      usconte5.forEach(usconte5 => {
      usconte5.innerHTML = cur
      });
      
      let usconte6 = document.querySelectorAll('.amtext1');
      usconte6.forEach(usconte6 => {
      usconte6.innerHTML = cur
      });
      
      
      
      let langq = document.querySelectorAll('.poundmarkuscontent');
      langq.forEach(langq => {
      langq.innerHTML = cur
      });
      
      }
        
        
    
        
    if(language === 'swedish'){
      contdif('SEK')
    }
      if (language === 'finnish'){
      contdif('€')
    }
      if (language === 'belgium'){
      contdif('€')
    }
      if(language === 'czech'){
      contdif('Kč')
    }
      if(language === 'hungarian'){
      contdif('HUF')
    } 
      if(language === 'usa') {
      contdif('$')
    }
    
    if(language === 'swedish'){
            for (i = 0 ; i < swedarr.length; i++) {
                if ($('#itemt-'+i).length){
            document.getElementById('itemt-'+i).textContent = swedarr[i]
            }}
        document.getElementById('intercom-url').textContent = 'Klicka här'
        
        document.getElementById('ops1').textContent = 'Dashboard'
        document.getElementById('ops2').textContent = 'Topplistor'
        document.getElementById('ops3').textContent = 'Företag'
        document.getElementById('ops4').textContent = 'Konton'
        document.getElementById('ops-in').textContent = 'Insikter'
        document.getElementById('ops5').textContent = 'Kontakt'
        document.getElementById('marketingops').textContent = 'Kampanj'
        document.getElementById('profiledesk').textContent = 'Profil'
        document.getElementById('signOutButton').textContent = 'Logga ut'
        document.getElementById('ra3').textContent = 'Uppnåtts'
        document.getElementById('ra2').textContent = 'Inte uppnått'
        document.getElementById('ra1').textContent = 'Uppnått'
        document.getElementById('pa3').textContent = 'Uppnåtts'
        document.getElementById('pa2').textContent = 'Inte uppnått'
        document.getElementById('pa1').textContent = 'Uppnått'
        document.getElementById('act1').textContent = 'Kommentera'
        document.getElementById('act2').textContent = 'Kommentera'
        document.getElementById('act3').textContent = 'Kommentera'
        document.getElementById('act4').textContent = 'Kommentera'
        document.getElementById('act5').textContent = 'Kommentera'
        document.getElementById('act6').textContent = 'Kommentera'
    
        document.getElementById('nps1').textContent = 'Hur skulle du bedöma din upplevelse av Peckwater Brands?'
    
    
        $('.submit-opse').text('Skicka')
        document.getElementById('submitbutt').value = 'Skicka'
        document.getElementById('sub-butt').value = 'Skicka'
    
        
    document.getElementById('Type').options[1].text = 'Båda';
    document.getElementById('Type').options[3].text = 'inhemskt brännmärka';
    
    document.getElementById('Timeframe').options[1].text = 'Temporär';
    document.getElementById('Timeframe').options[2].text = 'Ständig';
    
    document.getElementById('cf3').options[1].text = 'Förare';
    document.getElementById('cf3').options[2].text = 'Kund';
        
    document.getElementById('cf4').options[1].text = 'Var sen att hämta beställningen (över 15 minuter)';
    document.getElementById('cf4').options[2].text = 'Avbeställd beställning';
    document.getElementById('cf4').options[3].text = 'Kom inte till platsen';
    document.getElementById('cf4').options[4].text = 'Annat';
    
    
    const compl = document.querySelectorAll('.complete');
    compl.forEach(comple => {
    comple.innerHTML = 'Komplett';
    });
    
    }}
