# Web Animatie Lars
Link naar eindoplevering:
https://larscappelle.github.io/WebAnimatieLars/

<h2>Opdracht<h2>
Voor het vak Web Animaties moeten we een kunstwerk uit het Letterform-archief of het AIGA-archief uitkiezen en dat vertalen naar het web. Het doel is om er een interactieve webpagina van te maken waarbij de gebruiker bijvoorbeeld over het kunstwerk kan hoveren, klikken en toetsen indrukken. 

<h2>Kunstwerk<h2>
Het kunstwerk dat ik heb vertaald naar het web is “The American Way Magazine” uit maart 1970. De reden dat ik voor dit kunstwerk heb gekozen is omdat ik veel mogelijkheden met alle lijnen waar het kunstwerk uit bestaat. Het is een vrij simpele vector, alleen bevat aan de andere kant veel verschillende vormen waar mee gespeeld kan worden.

<h2>Over het kunstwerk<h2>
The American Way Magazine is een magazineblad gemaakt voor American Airlines (opdrachtgever Juan Homes), en het gekozen kunstwerk is de cover geweest voor het blad. Het is ontworpen door Bjarne Martin Pedersen, een grafisch ontwerper van 84 jaar uit Noorwegen. Hij heeft hulp gehad van Illustrator Guissepi Lucci en editor Don Moffit.

American Way was groot in vliegtuigen in de jaren '70: Er zijn meerdere kunstwerken zoals het gekozen kunstwerk gemaakt. Gek genoeg heb ik nergens op internet iets kunnen vinden van deze specifieke uitgave van TheAmericanWay, maar wel over andere uitgaves. Een uitgave van oktober 1970 bijvoorbeeld, was gewijd aan de nieuwe Boeing 747, terwijl het coververhaal in september '71 de nieuwe McDonnell Douglas DC-10 was. Hieruit maak ik op dat mijn gekozen kunstwerk ook iets te maken heeft met een Boeing 747, omdat dit getal tweemaal te vinden is op het kunstwerk. Ook heb ik in het AIGA-archief meerdere uitgaves van TheAmericanWay gevonden gemaakt door B. Martin Pedersen.

Vertaling naar digitaal/ interactie
Ik heb het kunstwerk uiteindelijk digitaal gemaakt en de volgende interactieve elementen toegepast:

De 747-747 svg
De 747 svg heb ik hoverbaar en responsive gemaakt. Wanneer de gebruiker met zijn cursor over de lijnen hovert worden deze gehighlight en met een transitie van 10 seconden keren ze weer terug naar hun originele staat.

De titel en subtitels
De titels heb ik met een animatie op en neer laten zweven. Ook worden ze door buttons gemanipuleerd tot alternatieve titels. Er zijn 4 titels in totaal en elke titel is een eigen taal. 

# Proces
<h2>Eerste Ideëen<h2>
Mijn eerste idee was om het kunstwerk erg “spacend” te maken door de lijnen op allemaal manieren te laten veranderen van grootte en kleur etc. Ik had nog niet echt plannen met de tekst van het kunstwerk maar dat zou nog wel komen.

<h2>Eerste versie (week 1)</h2>
In de eerste week ben ik veel bezig geweest met het uberhaupt aan de praat krijgen van mijn svg in de code. Uiteindelijk was dit gelukt en ben ik begonnen met het responsive maken en media querys toe te voegen. Omdat ik veel moeite heb met het veranderen van de vorm van svg’s bij verschillende breakpoints kwam ik er snel achter dat dit niet ging werken voor mij. Ik ben tot op de laatste dag van het vak nog steeds niet zeker of het überhaupt mogelijk is om een svg polygon van vorm te veranderen bij verschillende breakpoints. Misschien is dit een van de “grenzen” van wat mogelijk is op het web zoals we moesten ontdekken bij dit vak?

Om alsnog breakpoints in mijn website te kunnen realiseren heb ik een nieuwe svg ingeladen, die voor mobiel geschikt was. Bij de breakpoint tussen mobiel en desktop gaat de ene svg dus op display: none; en de ander op block, en andersom. 

Vervolgens ben ik wat gaan spelen met ‘hover’ en ‘active’ pseudoclasses. Ik had niet echt een doel en wilde vooral experimenteren in de hoop tot een gaaf effect te komen, en dat was gelukt. Op een gegeven moment heb ik alle svg shapes een class gegeven waarbij de kleur in wit veranderd zodra je erop hovert, en dit in combinatie met een langzame fade-out transition creëert een erg satisfying effect.

