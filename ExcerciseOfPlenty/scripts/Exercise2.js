//Rita en algoritm där två tal läses in och det första talet skrivs ut om det är störst.

var tal1 = Number(prompt("två tal läses in och det första talet skrivs ut om det är störst", 0));
var tal2 = Number(prompt("Skriv in tal nr 2", 0));

function Print() {
    if  (tal1 > tal2)
    {
        alert( tal1 );
    }
    //else {
    //    alert("Talet är inte störst")
    //}
}

Print();