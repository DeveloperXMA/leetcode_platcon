export default class Heap {
  private capacity: number;
  private size: number;
  public items: number[];
  
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
  }

  private getLeftChildIndex = (parentIndex: number): number => {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex = (parentIndex: number): number => {
    return 2 * parentIndex + 2;
  }

  private getParentIndex = (childIndex: number): number => {
    return Math.floor((childIndex - 1) / 2);
  }

  private getLeftChild = (parentIndex: number): number => {
    return this.items[this.getRightChildIndex(parentIndex)];
  }

  private getRightChild = (parentIndex: number): number => {
    return this.items[this.getRightChildIndex(parentIndex)];
  }

  private getParent = (childIndex: number): number => {
    return this.items[this.getParentIndex(childIndex)];
  }

  private hasLeftChild = (parentIndex: number): boolean => {
    return this.getLeftChildIndex(parentIndex) < this.capacity;
  }

  private hasRightChild = (parentIndex: number): boolean => {
    return this.getRightChildIndex(parentIndex) < this.capacity;
  }

  private hasParent = (childIndex: number): boolean => {
    return this.getParentIndex(childIndex) >= 0;
  }

  private swap = (indexOne: number, indexTwo: number) => {
    let temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  public peek = (): number => {
    if (this.size === 0) {
      throw new RangeError("Empty heap");
    }
    return this.items[0];
  }

  private ensureExtraCapacity = () => {
    if (this.size > this.capacity) {
      this.poll();
    }
  }

  public add = (item: number) => {
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
    this.ensureExtraCapacity();
  }

  public poll = (): number => {
    if (this.size === 0) {
      throw new RangeError("Empty heap");
    }
    let item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();
    return item;
  }

  private heapifyDown = () => {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.items[index] < this.items[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  private heapifyUp = () => {
    let index = this.size - 1;
    while (this.hasParent(index) && this.getParent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
}