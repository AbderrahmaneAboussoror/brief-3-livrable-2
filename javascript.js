var menu = document.getElementById("nav-links");
function show(){
    menu.style.display = "block";
    setTimeout(function(){
        menu.style.right = "0";
    },0.1000);
}
function hide(){
    menu.style.right = "-200px";
    setTimeout(function(){
        menu.style.display = "none";
    },1000);
}


// filtrage
var select1 = document.querySelector("select");
var cols;
function test(){
    if(select1.options[select1.selectedIndex].text == "Toutes les categories"){
        cols = document.getElementsByClassName("menu-col");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Salades"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("salade");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Sushi"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("sushi");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Boissons"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("soda");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Plats"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("plat");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
}

//panier
var panier= document.getElementById("menuPanier");
var cocaqu = 1, sevenqu = 1, pepsiqu = 1, salade1qu = 1, salade2qu = 1, salade3qu = 1, totalP = 0;

function coca(){
    var coc = document.querySelectorAll("#cocaCola");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "cocaCola");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "CocaCola";
    text2.innerText = "x"+cocaqu;
    text3.innerText = "15Dh";
    totalP += 15;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    panier.appendChild(div);
    cocaqu++;
}

function sevenup(){
    var coc = document.querySelectorAll("#sevenupp");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "sevenupp");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "7up";
    text2.innerText = "x"+sevenqu;
    text3.innerText = "17Dh";
    totalP += 17;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    panier.appendChild(div);
    sevenqu++;
}

function pepsi(){
    var coc = document.querySelectorAll("#pepsiS");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "pepsiS");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "Pepsi";
    text2.innerText = "x"+pepsiqu;
    text3.innerText = "20Dh";
    totalP+=20;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    panier.appendChild(div);
    pepsiqu++;
}

function salade1(){
    var coc = document.querySelectorAll("#SM");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "SM");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "Salade Mexicaine";
    text2.innerText = "x"+salade1qu;
    text3.innerText = "30Dh";
    totalP+=30;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    panier.appendChild(div);
    salade1qu++;
}

function salade2(){
    var coc = document.querySelectorAll("#SH");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "SH");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "Salade Hawaienne";
    text2.innerText = "x"+salade2qu;
    text3.innerText = "40Dh";
    totalP += 40;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    panier.appendChild(div);
    salade2qu++;
}

function salade3(){
    var coc = document.querySelectorAll("#SN");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "SN");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "Salade Niçoise";
    text2.innerText = "x"+salade3qu;
    text3.innerText = "25Dh";
    totalP += 25;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    panier.appendChild(div);
    salade3qu++;
}

//total
function total(){
    alert(totalP);
}