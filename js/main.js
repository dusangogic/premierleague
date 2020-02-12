$(document).ready(function(){
    
    scroller.init();

    setInterval(promenaNaslova, 3000);

    kreiranjeMenija();

    $("#standings ul li").click(function(){
        $("#standings ul li").removeClass("aktivan");
        $(this).addClass("aktivan");
    });

    document.getElementById("tableDugme").addEventListener("click",function(){
        document.getElementById("table_container").style.display="block";
        document.getElementById("scorers_container").style.display="none";
    });

    document.getElementById("scorersDugme").addEventListener("click",function(){
        document.getElementById("table_container").style.display="none";
        document.getElementById("scorers_container").style.display="block";
    });

    kreiranjeTabeleTimova();

    kreiranjeInicijalneListeStrelaca();

    var showmore = document.getElementById("showmore");
    showmore.addEventListener("click",function(){
        if(showmore.innerHTML == "Show more") { 
            kreiranjeDodatneListeStrelaca(); 
            showmore.innerHTML = "Show less"; 
        }
        else if(showmore.innerHTML == "Show less") { 
            kreiranjeInicijalneListeStrelaca(); 
            showmore.innerHTML = "Show more"; 
        }
    });
    
    kreiranjeResultsWeeks();

    resultsWeek15();
     
    kreiranjeFixturesWeeks();

    fixturesWeek17();

    kreiranjeTopPerformers();

    document.getElementById("button").addEventListener("click",function(){
        validacijaForme();
    });

});

//Kreiranje menija
var linkovi = ["standings","results","fixtures","performers","author"];
var text = ["Standings", "Results", "Fixtures", "Top Performers", "Author"]

function kreiranjeMenija(){
    var menu = document.getElementById("menu");
    var ul = document.createElement("ul");
    for(let i = 0; i<linkovi.length; i++){
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.innerHTML = text[i];
        a.setAttribute("href","#"+linkovi[i]);
        li.appendChild(a);
        ul.appendChild(li);
    }
    menu.appendChild(ul);

    $("#menuBars").click(function(){
        $("#menu").toggle();
    });
    
    $("#menu ul li a").click(function(){
        if($(window).width()<=615) $("#menu").toggle();
    });
}

//Smenjivanje teksta naslova
var naslovi = ["All about the teams", "All about the players","All about the the league"];
var brojac = 0;
var naslov = $("#baner h1");
function promenaNaslova() {
    naslov.fadeOut(function(){
        naslov.html(naslovi[brojac]);
        brojac++;
        if(brojac == naslovi.length) { brojac = 0; }
        naslov.fadeIn();
    });
}

//Zebra
function zebra(redovi){
    $(redovi).addClass("sivRed");
}

//Kreiranje tabele sa timovima
var slike = ["liverpul","leicester","mancity","chelsea","wolves","manunited","palace","tottenham","sheffield","arsenal","newcastle","burnley","brighton","bournemouth","westham","astonvilla","southampton","everton","norwich","watford"]
var naziv = ["Liverpool","Leicester","Manchester City","Chelsea","Wolves","Manchester United","Crystal Palace","Tottenham","Sheffield United","Arsenal","Newcastle","Burnley","Brighton","Bournemouth","West Ham","Aston Villa","Southamtpton","Everton","Norwich","Watford",]
var table2d = [
                [14,11,10,9,5,5,6,5,4,4,5,5,5,4,4,4,4,4,3,1],
                [0,2,3,4,2,4,6,5,4,4,6,7,7,7,7,8,8,9,10,9],
                [1,2,2,2,8,6,3,5,7,7,4,3,3,4,4,3,3,2,2,5],
                [37,35,43,30,21,23,14,25,17,21,15,21,18,18,17,22,17,16,16,9],
                [14,9,17,21,17,18,18,23,15,23,22,24,22,21,25,24,33,27,32,30],
                [23,26,26,9,4,5,-4,2,2,-2,-7,-3,-4,-3,-8,-2,-16,-11,-16,-21],
                [43,35,32,29,23,21,21,21,20,19,19,19,18,18,16,16,15,15,14,11,8],
];

