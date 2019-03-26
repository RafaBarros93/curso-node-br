const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const nameEvent = "user:click";

myEmitter.on(nameEvent, function(click) {
    console.log("Um usuário clicou", click);
});

/* myEmitter.emit(nameEvent, "barra de rolagem");
myEmitter.emit(nameEvent, "Botão Ok");

let count = 0;

setInterval(() => {
    myEmitter.emit(nameEvent, "Botão Ok " + count++);
}, 1000);
 */

const stdin = process.openStdin();
function main() {
    return new Promise(function(resolve, reject) {
        stdin.addListener("data", function(value) {
            //  console.log(`Voce digitou:${value.toString().trim()}`);
            return resolve(value);
        });
    });
}

main().then(function(resultado) {
    console.log("resultado", resultado.toString());
});
