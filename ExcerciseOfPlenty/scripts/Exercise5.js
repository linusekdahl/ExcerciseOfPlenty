//Rita ett flödesschema som läser in ett antal tal och skriver ut dem. Inläsning ska ske tills siffran 0 har matats in.

var tal = [1, 2, 3, 4, 5, 6];

function MinskaTalTillsDetArNoll() {
    for (i = 0; i < tal.length; tal--) {
        alert(tal);
    }
}