function kreiranjeTabeleTimova(){
    var tabela = document.getElementById("table");
    
    for(let i = 0; i<20; i++){
        var red = document.createElement("tr");
        red.setAttribute("class","tablerow");
        
        var rank = document.createElement("td");
        rank.innerHTML = i+1;
        red.appendChild(rank);
        
        var slikaTd = document.createElement("td");
        var slika = document.createElement("img");
        slika.setAttribute("src","img/"+slike[i]+".png");
        slika.setAttribute("alt",slike[i]);
        slikaTd.appendChild(slika);
        red.appendChild(slikaTd);

        var ime = document.createElement("td");
        ime.innerHTML = naziv[i];
        red.appendChild(ime);

        for(let j=0; j<=6; j++){
            var td = document.createElement("td");
            td.innerHTML = table2d[j] [i];
            red.appendChild(td);
        }
        
        tabela.appendChild(red);

    }
    zebra("#table .tablerow:odd");
}

//Kreiranje liste streleca
var nameTop10 = ["Jamie Vardy","Tammy Abraham","Aubameyang","Sadio Mane","Serio Aguero","Teemu Pukki","Danny Ings","Raheem Sterling","Harry Kane","Raul Jimenez"];
var clubTop10 = ["Leicester","Chelsea","Arsenal","Liverpool","Manchester City","Norwich","Southampton","Manchester City","Tottenham","Wolves"];
var top10_2d = [
                [14,15,13,13,14,15,15,14,12,14],
                [14,11,10,9,9,8,8,8,7,6],
                [3,3,0,4,2,3,1,1,1,3]
];

var nameTop20 = ["Jamie Vardy","Tammy Abraham","Aubameyang","Sadio Mane","Serio Aguero","Teemu Pukki","Danny Ings","Raheem Sterling","Harry Kane","Raul Jimenez","Mohamed Salah","Arnold Barnes","Harry Wilson","Chandler Wood","Bernardo Silva","Jamie Maddison","Christian Pulisic","Richarlison","Dele Alli","Gabriel Jesus"];
var clubTop20 = ["Leicester","Chelsea","Arsenal","Liverpool","Manchester City","Norwich","Southampton","Manchester City","Tottenham","Wolves","Liverpool","Aston Villa","Bournemouth","Burnley","Manchester City","Leicester","Chelsea","Everton","Tottenham","Manchester City"];
var top20_2d = [
                [14,15,13,13,14,15,15,14,12,14,15,14,14,12,13,12,15,11,13,12],
                [14,11,10,9,9,8,8,8,7,6,6,6,6,6,5,5,5,5,5,5],
                [3,3,0,4,2,3,1,1,1,3,3,0,0,1,4,2,2,1,1,0]
];

var lista = document.querySelector("#scorers tbody");

function kreiranjeInicijalneListeStrelaca(){
    lista.innerHTML = "";
    kreiranjeListeStrelaca(nameTop10,clubTop10,top10_2d);
}

function kreiranjeDodatneListeStrelaca(){
    lista.innerHTML = "";
    kreiranjeListeStrelaca(nameTop20,clubTop20,top20_2d);
}

function kreiranjeListeStrelaca(nizName,nizClub, niz2d){  
    for(let i = 0 ; i < nizName.length; i++){
        var red = document.createElement("tr");
        red.setAttribute("class","s_tablerow");

        var rank = document.createElement("td");
        rank.innerHTML = i+1;
        red.appendChild(rank);

        var name = document.createElement("td");
        name.innerHTML = nizName[i];
        red.appendChild(name);

        var club = document.createElement("td");
        club.innerHTML = nizClub[i];
        red.appendChild(club);

        for(let j=0; j<=2; j++){
            var td = document.createElement("td");
            td.innerHTML = niz2d[j] [i];
            red.appendChild(td);
        }

        lista.appendChild(red);
        
    }
    zebra("#scorers .s_tablerow:odd");
}

//Kreiranje lista nedelja
resultsWeeks = [15,14,13];
fixturesWeeks = [17,18,19];

