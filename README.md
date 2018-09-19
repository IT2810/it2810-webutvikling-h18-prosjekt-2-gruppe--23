# it2810-webutvikling-h18-prosjekt-2-gruppe--23

Dette er en online utstilling med brukerstyrte kombinasjoner av av lyd, bilde og tekst. 

## Innholdsfortegnelse
* [Verktøy og rammeverk](#v&r)
* [Installering](#inst)
* [Dokumentasjon](#dok)
* [Kilder](#kilder)

<a name="v&r"></a>
## Verktøy og rammeverk
* [Node.js](https://nodejs.org/en/) - "Open source server environment"
* [React](https://reactjs.org/) - JavaScript bibliotek
* [Axios](https://www.npmjs.com/package/axios) - AJAX bibliotek

<a name="inst"></a>
## Installering
1. Last ned Node.js [her](https://nodejs.org/en/)
2. Last ned axios [her](https://www.npmjs.com/package/axios)
3. Deretter naviger inn i pro2 i terminalen og skriv "npm start" for å kjøre prosjektet lokalt.


<a name="dok"></a>
## Dokumentasjon
<b>Tabs display for utstilling</b>

For å vise frem de fire kombinasjonene av utstillingen, basert på kategorivalgene, valgte vi å ha et tabs display. Dette gjorde vi fordi det er oversiktlig og fint. For å velge kategorier valgte vi å ha en kategorimeny, som kan åpnes/lukkes, siden vi mener utstillingen ble finere når kategorivalgene ikke syntes. Vi la til header og footer for en ryddigere helhet. 

<b>Responsivt web-design</b>

Et krav til prosjektet var at webløsningen skulle ha responsivt design som tilpasser seg størrelse, orientering og plattform. Vi startet tidlig med denne tilpasningen slik at layouten var planlagt før vi hentet inn komponentene. 

Først lagde vi en papirmodell, og vurderte ønsket layout for mobil, nettbrett og pc. Vi tegnet opp flere løsninger, før vi landet på den vi har implementert. Deretter begynte vi å jobbe med implementasjon av layouten. Vi implementerte først tomme innrammede containere slik at vi så hvor elementene skulle ligge.

Vi brukte CSS-grid for layouten, slik at elementene kunne ligge ved siden av hverandre på en PC-skjerm, mens de på en mobilskjerm ble liggende under hverandre. Plasseringen av elementer i rader og kolonner på de ulike skjermene ble satt med media queries med bestemt maksbredde. Dette ga en flytende og fleksibel layout. Vi brukte også media queries til å skalere størrelsen på elementene i forhold til størrelsen på skjermen. Siden bildene er SVG-filer, gjorde dette det lett å skalere bildene uten å miste kvaliteten. Viewport i meta-taggen er implementert i index.html-fila. Hvordan webløsningen tilpasser seg skjermens størrelse og orientering kan du se i eksempelet her, for iPhone og pc:

<img width="640" alt="skjermbilde 2018-09-18 kl 13 46 08" src="https://user-images.githubusercontent.com/22234642/45685517-cf510400-bb49-11e8-9ed1-026066a10fc2.png"> <img width="190" alt="skjermbilde 2018-09-18 kl 13 44 50" src="https://user-images.githubusercontent.com/22234642/45685525-d546e500-bb49-11e8-934c-c6609c839ce4.png">

<b>React - mappestruktur og filstruktur</b>

Mappene er strukturert ved bruk av en “components”-mappe i src. Denne inneholder flere undermapper, som for eksempel “CategoryMenu” og “Gallery”. Undermappene inneholder komponenter, samt alt som er relevant for hver komponent, som CSS-filer. Videre har vi en fil for hver komponent. Dette valgte vi fordi det gjør prosjektet veldig oversiktlig. 

Undermappene førte til litt nøsting når vi skulle importere filene våre andre steder, men dette var en liten pris å betale for en oversiktlig mappe- og filstruktur. Ettersom dette var et lite prosjekt, fungerte mappestrukturen vår godt. I et større prosjekt måtte vi nok vurdert om denne strukturen ville fungert godt, da flere filer fort ville gjort at vi hadde fått et unødvendig stort antall undermapper. Da ville vi kanskje hatt mer generelle undermapper, slik at vi kunne hatt flere filer i hver.

Vi satt sammen hele prosjektet i et galleri (Gallery.js) som inneholder alle komponenten som vises i utstillingen. Gallery inneholder en kategori-meny, tabsene, en bilde-komponent, en tekst-komponent og en lyd-komponent. Videre inneholder kategori-menyen en rekke underkomponenter for å håndtere funksjonaliteten for å åpne/lukke menyen.

<img width="153" alt="skjermbilde 2018-09-18 kl 13 46 46" src="https://user-images.githubusercontent.com/22234642/45685342-5b166080-bb49-11e8-8f98-46d3892f25a9.png">

<b>Laste filer dynamisk med AJAX</b>

Ingen på gruppen hadde vært borti ajax tidligere, vi valgte derfor å holde oss til de bibliotekene som ble anbefalt på forelesningen. Vi leste oss opp på både fetch og axios. Først tenkte vi at fetch hørtes ut som den beste løsningen siden dette er standarden for javascript. Men ettersom axios har flere innebygde funksjonaliteter, blant annet en mer automatisert måte å håndtere JSON-filer på, begynte vi å helle mer mot å bruke dette. Da vi fant en fin måte å hente svg-filene vi trengte med axios, ble avgjørelsen tatt. I tillegg til dette fungerer axios godt med de fleste nettlesere. 

Siden vi allerede var i gang med å bruke node.js og npm var det veldig greit å få lagt til axios som tredjepartsbibliotek og begynne å hente ut filene vi ønsket. Alle filene som skulle brukes på siden ble lagt i public-mappen, for så å bli hentet inn i hver sin komponent. 

For å sørge for at filene kun lastes inn når de vises og kun lastes en gang prøvde vi først å lagre de ulike tekstene/bildene innenfor hver kategori i lister. Dette fungerte relativt greit, men listen ble da tømt hver gang kategorien ble endret. I tillegg ble koden komplisert og rotete. Vi endte opp med å bruke sessionStorage, som er en veldig ryddig måte å ordne dette på. Dette fungerte som en cache.

Før vi laster opp tekst eller bilde sjekker vi om dette allerede eksisterer i sessionStorage ved å kalle på “key”-en til bildet, som lagres som pathen til bildet. Om den er i sessionStorage hentes bildet ut. Dersom det ikke eksisterer i sessionStorage lastes det opp og lagres her. sessionStorage tømmes når siden lukkes. Local storage er en annen måte å lagre filer på en lignende måte, men dette blir ikke tømt når siden lukkes. Dermed fant vi ut at sessionStorage fungerte best for vårt formål.

<b>Samarbeid og bruk av git</b>

Da vi satt i gang med prosjektet delte vi opp prosjektet i mindre deloppgaver, som ble lagt inn på gitHub som issues. Slik hadde hele gruppa kontroll på hva som ble gjort, og hva som måtte gjøres til et hvert tidspunkt. Koden distribuerte vi mellom oss ved å bruke git, og vi merget ofte sammen det vi hadde gjort, slik at prosjektet var så oppdatert som mulig til en hver tid. Ettersom vi som oftest satt og jobbet sammen på prosjektet, benyttet vi issues i mindre grad enn det vi ville gjort hvis vi hadde jobbet fra forskjellige lokasjoner. Issues ble derfor brukt hovedsakelig til å holde kontrollen på fremgangen i prosjektet. 

<b>Testing</b>

Vi testet prosjektet jevnt gjennom hele prosessen med Chrome’s Toggle Device Toolbar. Dette gjorde at vi jevnlig oppdaterte ting som ikke virket slik vi ønsket på ulike skjermstørrelser. På slutten av prosjektet testet vi webløsningen nøye på ulike plattformer. 

Vi valgte å teste på mobil (liten skjerm), nettbrett (mellomstor skjerm) og PC (stor skjerm). Vi testet enhetene både horisontalt og vertikalt. Da vi testet webløsningen med de forskjellige skjermstørrelsene var vi opptatt av at brukergrensesnittet skulle være intuitivt, brukervennlig og fint, at all funksjonalitet fungerte og at det responsive fungerte, altså at siden tilpasset seg når skjermens størrelse ble justert. Vi har også cross browser-testa webløsningen vår. Vi testet i Chrome, Firefox og Safari. Testingen gikk ut på å sjekke om siden vår så lik ut og hadde lik funksjonalitet i de ulike nettleserne. Det har den.  


<a name="kilder"></a>
## Kilder

Generelt: 
* https://www.youtube.com/watch?v=965sASYM220
* https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
* https://reactjs.org/docs/faq-structure.html 

Bilder:
* Autumn : https://www.svgrepo.com/svg/64198/autumn
* Summer: https://www.svgrepo.com/svg/9335/summer
* Winter: https://www.svgrepo.com/svg/222564/snowman-snow
* Spring: https://www.svgrepo.com/svg/19911/spring
* Halloween: https://www.svgrepo.com/svg/219751/pumpkin-halloween
* Christmas: https://www.svgrepo.com/svg/184568/santa-claus
* Easter: https://www.svgrepo.com/svg/264325/easter-egg-easter
* Valentine: https://www.svgrepo.com/svg/210259/valentines-day-love
* Flash: https://www.svgrepo.com/svg/54412/superheroe
* Superman: https://www.svgrepo.com/svg/25445/superman 
* Spiderman: https://www.svgrepo.com/svg/161448/spiderman 
* Batman: https://www.svgrepo.com/svg/27924/batman

Tutorials:
* https://www.tutorialspoint.com/json/json_ajax_example.htm
* https://oreillymedia.github.io/Using_SVG/extras/ch10-ajax.html
* https://css-tricks.com/scale-svg/
* https://www.npmjs.com/package/axios
* https://medium.com/@patelarpan2010/making-ajax-call-using-react-and-axios-4071e3e9ce65
* https://medium.com/dailyjs/how-to-create-react-tabs-using-contextapi-932c7bec35c7 
* https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17 

Lyder:
* https://freesound.org/

Tekst:
* https://www.womenshealthmag.com/relationships/g19991392/cheesy-love-quotes/ 
* http://vitsen.no/ 
* https://humoristen.no/vitser/ 
* http://gåte.no 
