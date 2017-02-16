function confirmEnding(str, target) {
  str = str.split(' ');
  var l = str.length;
  var m = target.length;
  var endChar = str[l-1].substr(-1*m);
  return (endChar == target);
}

confirmEnding("Bastian", "n");
