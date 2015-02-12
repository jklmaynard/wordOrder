var wordOrder = (function(sentence) {
var newSentence = sentence.split(" ");
var frequencies = {}, word;
var newFrequencies = [];
var sentenceLength = newSentence.length;

  for(var i = 0; i < sentenceLength; i++){
      word = newSentence[i]
      if (word in frequencies) {
        frequencies[word]++;
      } else {
        frequencies[word] = 1
      }
  }

  for(word in frequencies) {
    newFrequencies.push(word)
  }
  console.log("newFrequencies: " + newFrequencies + word)
  var result = newFrequencies.sort(function(a,b){return frequencies[b] - frequencies[a]});
console.log("result: " + result)

return result.join()
// return newSentence.join();


});
