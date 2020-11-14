function calc() {
    let nilai = Number(document.getElementById("masukan").value );
    let valas = Number(document.getElementById("valas").value);
    let hasil = nilai * valas;
    document.getElementById("nilai-rupiah").value=hasil;
}

let tab1 = document.getElementById("tab1")
let tab2 = document.getElementById("tab2")
let link1 = document.getElementById("item1")
let link2 = document.getElementById("item2")

function loadThepage(){
    openTab1()
}


function openTab1() {
    link2.className.replace(" active", "");
    link1.className.replace("nav-item active");
    tab2.style.display = "none";
    tab1.style.display = "inline";
}

function openTab2() {
    link1.className.replace(" active", "");
    link2.className.replace("nav-item active");
    tab1.style.display = "none";
    tab2.style.display = "inline";
}

function sendMsg() {
    let msg = document.getElementById("input-chat").value;
    var node = document.createElement("P");       
    var textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    document.getElementById("chatBox").appendChild(node); 
}