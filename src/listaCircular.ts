import { DataType } from "./types";

class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class listaCircular<T extends DataType> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size: number = 0;

    add(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail!.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(value: T): boolean {
        if (!this.head) return false;

        let current = this.head;
        let prev = this.tail;
        do {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail!.next = this.head;
                } else if (current === this.tail) {
                    this.tail = prev;
                    this.tail!.next = this.head;
                } else {
                    prev!.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next!;
        } while (current !== this.head);

        return false;
    }

    find(value: T): Node<T> | null {
        if (!this.head) return null;

        let current = this.head;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next!;
        } while (current !== this.head);

        return null;
    }

    toArray(): T[] {
        const elements: T[] = [];
        if (!this.head) return elements;

        let current = this.head;
        do {
            elements.push(current.value);
            current = current.next!;
        } while (current !== this.head);

        return elements;
    }

    getSize(): number {
        return this.size;
    }
}
