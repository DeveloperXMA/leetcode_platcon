import { LinkedList } from './Types/LinkedList';

export type TFunction<T, R> = (t: T) => R;

export const initLinkedList = ():LinkedList<number> => {
  
  let list = new LinkedList<number>();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);

  return list;
}