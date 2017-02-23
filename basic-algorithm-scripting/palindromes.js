
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, ''); // Remove all special characters
  var reverseStr = lowRegStr.split('').reverse().join(''); // Split into characters, reverse the array, and join back to word
  return reverseStr === lowRegStr; // Compare both
}



palindrome("eye");