function kreiranjeResultsWeeks(){
    kreiranjeListeNedelja("resultsWeeks",resultsWeeks);

    document.getElementById("resultsWeeks15").addEventListener("click",function(){resultsWeek15();});
    document.getElementById("resultsWeeks14").addEventListener("click",function(){resultsWeek14();});
    document.getElementById("resultsWeeks13").addEventListener("click",function(){resultsWeek13();});
}

function kreiranjeFixturesWeeks(){
    kreiranjeListeNedelja("fixturesWeeks",fixturesWeeks);

    document.getElementById("fixturesWeeks17").addEventListener("click",function(){fixturesWeek17();});
    document.getElementById("fixturesWeeks18").addEventListener("click",function(){fixturesWeek18();});
    document.getElementById("fixturesWeeks19").addEventListener("click",function(){fixturesWeek19();});
}

function kreiranjeListeNedelja(ulID,nizNedelja){
    for(let i=0; i<nizNedelja.length; i++){
        var li = document.createElement("li");
        li.setAttribute("id", ulID + nizNedelja[i]);
        if(i==0) li.setAttribute("class","aktivan");
        li.innerHTML = "Week " + nizNedelja[i];
        document.getElementById(ulID).appendChild(li);
    }

    $("#results ul li").click(function(){
        $("#results ul li").removeClass("aktivan");
        $(this).addClass("aktivan");
    });
    

    $("#fixtures ul li").click(function(){
        $("#fixtures ul li").removeClass("aktivan");
        $(this).addClass("aktivan");
    });
}

//Funkcija za kreiranje reda za tabele Results i Fixtures
function kreiranjeReda(type,domacin,gost,text){
    var red = document.createElement("tr");

    var slikaDomacinTd = document.createElement("td");
    slikaDomacinTd.setAttribute("class", type+"SlikaDomacin");
    var slikaDomacin = document.createElement("img");
    slikaDomacin.setAttribute("src","img/"+domacin[1]+".png");
    slikaDomacin.setAttribute("alt",domacin[1]);
    slikaDomacinTd.appendChild(slikaDomacin);
    red.appendChild(slikaDomacinTd);

    var domacinTd = document.createElement("td");
    domacinTd.setAttribute("class", type+"Domacin");
    domacinTd.innerHTML = domacin[0];
    red.appendChild(domacinTd);

    var textTd = document.createElement("td");
    textTd.innerHTML = text;
    red.appendChild(textTd);

    var gostTd = document.createElement("td");
    gostTd.setAttribute("class", type+"Gost");
    gostTd.innerHTML = gost[0];
    red.appendChild(gostTd);

    var slikaGostTd = document.createElement("td");
    slikaGostTd.setAttribute("class", type+"SlikaGost");
    var slikaGost = document.createElement("img");
    slikaGost.setAttribute("src","img/"+gost[1]+".png");
    slikaGost.setAttribute("alt",gost[1]);
    slikaGostTd.appendChild(slikaGost);
    red.appendChild(slikaGostTd);

    document.getElementById(type+"Table").appendChild(red);
   
}

//Timovi za tabele Results i Fixures
var arsenal = ["Arsenal","arsenal"];
var brighton = ["Brighton","brighton"];
var sheffield = ["Sheffield United", "sheffield"];
var newcastle = ["Newastle", "newcastle"];
var liverpool = ["Liverpool", "liverpul"];
var everton = ["Everton", "everton"];
var wolves = ["Wolves", "wolves"];
var westham = ["West Ham", "westham"];
var manunited = ["Manchester United", "manunited"];
var tottenham = ["Tottenham", "tottenham"];
var chelsea = ["Chelsea", "chelsea"];
var astonvilla = ["Aston Villa", "astonvilla"];
var southampton = ["Southamton", "southampton"];
var norwich = ["Norwich", "norwich"];
var leicester = ["Leicester", "leicester"];
var watford = ["Watford", "watford"];
var burnley = ["Burnley", "burnley"];
var mancity = ["Manchester City", "mancity"];
var palace = ["Crystal Palace", "palace"];
var bournemouth = ["Bournemouth", "bournemouth"];


//Funkcije za ispisivanje tabele Results po nedeljama
function resultsWeek15(){
    document.getElementById("resultsTable").innerHTML = "";
    
    kreiranjeReda("results",arsenal,brighton,"1 : 2");
    kreiranjeReda("results",sheffield,newcastle,"0 : 2");
    kreiranjeReda("results",liverpool,everton,"5 : 2");
    kreiranjeReda("results",wolves,westham,"2 : 0");
    kreiranjeReda("results",manunited,tottenham,"2 : 1");
    kreiranjeReda("results",chelsea,astonvilla,"2 : 1");
    kreiranjeReda("results",southampton,norwich,"2 : 1");
    kreiranjeReda("results",leicester,watford,"2 : 0");
    kreiranjeReda("results",burnley,mancity,"1 : 4");
    kreiranjeReda("results",palace,bournemouth,"1 : 0");

    zebra("#resultsTable tr:even");
}

function resultsWeek14(){
    document.getElementById("resultsTable").innerHTML = "";
    
    kreiranjeReda("results",manunited,astonvilla,"2 : 2");
    kreiranjeReda("results",leicester,everton,"2 : 1");
    kreiranjeReda("results",norwich,arsenal,"2 : 2");
    kreiranjeReda("results",wolves,sheffield,"1 : 1");
    kreiranjeReda("results",southampton,watford,"2 : 1");
    kreiranjeReda("results",tottenham,bournemouth,"3 : 2");
    kreiranjeReda("results",liverpool,brighton,"2 : 1");
    kreiranjeReda("results",chelsea,westham,"0 : 1");
    kreiranjeReda("results",burnley,palace,"0 : 2");
    kreiranjeReda("results",newcastle,mancity,"2 : 2");

    zebra("#resultsTable tr:even");
}

function resultsWeek13(){
    document.getElementById("resultsTable").innerHTML = "";
    
    kreiranjeReda("results",astonvilla,newcastle,"2 : 0");
    kreiranjeReda("results",manunited,sheffield,"3 : 3");
    kreiranjeReda("results",mancity,chelsea,"2 : 1");
    kreiranjeReda("results",brighton,leicester,"0 : 2");
    kreiranjeReda("results",arsenal,southampton,"2 : 2");
    kreiranjeReda("results",bournemouth,wolves,"1 : 2");
    kreiranjeReda("results",watford,burnley,"3 : 0");
    kreiranjeReda("results",palace,liverpool,"2 : 1");
    kreiranjeReda("results",everton,norwich,"0 : 2");
    kreiranjeReda("results",westham,tottenham,"2 : 3");

    zebra("#resultsTable tr:even");
}

//Funkcije za ispisivanje tabele Fixtures po nedeljama
function fixturesWeek17(){
    document.getElementById("fixturesTable").innerHTML = "";

    kreiranjeReda("fixtures",liverpool,watford,"14.12");
    kreiranjeReda("fixtures",burnley,newcastle,"14.12");
    kreiranjeReda("fixtures",chelsea,bournemouth,"14.12");
    kreiranjeReda("fixtures",sheffield,astonvilla,"14.12");
    kreiranjeReda("fixtures",leicester,norwich,"14.12");
    kreiranjeReda("fixtures",southampton,westham,"14.12");
    kreiranjeReda("fixtures",manunited,everton,"15.12");
    kreiranjeReda("fixtures",wolves,tottenham,"15.12");
    kreiranjeReda("fixtures",arsenal,mancity,"15.12");
    kreiranjeReda("fixtures",palace,brighton,"15.12");
   

    zebra("#fixturesTable tr:even");
}

function fixturesWeek18(){
    document.getElementById("fixturesTable").innerHTML = "";

    kreiranjeReda("fixtures",everton,arsenal,"21.12");
    kreiranjeReda("fixtures",bournemouth,burnley,"21.12");
    kreiranjeReda("fixtures",astonvilla,southampton,"21.12");
    kreiranjeReda("fixtures",brighton,sheffield,"21.12");
    kreiranjeReda("fixtures",newcastle,palace,"21.12");
    kreiranjeReda("fixtures",norwich,wolves,"21.12");
    kreiranjeReda("fixtures",mancity,leicester,"21.12");
    kreiranjeReda("fixtures",manunited,watford,"22.12");
    kreiranjeReda("fixtures",tottenham,chelsea,"22.12");
    kreiranjeReda("fixtures",burnley,sheffield,"22.12");

    zebra("#fixturesTable tr:even");
}

