class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    head() {
        return this.head;
    }

    tail() {
        if (!this.head) return null;
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        return tail;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        };
        let tail = this.tail();
        tail.next = new Node(value);
    }

    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        };
        let newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    size() {
        if (!this.head) return 0;
        let tail = this.head;
        let counter = 0;
        while (tail) {
            tail = tail.next;
            counter ++;
        }
        return counter;
    }

    at(index) {
        if (index > this.size()) return `There is no node at index of ${index} :(`;
        if (!this.head) return null;
        let target = this.head;
        for (let i = 0; i < index; i++) {
            target = target.next;
        }
        return target ? target : `There is no node at index of ${index} :(`;
    }

    pop() {
        if (!this.head) return null;
        let tail = this.head;
        //while loop stops on the node before the tail
        while (tail.next.next) {
            tail = tail.next;
        }
        tail.next = null;
        return this.head;
    }

    contains(value) {
        if (!this.head) return false;
        let tail = this.head;
        while (tail) {
            if (tail.value === value) {
                return true;
            };
            tail = tail.next;
        }
        return false;
    }

    find(value) {
        if (!this.head) return `There is no node with a value of ${value} :(`;
        let tail = this.head;
        let counter = 0;
        while (tail) {
            if (tail.value === value) {
                return counter;
            };
            tail = tail.next;
            counter ++;
        }
        return `There is no node with a value of ${value} :(`;
    }

    toString() {
        if (!this.head) return '(null)';
        let str = '';
        let tail = this.head;
        while (tail.next) {
            str = `${str} (${tail.value}) ->`
            tail = tail.next
        }
        return `${str} (${tail.value}) -> (null)`
    }
}

let list = new LinkedList()
list.append(2)
list.prepend(5)
list.append(7)
list.append(9)
list.append(11)
list.prepend(-1)
console.log(list.contains(5))
console.log(list.find(3))
console.log(list.at(4))
console.log(list.toString())
