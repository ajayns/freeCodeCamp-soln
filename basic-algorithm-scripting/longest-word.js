function findLongestWord(str) {
  var words = str.split(' '); // Split str into words

  var longest = 0;
  for(var i=0; i<words.length; ++i) { // Traverse words
    if(words[i].length>longest) // Compare sizes of word and store in to longest
      longest = words[i].length;
  }

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
