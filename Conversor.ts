type Moneda = "USD" | "EUR" | "GBP"

function convertirDivisa(cantidad:number, monedaOrigen:Moneda, monedaDestino:Moneda){
    switch(monedaOrigen){
        case "EUR":
            switch(monedaDestino){
                case "USD":
                    return cantidad * 1.10;
                case "GBP":
                    return cantidad * 0.85;
                case "EUR":
                    return cantidad;
            }
        case "USD":
            switch(monedaDestino){
                case "EUR":
                    return cantidad * 0.91;
                case "GBP":
                    return cantidad * 0.77;
                case "USD":
                    return cantidad;
            }
        case "GBP":
            switch(monedaDestino){
                case "EUR":
                    return cantidad * 1.18;
                case "USD":
                    return cantidad * 1.30;
                case "GBP":
                    return cantidad;
            }
    }
}
//versión muy rudimentaria

console.log(convertirDivisa(100, "GBP", "USD"));