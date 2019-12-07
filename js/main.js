$(document).ready(function(){
    
    var naslovi = ["All about the teams", "All about the players","All about the the league"];
    var brojac = 0;
    var naslov = $("#baner h1");
    setInterval(promena, 3000);
    function promena() {
        naslov.fadeOut(function(){
            naslov.html(naslovi[brojac]);
            brojac++;
            if(brojac == naslovi.length) { brojac = 0; }
            naslov.fadeIn();
        });
    }

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

    var showmore = document.getElementById("showmore");
    var pocetno = document.getElementById("scorers").innerHTML;
    showmore.addEventListener("click",function(){
        if(showmore.innerHTML=="Show more"){
            document.getElementById("scorers").innerHTML+="<tr class='s_tablerow'><td>11</td><td>Mohamed Salah</td><td>Liverpool</td><td>15</td><td>6</td><td>3</td></tr><tr class='s_tablerow'><td>12</td><td>Arnold Barnes</td><td>Aston Villa</td><td>14</td><td>6</td><td>0</td></tr><tr class='s_tablerow'><td>13</td><td>Harry Wilson</td><td>Bournemouth</td><td>14</td><td>6</td><td>0</td></tr><tr class='s_tablerow'><td>14</td><td>Chandler Wood</td><td>Burnley</td><td>12</td><td>6</td><td>1</td></tr><tr class='s_tablerow'><td>15</td><td>Bernardo Silva</td><td>Manchester City</td><td>13</td><td>5</td><td>4</td></tr><tr class='s_tablerow'><td>16</td><td>Jamie Maddison</td><td>Leicester</td><td>12</td><td>5</td><td>2</td></tr><tr class='s_tablerow'><td>17</td><td>Christian Pulisic</td><td>Chelsea</td><td>15</td><td>5</td><td>2</td></tr><tr class='s_tablerow'><td>18</td><td>Richarlison</td><td>Everton</td><td>11</td><td>5</td><td>1</td></tr><tr class='s_tablerow'><td>19</td><td>Dele Alli</td><td>Tottenham</td><td>13</td><td>5</td><td>1</td></tr><tr class='s_tablerow'><td>20</td><td>Gabriel Jesusi</td><td>Manchester City</td><td>12</td><td>5</td><td>0</td></tr>"
            var scorers = $("#scorers .s_tablerow:odd");
            scorers.addClass("sivRed");
            showmore.innerHTML = "Show less"
        }
        else if(showmore.innerHTML=="Show less"){
            document.getElementById("scorers").innerHTML = pocetno;
            var scorers = $("#scorers .s_tablerow:odd");
            scorers.addClass("sivRed");
            showmore.innerHTML = "Show more";
        }

    });
    
    var timovi = $("#table .tablerow:odd");
    timovi.addClass("sivRed");

    var scorers = $("#scorers .s_tablerow:odd");
    scorers.addClass("sivRed");

    var weekId=[15,14,13];
    for (let i = 0; i<weekId.length; i++){
        if(i==0) document.getElementById("resultsWeeks").innerHTML+= "<li id='week"+weekId[i]+"' class='aktivan'>Week "+weekId[i]+"</li>";
        else document.getElementById("resultsWeeks").innerHTML+= "<li id='week"+weekId[i]+"'>Week "+weekId[i]+"</li>";
    }

    var results = $("#tabelaResults tr:even");
    results.addClass("sivRed");
    
    $("#results ul li").click(function(){
        $("#results ul li").removeClass("aktivan");
        $(this).addClass("aktivan");
    });

    var resultspocetno = document.getElementById("tabelaResults").innerHTML;
    document.getElementById("week15").addEventListener("click",function(){
        document.getElementById("tabelaResults").innerHTML = resultspocetno;
    });
    document.getElementById("week14").addEventListener("click",function(){
        document.querySelector("#tabelaResults tr:first-child .resultsSlikaDomacin img").setAttribute("src","img/manunited.png");
        document.querySelector("#tabelaResults tr:first-child .resultsDomacin").innerHTML = "Manchester United";
        document.querySelector("#tabelaResults tr:first-child .resultsRezultat").innerHTML = "2 - 2"
        document.querySelector("#tabelaResults tr:first-child .resultsGost").innerHTML = "Aston Villa"
        document.querySelector("#tabelaResults tr:first-child .resultsSlikaGost img").setAttribute("src","img/astonvilla.png");

        document.querySelector("#tabelaResults tr:nth-child(2) .resultsSlikaDomacin img").setAttribute("src","img/leicester.png");
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsDomacin").innerHTML = "Leicester";
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsRezultat").innerHTML = "2 - 1"
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsGost").innerHTML = "Everton"
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsSlikaGost img").setAttribute("src","img/everton.png");

        document.querySelector("#tabelaResults tr:nth-child(3) .resultsSlikaDomacin img").setAttribute("src","img/norwich.png");
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsDomacin").innerHTML = "Norwich";
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsRezultat").innerHTML = "2 - 2"
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsGost").innerHTML = "Arsenal"
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsSlikaGost img").setAttribute("src","img/arsenal.png");

        document.querySelector("#tabelaResults tr:nth-child(4) .resultsSlikaDomacin img").setAttribute("src","img/wolves.png");
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsDomacin").innerHTML = "Wolves";
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsRezultat").innerHTML = "1 - 1"
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsGost").innerHTML = "Sheffield United"
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsSlikaGost img").setAttribute("src","img/sheffield.png");

        document.querySelector("#tabelaResults tr:nth-child(5) .resultsSlikaDomacin img").setAttribute("src","img/southampton.png");
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsDomacin").innerHTML = "Southampton";
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsRezultat").innerHTML = "2 - 1"
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsGost").innerHTML = "Watford"
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsSlikaGost img").setAttribute("src","img/watford.png");

        document.querySelector("#tabelaResults tr:nth-child(6) .resultsSlikaDomacin img").setAttribute("src","img/tottenham.png");
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsDomacin").innerHTML = "Tottenham";
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsRezultat").innerHTML = "3 - 2"
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsGost").innerHTML = "Bournemouth"
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsSlikaGost img").setAttribute("src","img/bournemouth.png");

        document.querySelector("#tabelaResults tr:nth-child(7) .resultsSlikaDomacin img").setAttribute("src","img/liverpul.png");
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsDomacin").innerHTML = "Liverpool";
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsRezultat").innerHTML = "2 - 1"
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsGost").innerHTML = "Brighton"
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsSlikaGost img").setAttribute("src","img/brighton.png");

        document.querySelector("#tabelaResults tr:nth-child(8) .resultsSlikaDomacin img").setAttribute("src","img/chelsea.png");
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsDomacin").innerHTML = "Chelsea";
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsRezultat").innerHTML = "0 - 1"
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsGost").innerHTML = "West Ham"
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsSlikaGost img").setAttribute("src","img/westham.png");

        document.querySelector("#tabelaResults tr:nth-child(9) .resultsSlikaDomacin img").setAttribute("src","img/burnley.png");
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsDomacin").innerHTML = "Burnley";
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsRezultat").innerHTML = "0 - 2"
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsGost").innerHTML = "Crystal Palace"
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsSlikaGost img").setAttribute("src","img/palace.png");

        document.querySelector("#tabelaResults tr:nth-child(10) .resultsSlikaDomacin img").setAttribute("src","img/newcastle.png");
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsDomacin").innerHTML = "Newcastle";
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsRezultat").innerHTML = "2 - 2"
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsGost").innerHTML = "Manchester City"
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsSlikaGost img").setAttribute("src","img/mancity.png");
    });

    document.getElementById("week13").addEventListener("click",function(){
        document.querySelector("#tabelaResults tr:first-child .resultsSlikaDomacin img").setAttribute("src","img/astonvilla.png");
        document.querySelector("#tabelaResults tr:first-child .resultsDomacin").innerHTML = "Aston Villa";
        document.querySelector("#tabelaResults tr:first-child .resultsRezultat").innerHTML = "2 - 0"
        document.querySelector("#tabelaResults tr:first-child .resultsGost").innerHTML = "Newcastle"
        document.querySelector("#tabelaResults tr:first-child .resultsSlikaGost img").setAttribute("src","img/newcastle.png");

        document.querySelector("#tabelaResults tr:nth-child(2) .resultsSlikaDomacin img").setAttribute("src","img/manunited.png");
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsDomacin").innerHTML = "Manchester United";
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsRezultat").innerHTML = "3 - 3"
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsGost").innerHTML = "Sheffield United"
        document.querySelector("#tabelaResults tr:nth-child(2) .resultsSlikaGost img").setAttribute("src","img/sheffield.png");

        document.querySelector("#tabelaResults tr:nth-child(3) .resultsSlikaDomacin img").setAttribute("src","img/mancity.png");
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsDomacin").innerHTML = "Manchester City";
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsRezultat").innerHTML = "2 - 1"
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsGost").innerHTML = "Chelsea"
        document.querySelector("#tabelaResults tr:nth-child(3) .resultsSlikaGost img").setAttribute("src","img/chelsea.png");

        document.querySelector("#tabelaResults tr:nth-child(4) .resultsSlikaDomacin img").setAttribute("src","img/Brighton.png");
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsDomacin").innerHTML = "Brighton";
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsRezultat").innerHTML = "0 - 2"
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsGost").innerHTML = "Leicester"
        document.querySelector("#tabelaResults tr:nth-child(4) .resultsSlikaGost img").setAttribute("src","img/leicester.png");

        document.querySelector("#tabelaResults tr:nth-child(5) .resultsSlikaDomacin img").setAttribute("src","img/arsenal.png");
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsDomacin").innerHTML = "Arsenal";
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsRezultat").innerHTML = "2 - 2"
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsGost").innerHTML = "Southampton"
        document.querySelector("#tabelaResults tr:nth-child(5) .resultsSlikaGost img").setAttribute("src","img/southampton.png");

        document.querySelector("#tabelaResults tr:nth-child(6) .resultsSlikaDomacin img").setAttribute("src","img/bournemouth.png");
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsDomacin").innerHTML = "Bournemouth";
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsRezultat").innerHTML = "1 - 2"
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsGost").innerHTML = "Wolves"
        document.querySelector("#tabelaResults tr:nth-child(6) .resultsSlikaGost img").setAttribute("src","img/wolves.png");

        document.querySelector("#tabelaResults tr:nth-child(7) .resultsSlikaDomacin img").setAttribute("src","img/watford.png");
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsDomacin").innerHTML = "Watford";
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsRezultat").innerHTML = "0 - 3"
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsGost").innerHTML = "Burnley"
        document.querySelector("#tabelaResults tr:nth-child(7) .resultsSlikaGost img").setAttribute("src","img/burnley.png");

        document.querySelector("#tabelaResults tr:nth-child(8) .resultsSlikaDomacin img").setAttribute("src","img/palace.png");
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsDomacin").innerHTML = "Crystal Palaca";
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsRezultat").innerHTML = "1 - 2"
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsGost").innerHTML = "Liverpool"
        document.querySelector("#tabelaResults tr:nth-child(8) .resultsSlikaGost img").setAttribute("src","img/liverpul.png");

        document.querySelector("#tabelaResults tr:nth-child(9) .resultsSlikaDomacin img").setAttribute("src","img/everton.png");
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsDomacin").innerHTML = "Everton";
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsRezultat").innerHTML = "0 - 2"
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsGost").innerHTML = "Norwich"
        document.querySelector("#tabelaResults tr:nth-child(9) .resultsSlikaGost img").setAttribute("src","img/norwich.png");

        document.querySelector("#tabelaResults tr:nth-child(10) .resultsSlikaDomacin img").setAttribute("src","img/westham.png");
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsDomacin").innerHTML = "West Ham";
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsRezultat").innerHTML = "2 - 3"
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsGost").innerHTML = "Tottenham"
        document.querySelector("#tabelaResults tr:nth-child(10) .resultsSlikaGost img").setAttribute("src","img/tottenham.png");
    });
     
    var weekFixturesId=[17,18,19];
    for (let i = 0; i<weekId.length; i++){
        if(i==0) document.getElementById("fixturesWeeks").innerHTML+= "<li id='week"+weekFixturesId[i]+"' class='aktivan'>Week "+weekFixturesId[i]+"</li>";
        else document.getElementById("fixturesWeeks").innerHTML+= "<li id='week"+weekFixturesId[i]+"'>Week "+weekFixturesId[i]+"</li>";
    }

    var fixtures = $("#tableFixtures tr:even");
    fixtures.addClass("sivRed");
    
    $("#fixtures ul li").click(function(){
        $("#fixtures ul li").removeClass("aktivan");
        $(this).addClass("aktivan");
    });

    var fixturespocetno = document.getElementById("tableFixtures").innerHTML;
    document.getElementById("week17").addEventListener("click",function(){
        document.getElementById("tableFixtures").innerHTML = fixturespocetno;
    });
    document.getElementById("week18").addEventListener("click",function(){
        document.querySelector("#tableFixtures tr:first-child .fixturesSlikaDomacin img").setAttribute("src","img/everton.png");
        document.querySelector("#tableFixtures tr:first-child .fixturesDomacin").innerHTML = "Everton";
        document.querySelector("#tableFixtures tr:first-child .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:first-child .fixturesGost").innerHTML = "Arsenal"
        document.querySelector("#tableFixtures tr:first-child .fixturesSlikaGost img").setAttribute("src","img/arsenal.png");

        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesSlikaDomacin img").setAttribute("src","img/bournemouth.png");
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesDomacin").innerHTML = "Bournemouth";
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesGost").innerHTML = "Burnley"
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesSlikaGost img").setAttribute("src","img/burnley.png");

        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesSlikaDomacin img").setAttribute("src","img/astonvilla.png");
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesDomacin").innerHTML = "Aston Villa";
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesGost").innerHTML = "Southampton"
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesSlikaGost img").setAttribute("src","img/southampton.png");

        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesSlikaDomacin img").setAttribute("src","img/brighton.png");
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesDomacin").innerHTML = "Brighton";
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesGost").innerHTML = "Sheffield"
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesSlikaGost img").setAttribute("src","img/sheffield.png");

        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesSlikaDomacin img").setAttribute("src","img/newcastle.png");
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesDomacin").innerHTML = "Newcastle";
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesGost").innerHTML = "Crystal Palace"
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesSlikaGost img").setAttribute("src","img/palace.png");

        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesSlikaDomacin img").setAttribute("src","img/norwich.png");
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesDomacin").innerHTML = "Norwich";
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesGost").innerHTML = "Wolves"
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesSlikaGost img").setAttribute("src","img/wolves.png");

        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesSlikaDomacin img").setAttribute("src","img/mancity.png");
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesDomacin").innerHTML = "Manchester City";
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesDate").innerHTML = "21.12"
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesGost").innerHTML = "Leicester"
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesSlikaGost img").setAttribute("src","img/leicester.png");

        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesSlikaDomacin img").setAttribute("src","img/manunited.png");
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesDomacin").innerHTML = "Manchester United";
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesDate").innerHTML = "22.12"
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesGost").innerHTML = "Watford"
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesSlikaGost img").setAttribute("src","img/watford.png");

        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesSlikaDomacin img").setAttribute("src","img/tottenham.png");
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesDomacin").innerHTML = "Tottenham";
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesDate").innerHTML = "22.12"
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesGost").innerHTML = "Chelsea"
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesSlikaGost img").setAttribute("src","img/chelsea.png");

        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesSlikaDomacin img").setAttribute("src","img/burnley.png");
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesDomacin").innerHTML = "Burnley";
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesDate").innerHTML = "22.12"
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesGost").innerHTML = "Sheffield United"
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesSlikaGost img").setAttribute("src","img/sheffield.png");
    });
    document.getElementById("week19").addEventListener("click",function(){
        document.querySelector("#tableFixtures tr:first-child .fixturesSlikaDomacin img").setAttribute("src","img/tottenham.png");
        document.querySelector("#tableFixtures tr:first-child .fixturesDomacin").innerHTML = "Tottenham";
        document.querySelector("#tableFixtures tr:first-child .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:first-child .fixturesGost").innerHTML = "Brighton"
        document.querySelector("#tableFixtures tr:first-child .fixturesSlikaGost img").setAttribute("src","img/brighton.png");

        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesSlikaDomacin img").setAttribute("src","img/everton.png");
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesDomacin").innerHTML = "Everton";
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesGost").innerHTML = "Burnley"
        document.querySelector("#tableFixtures tr:nth-child(2) .fixturesSlikaGost img").setAttribute("src","img/burnley.png");

        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesSlikaDomacin img").setAttribute("src","img/watford.png");
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesDomacin").innerHTML = "Watford";
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesGost").innerHTML = "Sheffield United"
        document.querySelector("#tableFixtures tr:nth-child(3) .fixturesSlikaGost img").setAttribute("src","img/sheffield.png");

        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesSlikaDomacin img").setAttribute("src","img/bournemouth.png");
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesDomacin").innerHTML = "Bournemouth";
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesGost").innerHTML = "Arsenal"
        document.querySelector("#tableFixtures tr:nth-child(4) .fixturesSlikaGost img").setAttribute("src","img/arsenal.png");

        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesSlikaDomacin img").setAttribute("src","img/palace.png");
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesDomacin").innerHTML = "Crystal Palace";
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesGost").innerHTML = "West Ham"
        document.querySelector("#tableFixtures tr:nth-child(5) .fixturesSlikaGost img").setAttribute("src","img/westham.png");

        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesSlikaDomacin img").setAttribute("src","img/chelsea.png");
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesDomacin").innerHTML = "Chelsea";
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesGost").innerHTML = "Southampton"
        document.querySelector("#tableFixtures tr:nth-child(6) .fixturesSlikaGost img").setAttribute("src","img/southampton.png");

        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesSlikaDomacin img").setAttribute("src","img/astonvilla.png");
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesDomacin").innerHTML = "Aston Villa";
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesGost").innerHTML = "Norwich"
        document.querySelector("#tableFixtures tr:nth-child(7) .fixturesSlikaGost img").setAttribute("src","img/norwich.png");

        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesSlikaDomacin img").setAttribute("src","img/manunited.png");
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesDomacin").innerHTML = "Manchester United";
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesGost").innerHTML = "Newcastle"
        document.querySelector("#tableFixtures tr:nth-child(8) .fixturesSlikaGost img").setAttribute("src","img/newcastle.png");

        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesSlikaDomacin img").setAttribute("src","img/leicester.png");
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesDomacin").innerHTML = "Leicester";
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesDate").innerHTML = "26.12"
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesGost").innerHTML = "Liverpool"
        document.querySelector("#tableFixtures tr:nth-child(9) .fixturesSlikaGost img").setAttribute("src","img/liverpul.png");

        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesSlikaDomacin img").setAttribute("src","img/wolves.png");
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesDomacin").innerHTML = "Wolves";
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesDate").innerHTML = "27.12"
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesGost").innerHTML = "Manchester City"
        document.querySelector("#tableFixtures tr:nth-child(10) .fixturesSlikaGost img").setAttribute("src","img/mancity.png");
    });
});