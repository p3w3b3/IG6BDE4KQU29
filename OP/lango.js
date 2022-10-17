setTimeout(() => { 
let language = document.querySelector('#lang').textContent
let usc = document.querySelector('#uscontent').textContent

let hungarr = ['Vezérlőpult','Ranglista','Mérőszámok','Felkészülési idő','Működési idő','Múlt hét','Előző hét','Múlt hét','Múlt hét','Múlt hét','Heti célok','Értékelés','Felkészülési idő','Egymást követő hetek','A hét megjegyzése','Promóció','Promóció','Promóció','Intézkedés','Megjegyzés','Akció','Hívás dátuma','Hívás foglalása','Megjegyzés','Akció','Megjegyzés','Akció','Megjegyzés','Akció','Megjegyzés','Akció','Megjegyzés','Akció','Promóció','Intézkedés','Promóció','Promóció','Képzett csapattagok','Múlt heti bruttó értékesítés','Értékelési ranglista','Ertékesítés','Értékelési','Aktuális hét','Múlt hét','Különbség','Ertékesítés','Értékelési','Értékelési ranglista','Működési idő módosítása','Típus','Időkeret','Nap','Nyitás (reggel)','Zárás (reggel)','Nyitás (este)','Zárás (este)','Zárva','Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap','Kihívás visszautasítása','Platform','Márka','Párttag','Ok','Megrendelés azonosítója','Megrendelés dátuma','Megrendelés ideje','Bizonyíték','Értékesítés','Értékesítés','Értékesítés','Megrendelés','Mindig','Múlt hónap','Mindig','Mindig','Dátum','Referencia','Értékesítés','PWB Díj + áfa','Módosítások','Fizetve','Számlamenedzser','Ha további segítségre van szükséged, kérjük, vedd fel velünk a kapcsolatot a chat funkció használatával','Kiemelt promóciók','Peckwater Kezelt kampányok','Nem szeretnél részt venni a kampányban, vagy kérdésed van?','Vezérlőpult','Az én étterem','Analitika','Képzés','Kontakt','Értékesítés','Vezérlőpult','Ranglisták','Az én étterem','Analitika','Képzés','Kontakt','Értékesítés','Profil','Kijelentkezés','Vezérlőpult','Vezérlőpult','Heti célok','Visszacsatolás','Az én étterem','Analitika','Képzés','Kontakt','Ranglisták','Visszatérítések','Nyitvatartási idő','Teljesítmény','Számlákat','Kampányok','Kontakt','Kontakt','Hozzáadása','Saját adatok','Étterem','Név','E-mail cím']


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
    document.getElementById('ops-in').textContent = 'Belátások'
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

let czecharr = ['Přístrojová deska','Žebříčky','Metriky','Čas na přípravu','Doba provozuschopnosti','Minulý týden','Týden předtím','Minulý týden','Minulý týden','Minulý týden','Týdenní cíle','Hodnocení','Čas na přípravu','Po sobě jdoucí týdny','Komentář týdne','Prémie','Prémie','Prémie','Sankce','Komentář','Akce','Další hovor','Rezervovat hovor','Komentář','Akce','Komentář','Akce','Komentář','Akce','Komentář','Akce','Komentář','Akce','Prémie','Sankce','Prémie','Prémie','Členové týmu vyškoleni','Prodejní žebříček','Žebříček hodnocení','Prodejní částka','Hodnocení','Tento týden','Minulý týden','Změnit částku','Prodejní částka','Hodnocení','Vaše hodnocení','Změnit provozní dobu','Značka','Časové okno','Den','Otevřeno (ráno)','Zavřít (ráno)','Otevřeno (večer)','Zavřít (večer)','Zavřeno','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota','Neděle','Refundace výzvy','Plošina','Značka','Clen strany','Důvod','Číslo objednávky','Datum objednávky','Čas objednávky','Důkaz','Prodejní částka','Prodejní částka','Prodejní částka','Objednávky','Měsíc k dnešnímu dni','Minulý měsíc','Pořád','Pořád','Datum','Referenční','Prodejní částka','PWB Poplatek + hovor','Dodatky','Částka vyplacená','Account manažer','Pro jakoukoli další podporu prosím použijte funkci chatové podpory','Promo akce na září','Peckwater Spravované kampaně','Chcete se odhlásit z kampaně nebo máte otázku?','Řídící panel','Moje restaurace','Analytika','Výcvik','Kontakt','Žebříčky','Marketing','Řídící panel','Moje restaurace','Analytika','Výcvik','Kontakt','Marketing','Profil','Odhlásit','Řídící panel','Řídící panel','Cíle','Zpětná vazba','Moje restaurace','Analytika','Výcvik','Kontakt','Marketing','Otevírací doba','Náhrady','Otevírací doba','Výkon','Faktury','Marketing','Kontakt','Komentovat','Moje informace','Restaurace','Jméno','E-Mail']

if(language === 'czech'){
    for (i = 0 ; i < czecharr.length; i++) {
        if ($('#itemt-'+i).length){
    document.getElementById('itemt-'+i).textContent = czecharr[i]
    }}

    document.getElementById('intercom-url').textContent = 'klikněte zde'
    
    document.getElementById('ops1').textContent = 'Řídící panel'
    document.getElementById('ops2').textContent = 'Žebříčky'
    document.getElementById('ops3').textContent = 'Obchodní operace'
    document.getElementById('ops4').textContent = 'Účty'
    document.getElementById('ops-in').textContent = 'Postřehy'
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

let swedarr = ['Instrumentbräda','Min restaurang','Mätvärden','Förbereda tid','Användbarhet','Denna vecka','Föregående vecka','Föregående vecka','Föregående vecka','Föregående vecka','Veckomål','Betyg','Förberedelsetid','På varandra följande veckor','Veckans kommentar','Kampanj','Kampanj','Kampanj','Sanktion','Kommentar','Uppdrag','Kommande samtal','Boka ett samtal','Kommentar','Uppdrag','Kommentar','Uppdrag','Kommentar','Uppdrag','Kommentar','Uppdrag','Kommentar','Uppdrag','Kampanj','Sanktion','Kampanj','Kampanj','Utbildade medlemmar','Ledartavla för betygsättning','Din ranking','Bruttoförsäljning','Betyg','Veckan som går','Föregående vecka','Förändra','Försäljning','Betyg','Rankinglista','Ändra öppettider','Brännmärka','Förändringens varaktighet','Dag','Öppet (morgon)','Stäng (morgon)','Öppet(kväll)','Stäng(kväll)','Stängd','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag','Återbetalning för utmaning','Plattform','Brännmärka','Person','Anledning','Beställnings-ID','Beställningsdatum','Beställningstid','Bevis','Bruttoförsäljning','Bruttoförsäljning','Bruttoförsäljning','Beställning','En månad kvar till idag','Förra månaden','Hela tiden','Hela tiden','Datum','Referens','Bruttoförsäljning','PWB Avgift + moms','Ändringar','Betalt','Kontoansvarig','Om du behöver ytterligare stöd kan du använda chattfunktionen för att kontakta oss.','Kampanjer','Kampanjer som hanteras av Peckwater','Vill du sluta prenumerera på kampanjen eller har du andra frågor?','Dashboard','Min restaurang','Analytics','Utbildning','Kontakt','Marknadsföring','Dashboard','Topplistor','Min restaurang','Analytics','Utbildning','Kontakt','Marknadsföring','Profil','Logga ut','Dashboard','Dashboard','Mål','Respons','Min restaurang','Analytics','Utbildning','Kontakt','Marknadsföring','Besökstid','Korvaus','Besökstid','Analytics','Fakturor','Marknadsföring','Kontakt','Kommentera','Min information','Restaurang','Namn','E-post']

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

if(language === 'swedish' || language === 'finnish' || language === 'czech' || language === 'hungarian') {
contdif('€')
} else if(usc === '1') {
contdif('$')
}


if(language === 'swedish'){
        for (i = 0 ; i < swedarr.length; i++) {
            if ($('#itemt-'+i).length){
        document.getElementById('itemt-'+i).textContent = swedarr[i]
        }}
    document.getElementById('intercom-url').textContent = 'Klicka här'
    
    document.getElementById('ops1').textContent = 'Instrumentbräda'
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

}

let selectElement = document.getElementById('selectstid');
let optionNames = [...selectElement.options].map(o => o.value);

if(optionNames.length>0){

//selectElement.value = optionNames[1]
updatedata()
updatedata2()
updatedata3()
updatedata4()
updatemarketing()
contentvis()
donutcharts()
updatecharts()
updateaws()
if(language === 'swedish' || language === 'finnish' || language === 'czech' || language === 'hungarian') {
contdif('€')
} else if(usc === '1') {
contdif('$')
}
}
}, 10000)

    
    
