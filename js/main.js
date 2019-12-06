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

});