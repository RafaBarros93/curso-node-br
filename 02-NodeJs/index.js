/*
-0 Obter user 
-1 Obter o Número de Telefone de um user
-2 Obter o endereço  do user pelo Id
*/
const util = require("util");
const getAddressAsync = util.promisify(getAddress);

function getUser() {
    // Quando der pal  -> recject(err)
    // Quando sucess  -> resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: "Rafael",
                nascimento: new Date()
            });
        }, 1000);
    });
}

function getTelephone(userId) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                phone: "11654564564",
                ddd: "31"
            });
        }, 2000);
    });
}

function getAddress(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "leontino moreira",
            bairro: "Santa Helena",
            cep: 32015230
        });
    }, 3000);
}

main();

async function main() {
    try {
        console.time("teste-tempo");
        const user = await getUser();
        // const tel = await getTelephone(user.id);
        // const address = await getAddressAsync(user.id);
        const resultado = await Promise.all([
            getTelephone(user.id),
            getAddressAsync(user.id)
        ]);
        const address = resultado[1];
        const tel = resultado[0];
        console.log(`
        Nome:${user.name},
        Telefone:${tel.phone},
        Rua:${address.rua}, ${address.bairro}
        `);
        console.timeEnd("teste-tempo");
    } catch (error) {
        console.error("Deu Biziu", error);
    }
}