<h2>Tweede versie (week 2)</h2>
In de tweede week ben ik bezig geweest met javascript omdat ik het volgende effect wilde realiseren: elke keer als je op een bepaalde lijn klikt, veranderd deze van kleur + alle andere lijnen die dezelfde kleur (vanwege dezelfde class) hebben. Helaas was dit veel lastiger dan ik had verwacht en kreeg ik het niet voor elkaar om meerdere elementen in 1 keer aan te spreken. Het was me met getElementById wél gelukt om 1 lijn per keer aan te spreken, maar ik zag het niet zitten om meer dan 100 strepen individueel te moeten aanspreken. Ook zou dat een enorm lange code worden. 

Verder heb ik deze week weinig aan Web Animaties gedaan, omdat er veel uren zaten in het bovenstaande probleem waar ik niet uit kwam. Ik had besloten dat het slimmer was om eerst mijn tijd aan web-typografie te besteden aangezien ik hier wel verder mee kon komen, en ondertussen heb ik nog een grote stageopdracht moeten uitwerken waar veel uren in zaten. Zodra die twee dingen waren gefixed kon ik mij volledig storten op dit vak.

<h2>Laatste versie (week 3)</h2>
In de derde week ben ik weer een poging gaan wagen om meerdere classes in 1x op te roepen. Dit heb ik geprobeerd met getElementsByClassName, in combinatie met regels als .style.fill = “zwart” of .element.addClass(‘test’) alleen geen van deze dingen werkte. 

Omdat ik het weer voor me zag dat ik uren zou vastlopen op dat onderdeel ben ik eerst gaan focussen op andere elementen van de site. Persoonlijk moet ik zeggen dat ik het coderen met svg’s vrij irritant vind, omdat er andere classes worden gebruikt dan gebruikelijk (g i.p.v. div, en rect, poly) en ik het veel lastiger vind om deze shapes van locatie of vorm te veranderen met css, als dat uberhaupt mogelijk is. Een divje zou je makkelijk kunnen transformeren en animeren, maar bij die svg shapes krijg ik het niet voor elkaar.

Ik ben gaan kijken naar wat voor dingen ik aan het kunstwerk kan toevoegen om het interactiever te maken, en kwam tot de conclusie dat het leuk zou zijn als ik doormiddel van DOM-manipulatie de titel en subtitel zou veranderen. Bij het origineel staat er ‘TheAmericanWay’ en het leek mij leuk om versies van andere landen te maken, waarbij de kleuren en taal van de titel veranderd. Dit heb ik gerealiseerd met 4 knoppen (1 per land) en een Javascript function die de betreffende elementen manipuleert. 

In het beoordelingsformulier zag ik ook iets staan over een draggable element. Dit had ik nog nooit gedaan in code en leek mij een goed onderdeel van coderen om te leren. Ik heb het internet afgespeurd naar een uitleg voor hoe dit moet, alleen het blijkt erg lastig te zijn. Ik heb uiteindelijk een code gevonden die een bepaalde div draggable kan maken en deze heb ik in mijn eigen JS-code verwerkt. Ik heb ook uitgezocht hoe de code precies werkt zodat ik er wel van leer, en dit heb ik in comments bij de code gezet.

Ik heb op basis van feedback van Danny in de eerste week uiteindelijk ook nog een derde media query toegevoegd voor desktopscherm. Het originele kunstwerk is vrij dun in de breedte en de “747-747” die je op het kunstwerk ziet staan boven elkaar wat het geschikt maakt voor een IPad formaat, maar vrij veel lege ruimte geeft voor een desktopformaat. Voor het desktopformaat heb ik de 747-747 daarom naast elkaar gezet. Zo nemen ze meer ruimte van het beeld in en heb ik weer een media query erbij.

<h2>Laatste update</h2>
Uiteindelijk is het me tóch gelukt om meerdere classes met Javascript aan te spreken en te vervangen. Dit heb ik te danken aan een vriend van me die ervaren is met Javascript. Hij heeft het kleine stukje code waar ik al die weken naar op zoek was voor me kunnen schrijven en uitgelegd wat het doet. 

