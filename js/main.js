$(document).ready(function(){
    console.log("javascript")
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
});