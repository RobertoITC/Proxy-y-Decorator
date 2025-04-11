// Decorator Pattern - Sistema de Café

interface Bebida {
    getDescripcion(): string;
    getPrecio(): number;
}

class Espresso implements Bebida {
    getDescripcion(): string {
        return "Espresso";
    }

    getPrecio(): number {
        return 2.0;
    }
}

abstract class DecoradorBebida implements Bebida {
    constructor(protected bebida: Bebida) {}
    abstract getDescripcion(): string;
    abstract getPrecio(): number;
}

class Leche extends DecoradorBebida {
    getDescripcion(): string {
        return this.bebida.getDescripcion() + " + Leche";
    }
    getPrecio(): number {
        return this.bebida.getPrecio() + 0.75;
    }
}

class Canela extends DecoradorBebida {
    getDescripcion(): string {
        return this.bebida.getDescripcion() + " + Canela";
    }
    getPrecio(): number {
        return this.bebida.getPrecio() + 0.75;
    }
}

class Chocolate extends DecoradorBebida {
    getDescripcion(): string {
        return this.bebida.getDescripcion() + " + Chocolate";
    }
    getPrecio(): number {
        return this.bebida.getPrecio() + 1.0;
    }
}

// Ejemplo de uso:
let miCafe: Bebida = new Espresso();
miCafe = new Leche(miCafe);
miCafe = new Canela(miCafe);

console.log("Pedido:", miCafe.getDescripcion());
console.log("Precio:", `$${miCafe.getPrecio().toFixed(2)}`);