const inner = document.querySelectorAll('.st7, .st4, .st10');
  inner.forEach(node => {
    node.classList.add('test');
  })

Het document.queryselectorAll gedeelte had ik in de derde week ook ontdekt, alleen het inner.forEach gedeelte is iets waar ik zelf nooit zou zijn achter gekomen zonder hulp. 
Nu dit is opgelost heb ik mijn laatste stap aan mijn website kunnen toevoegen, en dat is dat op basis van het geselecteerde land, de kleuren van de strepen worden aangepast naar de kleuren van de vlag van dat land. De originele 747747 heeft bijna alle kleuren van de regenboog, en dus leek het mij een leuk idee om alle kleuren na input van de gebruiker te beperken tot de kleuren van het land, om zo het totaalplaatje compleet te maken.

<h3>Update</h3>
uiteindelijk is de code iets ingewikkelder geworden omdat er niet alleen een class moet worden toegevoegd maar ook weer weggehaald wanneer er op een ander land geklikt wordt. Dit was wat moeilijker dan ik dacht. Het was geen kwestie van classlist.remove(‘kleur1’) en classlist.add(‘kleur2’) maar ik moest de const “inner’ per land aanmaken (dus innerdutch, innergerman, etc.) en deze steeds laten removen en adden per button. Hierdoor is het kleine stukje code nu 4x in elke functie gestopt. 


# Wat heb ik geleerd
-	Ik heb geleerd wat de beperkingen en mogelijkheden van een svg zijn, en hoe XML tags zoals <g> en <poly> verschillen van HTML tags.
-	Ik heb geleerd hoe je met Javascript meerdere classes in 1 keer kan vervangen met een andere class.
-	Ik heb geleerd hoe animatie en bijbehorende keyframes werken in CSS en wat het verschil is met een transitie.
-	Javascript is voor mij weer wat duidelijker geworden en ik zie er nog meer logica in dan eerst.
-	Ik begrijp nu wat webkit en gecko is en wat de toegevoegde waarde is van -webkit- in je css zetten.
-	Ik weet nu de JS-code om een toetsenbord input aan je website toe te voegen.
-	Ik heb voor dit vak meer gebruik gemaakt van devtools en het nut hiervan ontdekt.

# Wat zou ik nog graag hebben geleerd/ uitgevoerd
-	Ik weet hoe je d.m.v. regels als transform en transform-origin etc. een vector kan veranderen. Sterker nog, ik heb met veel van deze effecten geëxperimenteerd. Helaas is het mij niet gelukt om de vectoren op hun eigen as te transformeren maar schoten ze steeds van hun plaats. Dit komt waarschijnlijk vanwege de viewbox die om een SVG zit. 
-	Ik weet hoe je svg vectoren van plaats kan veranderen dmv css (transform: translate(px, px);) alleen heb ik dit niet uitgevoerd in mijn media querys omdat ik maar liefst 90 losse vectoren/shapes had en het ongelofelijk veel tijd zou innemen om deze allemaal voor 3 media querys in te stellen. Ik heb van alle vormen groepen gemaakt d.m.v. de <g> tag in de hoop dat je een groep als geheel van plaats zou kunnen veranderen met transform, alleen dit was helaas niet het geval. Ik had graag meer tijd besteed aan het zoeken naar een oplossing hiervoor en meer te verdiepen in wat je allemaal wél met de <g> tag kan, want deze kon bijzonder weinig CSS hebben merkte ik. Helaas heb ik niet genoeg tijd gehad om hierachter te komen.
-	Ik had graag nog gekeken naar hoe je op mobiel iets kan laten gebeuren door van verticaal naar landscape te gaan, alleen ook hier had ik geen tijd meer voor.


# Bronnen
Kunstwerk zelf: https://designarchives.aiga.org/#/entries/%2Bcollections%3A%22B.%20Martin%20Pedersen%22/_/detail/relevance/asc/8/7/21995/the-american-way-magazine-march-1970/1
Info over auteur kunstwerk: http://adcglobal.org/hall-of-fame/b-martin-pedersen/
Info over kunstwerk: https://americanway.com/en/features/2017/05/the-big-50

Code:
Toetsenbord input: https://stackoverflow.com/questions/14261062/js-function-when-keyboard-key-is-pressed
Drag opbject: https://www.w3schools.com/howto/howto_js_draggable.asp 
