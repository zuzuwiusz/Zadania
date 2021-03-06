var plansza = document.getElementById("plotno"); //Do tej zmiennej znajdujemy za pomocą metody getelement by id nasz element canvas w pliku html.
console.log(plansza);

var obszar = plansza.getContext("2d"); //Tworzymy kontekst na którym będziemy pracować. 

obszar.strokeStyle = "rgb(255,0,0)"; //Definiuje styl obramowania, paleta red, green, blue.

obszar.fillStyle = "rgb(0,255,0)"; //Definiuje styl wypełnienia, peleta, red, green, blue.

obszar.strokeRect(10,10,10,10); //Rysuje prostokąt, metoda ma 4 parametry. 1: współrzędna pozioma, położenie od lewej do prawej.
//1: z lewej w prawo 2: z lewej w dół 3: rozszerza w poziomie 4: wydłuża w pionie

obszar.fillRect(30,30,40,50); //Drugi prostokąt
obszar.fillRect(20,25,55,10); //trzeci
obszar.strokeRect(400,55,50,60); //czwarty
obszar.clearRect(25,25,10,10);

function konsola() {console.log("Ciastko");}



setInterval(konsola,1000);
