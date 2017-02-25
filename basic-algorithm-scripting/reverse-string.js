function reverseString(str) {
  // Split to characters, reverse order and then join back
  return str.split("").reverse().join("");
}

reverseString("hello");
