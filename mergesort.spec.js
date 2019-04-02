describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect( split([1, 2, 3, 4, 5, 6]) ).toEqual( [[1, 2, 3], [4, 5, 6]] );
    });
    it('handles an array of one item', function(){
        expect( split([69]) ).toEqual( [69] );
    })
    it('handles an array of odd number of items', function(){
        expect( split([1, 2, 3 ,4 ,5, 6, 7]) ).toEqual( [[1, 2, 3, 4], [5, 6, 7]] );
    })
});

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( mergeArray([1, 2, 3], [4, 5, 6]) ).toEqual( [1, 2, 3, 4, 5, 6] );
    });
    it('is able to merge two unsorted arrays into one sorted array', function(){
        expect( mergeArray([12,23,45], [6,8,42,82]) ).toEqual( [6,8,12,23,42,45,82] );
    });
  });

  describe('Mergesort function', function(){
    it('is able to merge two unsorted arrays into one sorted array', function(){
        expect( mergeSort([12,23,45,6,8,82,42]) ).toEqual( [6,8,12,23,42,45,82] );
    });
  });
