describe('wordOrder', function(){
  it('will output the word from a one word string', function(){
    expect(wordOrder("Hello")).to.equal("Hello");
  });

  it('will output two words from a two word string', function() {
    expect(wordOrder("Hello World")).to.equal("Hello,World");
  });

  it('will output three words from a three word string', function(){
    expect(wordOrder("Hello new world")).to.equal("Hello,new,world");
  });

  it('will output three words as it appears in the string', function() {
    expect(wordOrder("Hello world new")).to.equal("Hello,world,new")
  });

  it('will order the output of words based on their frequency', function() {
    expect(wordOrder("Hello world world")).to.equal("world,Hello")
  });

});
