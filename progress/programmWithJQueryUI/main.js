/*
    Alle Funktionen hier
 */


//Variablen
let count = 0;

//Progressbar
$( "#progressbar1" ).progressbar({
    value: count
});
//Button in Tab1
$( "#button1" ).button();


function add1() {
    count = count +10;
    if (count > 100){
        count = 0;
    }
    $( "#progressbar1" ).progressbar( "value", count )
    $("#progressbar1").css({ 'background': 'LightYellow'});
    $("#progressbar1 > div").css({ 'background': 'Orange' });
}