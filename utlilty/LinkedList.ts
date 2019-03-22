export interface Node<T> {
  value: T;
  next?: Node<T>;
}

export class LinkedList<T> {

  private head: Node<T> = null;
  private tail: Node<T> = null;

  private newNode = (value: T): Node<T> => {
    return { value, next: null };
  }

  private appendToTheEndOfList = (node: Node<T>) => {
    this.tail.next = node;
    this.tail = node;
  }

  private isEmpty = (): boolean => {
    return !this.head;
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
  }

  public fromArray = (values: T[]): LinkedList<T> => {
    values.forEach(value => this.append(value));
    return this;
  }

  public toArray = (): T[] => {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }
  
}
