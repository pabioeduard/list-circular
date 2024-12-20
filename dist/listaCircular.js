"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaCircular = void 0;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class listaCircular {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.size++;
    }
    remove(value) {
        if (!this.head)
            return false;
        let current = this.head;
        let prev = this.tail;
        do {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                }
                else if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                }
                else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
        return false;
    }
    find(value) {
        if (!this.head)
            return null;
        let current = this.head;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);
        return null;
    }
    toArray() {
        const elements = [];
        if (!this.head)
            return elements;
        let current = this.head;
        do {
            elements.push(current.value);
            current = current.next;
        } while (current !== this.head);
        return elements;
    }
    getSize() {
        return this.size;
    }
}
exports.listaCircular = listaCircular;