function fixturesWeek19(){
    document.getElementById("fixturesTable").innerHTML = "";

    kreiranjeReda("fixtures",tottenham,brighton,"26.12");
    kreiranjeReda("fixtures",everton,burnley,"26.12");
    kreiranjeReda("fixtures",watford,sheffield,"26.12");
    kreiranjeReda("fixtures",bournemouth,arsenal,"26.12");
    kreiranjeReda("fixtures",palace,westham,"26.12");
    kreiranjeReda("fixtures",chelsea,southampton,"26.12");
    kreiranjeReda("fixtures",astonvilla,norwich,"26.12");
    kreiranjeReda("fixtures",manunited,newcastle,"26.12");
    kreiranjeReda("fixtures",leicester,liverpool,"26.12");
    kreiranjeReda("fixtures",wolves,mancity,"27.12");

    zebra("#fixturesTable tr:even");
}

//Kreiranje Top Performers sekcije
var performers = ["player", "manager"];
function kreiranjeTopPerformers(){
    for(i=0; i<performers.length; i++){
        var performer = document.createElement("div");
        performer.setAttribute("id","topPerformers"+(i+1));
        performer.setAttribute("class","topPerformers");
        performer.style.background = "url(img/pozadina"+i+".jpg";

        var reveal = document.createElement("p");
        reveal.setAttribute("id", "reveal"+(i+1));
        reveal.innerHTML = "Reveal " + performers[i] + " of the week"
        
        performer.appendChild(reveal);
        document.getElementById("performers").appendChild(performer);
    }

    $("#topPerformers1").click(function(){
        if($("#reveal1").html()=="Reveal player of the week"){
            $(this).fadeOut(function(){
                $(this).css("background","url(img/sterling.jpg");
                $("#reveal1").html("Raheem Sterling");
                $(this).fadeIn();
            });
        }
    });
    $("#topPerformers2").click(function(){
        if($("#reveal2").html()=="Reveal manager of the week"){
            $(this).fadeOut(function(){
                $(this).css("background","url(img/mourinho.jpg");
                $("#reveal2").html("Jose Mourinho");
                $(this).fadeIn();
            });
        }
    });
}


//Validacija forme
var spanFullName = document.getElementById("fullNameSpan");
var spanEmail = document.getElementById("emailSpan");
var spanSubject = document.getElementById("subjectSpan");
var spanMessage = document.getElementById("messageSpan");
var spanPoslato = document.getElementById("poslato");

regFullName = /^[A-Z][a-z]{1,11}(\s[A-Z][a-z]{1,11})+$/
regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validacijaForme(){
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    spanFullName.innerHTML = "";
    spanEmail.innerHTML = "";
    spanSubject.innerHTML = "";
    spanMessage.innerHTML = "";

    var validno = true;
    spanPoslato.innerHTML="";

    if(fullName=="") { spanFullName.innerHTML = "Required"; validno = false;}
    else if(regFullName.test(fullName)==false){spanFullName.innerHTML = "Enter your full name correctly"; validno = false;}

    if(email=="") { spanEmail.innerHTML = "Required"; validno = false;}
    else if(regEmail.test(email)==false){spanEmail.innerHTML = "Enter your email correctly"; validno = false;}

    if(subject=="") { spanSubject.innerHTML = "Required"; validno = false;}
    else if(subject.length<4){spanSubject.innerHTML = "At least 4 characters"; validno = false;}

    if(message=="") { spanMessage.innerHTML = "Required"; validno = false;}
    else if(message.length<10){spanMessage.innerHTML = "At least 10 characters"; validno = false;}

    if(validno){
        spanPoslato.innerHTML="Your message has been sent.";
        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
}