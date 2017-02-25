function titleCase(str) {
  str = str.toLowerCase().split(' ').map(function(word) { // Traverse through each word
    return (word.charAt(0).toUpperCase() + word.slice(1)); // Convert first character to uppercase
  });
  str = str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
