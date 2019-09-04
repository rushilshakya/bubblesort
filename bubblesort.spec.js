describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one item', function() {
    let array = [1];
    expect(bubbleSort(array)).toEqual([1]);
  });

  it('handles multiple items', function() {
    let array = [3, 2, 1, 5, 6, 7, 9, 11, 10];
    let expectedOutput = [1, 2, 3, 5, 6, 7, 9, 10, 11];
    expect(bubbleSort(array)).toEqual(expectedOutput);
  });

  it('handles different kinds of arrays', function() {
    let array = [1, 4, 3, 5, 6, 8, 7, 50, 20, 32, 55, 46, 27];
    let expectedOutput = [1, 3, 4, 5, 6, 7, 8, 20, 27, 32, 46, 50, 55];
    expect(bubbleSort(array)).toEqual(expectedOutput);
  });

  it('doesnt do anything to a sorted array', function() {
    let array = [1, 2, 3, 4, 5];
    expect(bubbleSort(array)).toEqual(array);
  });
});
