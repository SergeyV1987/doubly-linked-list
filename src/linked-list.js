const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null
    }

    append(data) {

        let newNode = new Node();

        newNode.data = data;

        if (this.length === 0) {
            this._head = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
        }

        this._tail = newNode;
        this.length++;

        return this;
    }

    head() {
        return (this._head) ? this._head.data : null;
    }

    tail() {
        return (this._tail) ? this._tail.data : null;
    }

    at(index) {
        let current = this._head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.data;
    }

    insertAt(index, data) {
        let newNode = new Node();
        newNode.data = data;
        let current = this._head;

        if (index === this.length) {
            this.append(data);
            return this;
        }

        for(let i = 0; i <= index; i++) {
            if (i === index) {
                newNode.prev = current.prev;
                newNode.next = current;
                current.prev.next = newNode;
                current.prev = newNode;
            } else {
                current = current.next;
            }
        }

        this.length++;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {

        let current = this._head;

        for(let i = 0; i <= index; i++) {
            if (this.length === 1 && index === 0) {
                this._head = null;
                this._tail = null;
                this.length = 0;
                return this;
            } else if (i === index) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            } else {
                current = current.next;
            }
        }

        this.length--;

        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;

        while(current){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next
        }

        this._tail = this._head;
        this._head = prev;

        return this;
    }

    indexOf(data) {
        let current = this._head;

        for (let i = 0; i < this.length; i++) {
            if (current.data === data) {
                return i;
            } else {
                current = current.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;
