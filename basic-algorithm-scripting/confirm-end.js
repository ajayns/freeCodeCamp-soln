function confirmEnding(str, target) {
  str = str.split(' '); // Split string to words
  var endChar = str[str.length-1].substr(-1*target.length); // Extract end
  return (endChar == target); // Compare if ends are equal
}

confirmEnding("Bastian", "n");
