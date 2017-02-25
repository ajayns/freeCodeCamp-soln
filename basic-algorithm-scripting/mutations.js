function mutation(arr) {
  // Convert input strings to lowercase for comparison
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for(var i=0; i<test.length; ++i) {
    // Traverse the string and searches for position of occurence of each char of string test
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  // if all test cases are passed return true
  return true;
}

mutation(["hello", "hey"]);
