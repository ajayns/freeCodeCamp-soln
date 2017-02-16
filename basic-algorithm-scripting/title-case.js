function titleCase(str) {
  str = str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  });
  str = str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
