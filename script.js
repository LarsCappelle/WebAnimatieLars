console.log("test");

// addEvent zorgt voor defination van toets input event.
var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

// zodra je toets D indrukt, welke gelijk staat aan toetscode 68, wordt de functie dutchit() opgeroepen. Alshet niet toets 68 is, gebeurd er niks.
addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===68){
        dutchit();
    }
});

// De drie onderstaande addEvents werken hetzelfde als die hierboven maar dan voor ander toetsen.
addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===71){
        germanit();
    }
});

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===73){
        italianit();
    }
});

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===65){
        americanit();
    }
});


//function kleur() {
////    document.getElementsByClassName("st5").className = "test";
////    document.getElementsByClassName("st5").classList.add('test');
////    document.getElementById("gucci").classList.add('test');
//    "use strict";
//    document.getElementById("gucci").style.fill = 'yellow';
//}

// De 4 ...it functies replacen wat kleuren en tekst voor het betreffende land.
function dutchit() {
    document.getElementById("landlinks").style.color = 'red';
    document.getElementById("landmidden").style.color = 'white';
    document.getElementById("landmidden").innerHTML = "Dutch"
    document.getElementById("landrechts").style.color = '#24379E'; 
    document.getElementById("datum").innerHTML = "Maart 1970";
    document.getElementById("ondertitel").innerHTML = "KAN MEN OVERLEVEN? / PEARL BUCK / SAFARI OP HET GEBIED";
    var inner = select.querySelectorAll('.st7');
//    inner.style.fill = 'yellow';
    inner.classList.add('.test');
}

function germanit() {
    document.getElementById("landlinks").style.color = 'black';
    document.getElementById("landmidden").style.color = 'red';
    document.getElementById("landmidden").innerHTML = "German"
    document.getElementById("landrechts").style.color = '#FFA600'; 
    document.getElementById("datum").innerHTML = "März 1970";
    document.getElementById("ondertitel").innerHTML = "Können Sie überleben?  / PEARL BUCK / SAFARI IM FELD";
}

function italianit() {
    document.getElementById("landlinks").style.color = '#3E7C00';
    document.getElementById("landmidden").style.color = 'white';
    document.getElementById("landmidden").innerHTML = "Italian"
    document.getElementById("landrechts").style.color = 'red'; 
    document.getElementById("datum").innerHTML = "Marzo 1970";
    document.getElementById("ondertitel").innerHTML = "PUOI SOPRAVVIVERE? / PEARL BUCK / SAFARI NEL CAMPO";
    document.getElementById("gucci").style.fill = 'yellow'; 
//    document.getElementsByClassName('st5').classList.add('test')
}

function americanit() {
    document.getElementById("landlinks").style.color = '#24379E';
    document.getElementById("landmidden").style.color = 'red';
    document.getElementById("landmidden").innerHTML = "American"
    document.getElementById("landrechts").style.color = '#24379E'; 
    document.getElementById("datum").innerHTML = "March 1970";
    document.getElementById("ondertitel").innerHTML = "Can man survive? / Pearl Buck / Safari on the range";
}


//Bron voor dit stukje code: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("landen"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //Function dragElement zorgt ervoor dat je het betreffende element kan slepen.
      elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
     // Muispositie verkrijgen op moment dat de pagina laad.
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // Zodra je muis beweegt start dragElement
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Bereken de nieuwe positie van je muiscursor.
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Zet betreffende element op de nieuwe positie.
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // Stop met het bewegen van het betreffende element zodra niet meer is ingedrukt.
    document.onmouseup = null;
    document.onmousemove = null;
  }
}