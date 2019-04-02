describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array of one item', function(){
        expect( bubbleSort([69]) ).toEqual( [69] );
    })
    it('sorts array members in numberical order', function(){
        expect( bubbleSort([12,23,45,6,8,82,42]) ).toEqual( [6,8,12,23,42,45,82] );
    })
  });



























