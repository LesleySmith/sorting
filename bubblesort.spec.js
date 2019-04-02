describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
      expect( window.swap.calls.count() ).toEqual( 0 );
    });
    it('handles an array of one item', function(){
        expect( bubbleSort([69]) ).toEqual( [69] );
        expect( window.swap.calls.count() ).toEqual( 0 );
    })
    it('sorts array members in numberical order', function(){
        expect( bubbleSort([12,23,45,6,8,82,42]) ).toEqual( [6,8,12,23,42,45,82] );
        expect( window.swap.calls.count() ).toEqual( 8 );
    })
  });























