const cart = [];


function addProd() {
        let prod = prompt("Inserisci i tuoi prodotti:");
        
        if (prod === null || prod === " " ) {
            alert("Per favore seleziona un prodotto!")
        } if (cart.includes(prod) == true) {
            alert("Hai già selezionato questo prodotto: " + prod)
        } else {
            alert("Prodotto aggiunto: " + prod)
            cart.push(prod);
        }

        console.log(cart)
    }   






//Scrivere una funzione richiamabile dalla pagina html tramite 
//l’inserimento di un pulsante(<button></button>)
//che memorizzi all’interno di un array chiamato cart l’input di un prompt.

//Sviluppare anche la logica che preveda un avviso all’utente se l’elemento inserito è già presente nell’array.
//Di seguito la prima riga di codice javascript da inserire nel file js:
