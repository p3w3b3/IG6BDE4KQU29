function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   


docReady(function() {
  let curUser = firebase.auth().currentUser;
  let myFS = firebase.firestore();
  let docRef = myFS.doc("users/" + curUser.uid);
  docRef.get().then((docSnap) => {
    let datad = docSnap.data();
let language = datad['language']

let hungarr = ['Üdvözlünk a képzési Peckwater Brands portálon!','Szia, Aleksei! Kim vagyok, én leszek a beléptetési menedzsered. Nagyon örülünk, hogy franchise partnereink között köszönthetünk. A beléptetéssel kapcsolatos közelgő eseményekről az alábbiakban tájékozódhatsz. Ha valamelyik időpont nem került megerősítésre, kérjük, ellenőrizd az e-mail fiókodat.','A beléptetéssel kapcsolatos közelgő események','Tervezett kezdési időpont','Helyszíni látogatás','Készlet megérkezése','Élő rendelési teszt','Kezdés napja','Kezdőlap','Beléptetés','Képzés','Követő','Kapcsolat','Konyha beállítása','Konyha elrendezése','Képzési portál Követő','Név','Regisztrált','Étterem','Legutóbb aktív','Felhasználó hozzáadása','Profil','Étterem','Név','E-mail cím','Saját adatok','Hozzáférési szint','Ország','Hozzáférés a képzésekhez','Tervezett kezdési időpont','Helyszíni látogatás','Készlet megérkezése','Élő rendelési teszt','Kezdés napja','Franchise menedzser','Napi kérdések megválaszolása','Márkamenedzser','A márkával és a képzéssel kapcsolatos kérdések megválaszolása','Műveleti vezető','Meg nem oldott problémák és kiemelt üzleti kérdések kezelése','Szállítási csatorna támogatása','Ha további segítségre van szükséged, kérjük, vedd fel velünk a kapcsolatot a chat funkció használatával']

let hungarr2 = ['Név','E-mail cím','Jelszó','Hozzáférési szint','Kijelentkezés','Keresés...','Hozzáférési szint','Csaló lapok']


if(language === 'hungarian'){
  for (i = 0 ; i < hungarr.length; i++) {
  document.getElementById('itemt-'+i).textContent = hungarr[i]
  }
  
  document.getElementById('signupname').placeholder = hungarr2[0]
  document.getElementById('signupemail').placeholder = hungarr2[1] 
  document.getElementById('signuppassword').placeholder = hungarr2[2] 
  document.getElementById('Access-level').placeholder = hungarr2[3] 
  document.getElementById('signOutButton').textContent = hungarr2[4] 
  document.getElementById('trainingsearch').placeholder = hungarr2[5] 
  
  
  document.getElementById('homemob').textContent = hungarr[8] 
  document.getElementById('obmob').textContent = hungarr[9] 
  
  document.getElementById('trainingmob').textContent = hungarr[10] 
  
  document.getElementById('cheatsheetsmob').textContent = hungarr2[7] 
  
  document.getElementById('trackermob').textContent = hungarr[11] 
  
  document.getElementById('contactmob').textContent = hungarr[12] 
  
  document.getElementById('profilemobile').textContent = hungarr[21] 
  
  document.getElementById('profiledesk').textContent = hungarr[21] 
      
  document.getElementById('signoutmobile').textContent = hungarr2[4] 
  
  
  document.getElementById('ob1mob').textContent = hungarr2[14] 
  
  }
  




let swedarr = ['Välkommen till Peckwater Brands utbildningsportalen','Hej Aleksei, jag är Kim, din inskolningsmanager. Vi är mycket glada över att du ansluter dig till oss som franchisetagare. Du hittar dina kommande inskolningsevenemang nedan. Om något av dina datum inte är bekräftat, vänligen kontrollera din e-post.','Kommande evenemang för inskolning','Planerat startdatum','Besök på plats','Ankomst av lagervaror','Live test av beställningar','Lanseringsdag','Hem','Inskolning','Utbildning','Tracker','Kontakt','Inställning av köket','Kökslayout','Tracker för utbildningsportalen','Namn','Registrerad','Restaurang','Senast aktiv','Lägg till användare','Profil','Restaurang','Namn','E-post','Min information','Tillgångsnivå','Landet','Tillgång till utbildningskurser','Planerat startdatum','Besök på plats','Ankomst av lagervaror','Live test av beställningar','Lanseringsdag','Franchisetagare','För alla dina dagliga frågor','Varumärkesmanager','För alla frågor som rör varumärket och utbildning','Chef för verksamheten','För eskaleringar och större affärsfrågor','Stöd till distributionskanaler','Om du behöver ytterligare stöd, vänligen använd chattfunktionen för att kontakta oss.']

let swedarr2 = ['Namn','E-Post','Lösenord','Tillgångsnivå','Logga ut','Sök...','Tillgångsnivå','Fusklappar']

if(language === 'swedish'){
for (i = 0 ; i < swedarr.length; i++) {
document.getElementById('itemt-'+i).textContent = swedarr[i]
}

document.getElementById('signupname').placeholder = swedarr2[0]
document.getElementById('signupemail').placeholder = swedarr2[1] 
document.getElementById('signuppassword').placeholder = swedarr2[2] 
document.getElementById('Access-level').placeholder = swedarr2[3] 
document.getElementById('signOutButton').textContent = swedarr2[4] 
document.getElementById('trainingsearch').placeholder = swedarr2[5] 


document.getElementById('homemob').textContent = swedarr[8] 
document.getElementById('obmob').textContent = swedarr[9] 

document.getElementById('trainingmob').textContent = swedarr[10] 

document.getElementById('cheatsheetsmob').textContent = swedarr2[7] 

document.getElementById('trackermob').textContent = swedarr[11] 

document.getElementById('contactmob').textContent = swedarr[12] 

document.getElementById('profilemobile').textContent = swedarr[21] 

document.getElementById('profiledesk').textContent = swedarr[21] 
  
document.getElementById('signoutmobile').textContent = swedarr2[4] 


document.getElementById('ob1mob').textContent = swedarr[14] 

}


let finarr = ['Tervetuloa Peckwater Brands Portalliin','Hei Aleksei, Olen Kim sinun perehdyttäjä. Olemme erittäin innoissamme, että liityt joukkoomme Peckwaterin franchising-kumppaniksi. Löydät tulevat liittymistapahtumasi alta. Jos päivämääriäsi ei ole vahvistettu, ole hyvä ja tarkista sähköpostisi.','Tulevat perehdytystapahtumat','Suunniteltu julkaisupvm','Tutustumiskäynti','Varaston saapuminen','Tilauksen kokeilu','Aloituspäivä','Koti','Perehdytys','Kurssit','Seuranta','Ota yhteyttä','Keittiön kokoonpano','Keittiön Asettelu','Seuranta työkalu','Nimi','Liittynyt','Ravintola','Viim. aktiivinen','Lisää käyttäjä','Profiili','Ravintola','Nimi','Sähköposti','Omat tiedot','Käyttöoikeustaso','Maa','Kurssit','Suunniteltu julkaisupvm','Varaston saapuminen','Tilauksen kokeilu','Tutustumiskäynti','Aloituspäivä','Franchise johtaja','Kaikkiin päivittäisiin kysymyksiisi','Brändi johtaja','Kaikkiin brändiin ja koulutukseen liittyviin tiedusteluihin','Toiminnan johtaja','Eskalaatioihin ja suuriin liiketoimintaongelmiin','Toimituskanavien tuki','Jos tarvitset lisätukea, ota yhteyttä chat-toiminnolla']

let finarr2 = ['Nimi','Sähköposti','Salasana','Käyttöoikeustaso','Kirjaudu ulos','Hae...','Käyttöoikeustaso','Lunttilaput']

if(language === 'finnish'){
for (i = 0 ; i < finarr.length; i++) {
document.getElementById('itemt-'+i).textContent = finarr[i]
} 

document.getElementById('signupname').placeholder = finarr2[0]
document.getElementById('signupemail').placeholder = finarr2[1] 
document.getElementById('signuppassword').placeholder = finarr2[2] 
document.getElementById('Access-level').placeholder = finarr2[3] 
document.getElementById('signOutButton').textContent = finarr2[4] 
document.getElementById('trainingsearch').placeholder = finarr2[5] 


document.getElementById('homemob').textContent = finarr[8] 
document.getElementById('obmob').textContent = finarr[9] 

document.getElementById('trainingmob').textContent = finarr[10] 

document.getElementById('cheatsheetsmob').textContent = finarr2[7] 

document.getElementById('trackermob').textContent = finarr[11] 

document.getElementById('contactmob').textContent = finarr[12] 

document.getElementById('profilemobile').textContent = finarr[21] 

document.getElementById('profiledesk').textContent = finarr[21] 
  
document.getElementById('signoutmobile').textContent = finarr2[4] 

document.getElementById('ob1mob').textContent = finarr[14] 


}

let czecharr = ['Vítejte na školícím Peckwater Brands portálu','Ahoj Aleksei, jmenuji se Kim a jsem tvůj nástupní manažer. Jsme nadšení, že se k nám připojujete jako frančízový partner. Své nadcházející nástupní události najdete níže. Pokud některý z termínů není potvrzen, zkontrolujte si prosím své e-maily.','Nadcházející nástupní události','Plánované datum spuštění','Návštěva místa','Příjezd zboží','Živý test objednávky','Den spuštěníf','Domů','Nástup','Školení','Tracker','Kontakt','Nastavení kuchyně','Rozložení kuchyně','Tracker školícího portálu','Jméno','Zapsán','Restaurace','Naposledy aktivní','Přidat uživatele','Profil','Restaurace','Jméno','E-mail','Moje informace','Úroveň přístupů','Země','Přístup do školících kurzů','Plánované datum spuštění','Návštěva místa','Příjezd zboží','Živý test objednávky','Den spušrtění','Frančízový manažer','Pro všechny vaše každodenní otázky','Manažer značky','Pro všechny dotazy ohledně značky a školení','Vedoucí provozu','Pro eskalace a zásadní obchodní problémy','Podpora dodavatelského řetězce','Pro jakoukoli další podporu prosím použijte funkci chatové podpory']

let czecharr2 = ['Jméno','E-mail','Heslo','Úroveň přístupů','Odhlášení','Hledat...','Úroveň přístupů','Taháky']



if(language === 'czech'){
for (i = 0 ; i < czecharr.length; i++) {
document.getElementById('itemt-'+i).textContent = czecharr[i]
} 

document.getElementById('signupname').placeholder = czecharr2[0]
document.getElementById('signupemail').placeholder = czecharr2[1] 
document.getElementById('signuppassword').placeholder = czecharr2[2] 
document.getElementById('Access-level').placeholder = czecharr2[3] 
document.getElementById('signOutButton').textContent = czecharr2[4] 
document.getElementById('trainingsearch').placeholder = czecharr2[5] 


document.getElementById('homemob').textContent = czecharr[8] 
document.getElementById('obmob').textContent = czecharr[9] 

document.getElementById('trainingmob').textContent = czecharr[10] 

document.getElementById('cheatsheetsmob').textContent = czecharr2[7] 

document.getElementById('trackermob').textContent = czecharr[11] 

document.getElementById('contactmob').textContent = czecharr[12] 

document.getElementById('profilemobile').textContent = czecharr[21] 

document.getElementById('profiledesk').textContent = czecharr[21] 
  
document.getElementById('signoutmobile').textContent = czecharr2[4] 

document.getElementById('ob1mob').textContent = czecharr[14] 

}


})
})
