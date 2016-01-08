//Läs in två tal. Testa om det första talet är mer än dubbelt så stort som det andra talet. 
//I så fall ska meddelandet bli: ”För stort tal”.

var tal1 = Number(prompt("Testa om det första talet är mer än dubbelt så stort som det andra talet", 0));
var tal2 = Number(prompt("Skriv in tal nr 2", 0));

function IfNumberIsMoreThenTwiceAsBig() {
    if (tal1 > tal2 * 2)
    {
        alert(tal1 + "Talet är för stort!")
    }
}

IfNumberIsMoreThenTwiceAsBig();