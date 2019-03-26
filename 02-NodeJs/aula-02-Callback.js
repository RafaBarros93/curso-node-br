"use strict";
/*
-0 Obter user 
-1 Obter o Número de Telefone de um user
-2 Obter o endereço  do user pelo Id
*/
function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: "Rafael",
            nascimento: new Date()
        });
    }, 1000);
}

function getTelephone(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            phone: "11654564564",
            ddd: "31"
        });
    }, 2000);
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

function resolveUser(error, user) {
    try {
        console.log("User:", user);
    } catch (error) {
        console.log("Deu ruim no usuário:", error);
    }
}

function resolveTelephone(error, userId) {
    try {
        console.log("Telephone:", userId);
    } catch (error) {
        console.log("Deu ruim no telefone:", error);
    }
}

function resolveAddress(error, userId) {
    try {
        console.log("Address:", userId);
    } catch (error) {
        console.log("Deu ruim no endrereço:", error);
    }
}

getUser(resolveUser);

getTelephone(resolveUser.id, resolveTelephone);

getAddress(resolveUser.id, resolveAddress);
