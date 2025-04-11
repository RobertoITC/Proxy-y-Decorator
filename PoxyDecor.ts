interface Handler {
    setNext(handler: Handler): Handler;
    handle(requet: string): void;
}

abstract class BaseHandler implements Handler {
    private nextHandler?: Handler;
    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class BasicSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'basic') {
            console.log('Soporte basico: Resuelto por el soporte basico');
            return;
        }
        console.log('Soporte basico: Pasando el probelma al soporte avanzado');
        super.handle(request);
    }
}
class AdvanceSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'advance') {
            console.log('Soporte avanzado: Resuelto por el soporte avanzado');
            return;
        }
        console.log('Soporte avanzado: Pasando el probelma al soporte Experto');
        super.handle(request);
    }
}
class ExpertSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'expert') {
            console.log('Soporte experto: Resuelto por el soporte experto');
            return;
        }
        console.log('Soporte experto: no se pudo solucionar el problema');
    }
}

function main() {
    const basicSupport = new BasicSupport();
    const advanceSupport = new AdvanceSupport();
    const expertSupport = new ExpertSupport();

    basicSupport.setNext(advanceSupport).setNext(expertSupport);

    basicSupport.handle('expert23');
}

main();