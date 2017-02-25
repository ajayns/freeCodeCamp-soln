function rot13(str) {
  return  str.split('') // Split str to an array of characters
    .map.call(str,function(char) { // Traverse through each element of str
      x = char.charCodeAt(0);
      if (x < 65 || x > 90)
        return String.fromCharCode(x); // If not an alphabet return itself
      else if (x < 78)
        return String.fromCharCode(x+13); // If less than 'M' then rotate 13 forward
      else
        return String.fromCharCode(x-13); // if greater than 'M' then rotate back 13
  }).join(''); // Join and return string
}

rot13("SERR PBQR PNZC");
