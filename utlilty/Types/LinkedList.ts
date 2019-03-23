import { TFunction } from './../common';
import { Node } from './LinkedListNode';
export class LinkedList<T> {
  private head: Node<T> = null;
  private tail: Node<T> = null;
  private EMPTY_NODE: Node<T> = {
    value: null,
    next: null
  };

  private newNode = (value: T): Node<T> => {
    return { value, next: null };
  };

  private appendToTheEndOfList = (node: Node<T>) => {
    this.tail.next = node;
    this.tail = node;
  };

  private isEmpty = (): boolean => {
    return !this.head;
  };

  public insert = (value: T): LinkedList<T> => {
    const node = this.newNode(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  public *items() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  public append = (value: T): LinkedList<T> => {
    const node = this.newNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.appendToTheEndOfList(node);
    return this;
  };

  public fromArray = (values: T[]): LinkedList<T> => {
    values.forEach(value => this.append(value));
    return this;
  };

  public toArray = (): T[] => {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  };

  public find = (compare:TFunction<T, boolean>): Node<T> => {

    if (this.isEmpty()) {
      return null;
    }

    let node = this.head;

    while(node) {
      if (compare(node.value)) {
        return node;
      }
      node = node.next;
    }

    return null;
  }

  public delete = (value: T): boolean => {
    let deleted: boolean = false;
    if (this.isEmpty()) {
      return deleted;
    }

    deleted = this.deleteFromHead(value);

    let currentHead = this.head || this.EMPTY_NODE;

    while (currentHead.next) {
      if (currentHead.next.value === value) {
        deleted = true;
        currentHead.next = currentHead.next.next;
      } else {
        currentHead = currentHead.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentHead;
    }

    return deleted;
  };

  private deleteFromHead = (value: T): boolean => {
    let deleted: boolean = false;

    while (this.head && this.head.value === value) {
      deleted = true;
      this.head = this.head.next;
    }

    return deleted;
  };
}
