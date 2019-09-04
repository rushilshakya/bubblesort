describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge(...split([1, 5, 2, 3, 4]))).toEqual([1, 2, 3, 4, 5]);
    expect(merge(...split([1, 3, 6, 2, 4, 5]))).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('MergeSort Array function', function() {
  it('is able to MergeSort', function() {
    // your code here
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([7, 1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
