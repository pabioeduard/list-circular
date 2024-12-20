"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listaCircular_1 = require("./listaCircular");
const list = new listaCircular_1.listaCircular();
list.add(10);
list.add(15);
list.add(20);
list.add(25);
list.add(30);
console.log("Lista inicial: ", list.toArray());
list.remove(20);
console.log("Após remover 20: ", list.toArray());
console.log("Encontrar 10: ", list.find(10));
console.log("Tamanho da lista: ", list.getSize());
