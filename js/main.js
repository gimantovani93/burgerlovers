//-------------------------MENU----------------------------//

// Tutti questi codici sconto se usati applicano il 20%
let discountCodes = ["BURGER", "PRIMOBURGER", "PASQUABURGER"];
let burgerName = "";

// Funzione per calcolare il prezzo dell'hamburger
function calculateMyBurgerPrice(event) {
    event.preventDefault();

    // Ottieni il nome del burger inserito dall'utente
    burgerName = document.getElementById("name-burger").value;

    // Inizializza il prezzo base
    let price = 7.00;

    // Ottieni il tipo di pane selezionato
    let selectedTypeBread = document.getElementById("bread-type").value;

    // Aggiungi il costo del pane selezionato
    switch (selectedTypeBread) {
        case "classic":
            price += 0.00;
            break;
        case "gluten-free":
            price += 1.00;
            break;
        case "integral":
            price += 1.20;
            break;
        case "sesam-seeds":
            price += 0.50;
            break;
    }

    // Verifica quali ingredienti sono selezionati
    let isCheeseSelected = document.getElementById("cheese").checked;
    let isEggSelected = document.getElementById("egg").checked;
    let isMustardSelected = document.getElementById("mustard").checked;
    let isTomatoSelected = document.getElementById("tomato").checked;
    let isLettuceSelected = document.getElementById("lettuce").checked;
    let isKetchupSelected = document.getElementById("ketchup").checked;

    // Ottieni i prezzi degli ingredienti
    let cheesePrice = parseFloat(document.getElementById("cheese-price").innerText);
    let tomatoPrice = parseFloat(document.getElementById("tomato-price").innerText);
    let eggPrice = parseFloat(document.getElementById("egg-price").innerText);
    let lettucePrice = parseFloat(document.getElementById("lettuce-price").innerText);
    let mustardPrice = parseFloat(document.getElementById("mustard-price").innerText);
    let ketchupPrice = parseFloat(document.getElementById("ketchup-price").innerText);

    // Calcola il prezzo totale
    if (isCheeseSelected) {
        price += cheesePrice;
    }
    if (isEggSelected) {
        price += eggPrice;
    }
    if (isMustardSelected) {
        price += mustardPrice;
    }
    if (isTomatoSelected) {
        price += tomatoPrice;
    }
    if (isLettuceSelected) {
        price += lettucePrice;
    }
    if (isKetchupSelected) {
        price += ketchupPrice;
    }

    // Applica lo sconto se disponibile
    let discountCodeUser = document.getElementById("coupon").value;
    let isDiscountCodeAvailable = discountCodes.includes(discountCodeUser);

    if (isDiscountCodeAvailable) {
        price *= 0.80;
        discountCodes = removeElementFromArray(discountCodes, discountCodeUser);
        document.getElementById("result-applied-discount").innerHTML = "Il codice sconto è stato correttamente applicato!";
    } else if (discountCodeUser !== "") {
        document.getElementById("result-applied-discount").innerHTML = "Il codice sconto non è valido!";
    } else {
        document.getElementById("result-applied-discount").innerHTML = "";
    }

    // Visualizza il prezzo
    document.getElementById("price").innerHTML = `Totale: <b>${price.toFixed(2)}€</b>`;

    document.getElementById("burger-summary").innerHTML = `Nome: <b>${burgerName}</b>`;
}

// Funzione per rimuovere un elemento da un array
function removeElementFromArray(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Evento click sul pulsante "Calcola"
document.getElementById("button").addEventListener("click", calculateMyBurgerPrice);


//-------------------------FORM----------------------------//
