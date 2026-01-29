

class CuentaBancaria{

    #saldo:number=0

    constructor(saldoInicial:number){
        this.#saldo=saldoInicial
    }

    public depositar(valorIngresar:number){
        this.#saldo+=valorIngresar
        return "[DEPÓSITO]"+ " Usted ha ingresado "+valorIngresar+ " Su saldo es de "+this.#saldo
    }

    public retirar(valorRetirada:number){
        if(this.#saldo>valorRetirada){
            this.#saldo-=valorRetirada
            return "[RETIRADA]"+" Usted ha retirado "+valorRetirada+ " Su saldo es de "+this.#saldo
        }
        else{
            return "[RETIRADA] No hay dinero suficiente para retirar"
        }
    }

    public consultar(){
        return "[CONSULTA]"+" Usted tiene "+this.#saldo
    }
}

const cuenta = new CuentaBancaria(100)
console.log(cuenta.consultar())
console.log(cuenta.retirar(25))
console.log(cuenta.depositar(15))
console.log(cuenta.retirar(100))
console.log(cuenta.depositar(100000))
