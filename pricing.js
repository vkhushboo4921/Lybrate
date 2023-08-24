var calculatedPrice1 = document.getElementById('calculatedPrice1');

function planSelect11() {
    calculatedPrice1.innerHTML = null;
    let vick = 0;
    if (document.getElementById("radio101").checked) {
        vick = 0.9;
    } else {
        vick = 0.75;
    }
    calculatedPrice1.innerHTML = `₹ ${Math.round(888 * vick)}`;
    document.getElementById("box12").style.background = "rgb(239,235,235)";
    document.getElementById("box12").style.color = "black";
    document.getElementById("box13").style.background = "rgb(239,235,235)";
    document.getElementById("box13").style.color = "black";
    document.getElementById("box11").style.background = "rgb(250, 128, 114)";
    document.getElementById("box11").style.color = "white";

    function valueChange11() {
        document.getElementById("calculatedPrice1").innerHTML = `₹ ${Math.round(888*0.9)}`
    }
    function valueChange12() {
        document.getElementById("calculatedPrice1").innerHTML = `₹ ${Math.round(888*0.75)}`
    }
    document.getElementById("radio101").addEventListener('click', valueChange11);
    document.getElementById("radio102").addEventListener('click', valueChange12);
}
planSelect11();

function planSelect12() {
    calculatedPrice1.innerHTML = null;
    let vick = 0;
    if (document.getElementById("radio101").checked) {
        vick = 0.9;
    } else {
        vick = 0.75;
    }
    calculatedPrice1.innerHTML = `₹ ${Math.round(1299 * vick)}`;
    document.getElementById("box11").style.background = "rgb(239,235,235)";
    document.getElementById("box11").style.color = "black";
    document.getElementById("box13").style.background = "rgb(239,235,235)";
    document.getElementById("box13").style.color = "black";
    document.getElementById("box12").style.background = "rgb(250, 128, 114)";
    document.getElementById("box12").style.color = "white";

     function valueChange11() {
        document.getElementById("calculatedPrice1").innerHTML = `₹ ${Math.round(1299*0.9)}`
    }
    function valueChange12() {
        document.getElementById("calculatedPrice1").innerHTML = `₹ ${Math.round(1299*0.75)}`
    }
    document.getElementById("radio101").addEventListener('click', valueChange11);
    document.getElementById("radio102").addEventListener('click', valueChange12);
}
function planSelect13() {
    calculatedPrice1.innerHTML = null;
    let vick = 0;
    if (document.getElementById("radio101").checked) {
        vick = 0.9;
    } else {
        vick = 0.75;
    }
    calculatedPrice1.innerHTML = `₹ ${Math.round(1499 * vick)}`;
    document.getElementById("box11").style.background = "rgb(239,235,235)";
    document.getElementById("box11").style.color = "black";
    document.getElementById("box12").style.background = "rgb(239,235,235)";
    document.getElementById("box12").style.color = "black";
    document.getElementById("box13").style.background = "rgb(250, 128, 114)";
    document.getElementById("box13").style.color = "white";

    function valueChange11() {
        document.getElementById("calculatedPrice1").innerHTML = `₹ ${Math.round(1499*0.9)}`
    }
    function valueChange12() {
        document.getElementById("calculatedPrice1").innerHTML = `₹ ${Math.round(1499*0.75)}`
    }
    document.getElementById("radio101").addEventListener('click', valueChange11);
    document.getElementById("radio102").addEventListener('click', valueChange12);

}

let calculatedPrice2 = document.getElementById('calculatedPrice2');
function planSelect21() {
    calculatedPrice2.innerHTML = null;
    let vick = 0;
    if (document.getElementById("radio201").checked) {
        vick = 0.9;
    } else {
        vick = 0.5;
    }
    calculatedPrice2.innerHTML = `₹ ${Math.floor(1499 * vick)}`;
    document.getElementById("box22").style.background = "rgb(239,235,235)";
    document.getElementById("box22").style.color = "black";
    document.getElementById("box21").style.background = "rgb(250, 128, 114)";
    document.getElementById("box21").style.color = "white";

    function valueChange11() {
        document.getElementById("calculatedPrice2").innerHTML = `₹ ${Math.floor(1499*0.9)}`
    }
    function valueChange12() {
        document.getElementById("calculatedPrice2").innerHTML = `₹ ${Math.floor(1499*0.5)}`
    }
    document.getElementById("radio201").addEventListener('click', valueChange11);
    document.getElementById("radio202").addEventListener('click', valueChange12);
}
planSelect21();

function planSelect22() {
    calculatedPrice2.innerHTML = null;
    let vick = 0;
    if (document.getElementById("radio201").checked) {
        vick = 0.9;
    } else {
        vick = 0.5;
    }
    calculatedPrice2.innerHTML = `₹ ${Math.floor(2799 * vick)}`;
    document.getElementById("box21").style.background = "rgb(239,235,235)";
    document.getElementById("box21").style.color = "black";
    document.getElementById("box22").style.background = "rgb(250, 128, 114)";
    document.getElementById("box22").style.color = "white";

     function valueChange11() {
        document.getElementById("calculatedPrice2").innerHTML = `₹ ${Math.floor(2799*0.9)}`
    }
    function valueChange12() {
        document.getElementById("calculatedPrice2").innerHTML = `₹ ${Math.floor(2799*0.5)}`
    }
    document.getElementById("radio201").addEventListener('click', valueChange11);
    document.getElementById("radio202").addEventListener('click', valueChange12);
}

