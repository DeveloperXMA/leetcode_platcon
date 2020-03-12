import { 
  quickSort,
  bubbleSort
} from '../src/912.sort-an-array';

describe('sort algorithms testing', () => {

  const array = [2,5,3,6,1];

  it('it should sort array with quick sort', () => {

    const result = quickSort(array);
    expect(result).toEqual([1,3,5,6]);
  })

  it('it should sort array with Bubble sort', () => {
    const result = bubbleSort(array);
    expect(result).toEqual([1,2,3,5,6]);
  })
})