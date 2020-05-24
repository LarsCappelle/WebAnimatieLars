/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Bron voor dit stukje code: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("tekst"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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

// De const innerxxx code roept alle landen die NIET bij een bepaald land op zodat ze bij de functie van een land kunnen worden vervangen met wit of zwart en daardoor alleen de kleuren van het betreffende land overblijven.
var innerdutch = document.querySelectorAll('.st1, .st2, .st3, .st4, .st5, .st6, .st11, .st12, .st13, .st16, .st17, .st20, .st21, .st22');

var innergerman = document.querySelectorAll('.st1, .st2, .st3, .st6, .st10, .st11, .st12, .st13, .st14, .st15, .st18, .st19, .st21, .st22');

var inneritalian = document.querySelectorAll('.st2, .st3, .st4, .st5, .st7, .st10, .st12, .st14, .st15, .st16, .st17, .st18, .st19, .st20');

var inneramerican = document.querySelectorAll('.st1, .st2, .st3, .st4, .st5, .st6, .st7, .st8, .st9, .st11, .st3, .st12, .st13, .st14, .st15, .st16, .st17, .st18, .st19, .st20 .st21, .st22');

var node;

// De 4 ...it functies replacen wat kleuren en tekst voor het betreffende land.
function dutchit() {
    document.getElementById("landlinks").style.color = 'red';
    document.getElementById("landmidden").style.color = 'white';
    document.getElementById("landmidden").innerHTML = "Dutch";
    document.getElementById("landrechts").style.color = '#24379E';
    document.getElementById("datum").innerHTML = "Maart 1970";
    document.getElementById("ondertitel").innerHTML = "KAN MEN OVERLEVEN? / PEARL BUCK / SAFARI OP HET GEBIED";
    // Code hieronder veranderd alle lijnen per class van kleur door classes te vervangen met elkaar
    inneritalian.forEach(node => {
        node.classList.remove('fillwhite');
    });

    innergerman.forEach(node => {
        node.classList.remove('fillblack');
    });

    innerdutch.forEach(node => {
        node.classList.add('fillwhite');
    });
}

function germanit() {
    document.getElementById("landlinks").style.color = 'black';
    document.getElementById("landmidden").style.color = 'red';
    document.getElementById("landmidden").innerHTML = "German"
    document.getElementById("landrechts").style.color = '#FFA600';
    document.getElementById("datum").innerHTML = "März 1970";
    document.getElementById("ondertitel").innerHTML = "Können Sie überleben?  / PEARL BUCK / SAFARI IM FELD";

    inneritalian.forEach(node => {
        node.classList.remove('fillwhite');
    })

    innerdutch.forEach(node => {
        node.classList.remove('fillwhite');
    })

    innergerman.forEach(node => {
        node.classList.add('fillblack');
    })

}

function italianit() {
    document.getElementById("landlinks").style.color = '#3E7C00';
    document.getElementById("landmidden").style.color = 'white';
    document.getElementById("landmidden").innerHTML = "Italian"
    document.getElementById("landrechts").style.color = 'red';
    document.getElementById("datum").innerHTML = "Marzo 1970";
    document.getElementById("ondertitel").innerHTML = "PUOI SOPRAVVIVERE? / PEARL BUCK / SAFARI NEL CAMPO";

    innerdutch.forEach(node => {
        node.classList.remove('fillwhite');
    })

    innergerman.forEach(node => {
        node.classList.remove('fillblack');
    })

    inneritalian.forEach(node => {
        node.classList.add('fillwhite');
    })
}

function americanit() {
    document.getElementById("landlinks").style.color = '#24379E';
    document.getElementById("landmidden").style.color = 'red';
    document.getElementById("landmidden").innerHTML = "American"
    document.getElementById("landrechts").style.color = '#24379E';
    document.getElementById("datum").innerHTML = "March 1970";
    document.getElementById("ondertitel").innerHTML = "Can man survive? / Pearl Buck / Safari on the range";

    inneritalian.forEach(node => {
        node.classList.remove('fillwhite');
    })

    innergerman.forEach(node => {
        node.classList.remove('fillblack');
    })

    innerdutch.forEach(node => {
        node.classList.remove('fillwhite');
    })
}


// addEvent zorgt voor defination van toets input event.
var addEvent = document.addEventListener ? function (target, type, action) {
    if (target) {
        target.addEventListener(type, action, false);
    }
} : function (target, type, action) {
    if (target) {
        target.attachEvent('on' + type, action, false);
    }
};

// zodra je toets D indrukt, welke gelijk staat aan toetscode 68, wordt de functie dutchit() opgeroepen. Alshet niet toets 68 is, gebeurd er niks.
addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 68) {
        dutchit();
    }
});

// De drie onderstaande addEvents werken hetzelfde als die hierboven maar dan voor ander toetsen.
addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 71) {
        germanit();
    }
});

addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 73) {
        italianit();
    }
});

addEvent(document, 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 65) {
        americanit();
    }
});
