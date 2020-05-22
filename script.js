console.log("hello");

var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===68){
        dutchit();
    }
});

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

function kleur() {
//    document.getElementsByClassName("st5").className = "test";
//    document.getElementsByClassName("st5").classList.add('test');
//    document.getElementById("gucci").classList.add('test');
    "use strict";
    document.getElementById("gucci").style.fill = 'yellow';
}


function color() {
//    document.getElementsByClassName("st5").className = "test";
//    document.getElementsByClassName("st5").classList.add('test');
//    document.getElementById("gucci").classList.add('test');
    "use strict";
    document.getElementsByClassName("st5").style.fill = 'yellow';
}

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