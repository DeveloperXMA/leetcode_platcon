export interface Node<T> {
  value: T;
  next?: Node<T>;
}

export default class NodeClass<T> implements Node<T> {

  value: T;
  next?: Node<T>;
  
  constructor(node: Node<T>) {
    this.value = node.value;
    this.next = node.next;
  }

  public toArray = (): T[] => {
    const resultArray = new Array<T>();

    while (this.next) {
      resultArray.push(this.value);
      this.next = this.next.next;
    }

    return resultArray;
  }

  public addNext = (node: Node<T>): NodeClass<T> => {
    let curr = this.next;
    while (curr) {
      curr = curr.next;
    }
    curr.next = node;
    return this;
  }

}