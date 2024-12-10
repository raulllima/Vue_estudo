// storage.js

// Armazenando dados globalmente
global.storage = global.storage || {};

// Função para salvar dados
const saveToStorage = (key, value) => {
    global.storage[key] = value;
};

// Função para ler dados
const readFromStorage = (key) => {
    return global.storage[key];
};

module.exports = { saveToStorage, readFromStorage };