//Rita en algoritm som läser in ett tal och skriver ut det om det är jämt delbart med 3. (Använd modulo-operatorn).

var tal = 6;
var Sluttal = 0;

function SplitInThree() {
    if (tal % 3 >= 0) {
        Sluttal = tal;
        alert("Talet blir" + Sluttal + "och är Delbart med 3")       
    }


}