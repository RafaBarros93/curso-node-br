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

const user = getUser();

user.then(function(resultado) {
    return getTelephone(resultado.id).then(function resolveTelephone(result) {
        return {
            user: {
                name: resultado.name,
                id: resultado.id
            },
            telefone: result
        };
    });
})
    .then(function(resultado) {
        const address = getAddressAsync(resultado.user.userId);
        return address.then(function resolveAddress(result) {
            return {
                user: resultado.user,
                phone: resultado.telefone,
                endereco: result
            };
        });
    })

    .then(function(resultado) {
        console.log("Resultado:", resultado);
    })
    .catch(function(error) {
        console.error("Deu ruim ", errro);
    });
// Para manipular sucess usamos a função .then()
//Para manipular erro usamos a função .catch()
