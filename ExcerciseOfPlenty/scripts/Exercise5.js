//Rita ett flödesschema som läser in ett antal tal och skriver ut dem.
//Inläsning ska ske tills siffran 0 har matats in.

var tal = Number(prompt("läser in ett antal tal och skriver ut dem,  ska ske tills siffran 0 har matats in.", 0));

var tals = new Array();
tals.push(tal);

function MinskaTalTillsDetArNoll() {
        while (tal != 0) {
            tal = Number(prompt("Skriv in tal nummer" + (tals.length + 1)));
            tals.push(tal);
        }
        
    }


MinskaTalTillsDetArNoll();