function slasher(arr, howMany) {
  arr = arr.slice(howMany, arr.length);
  return arr;
}

slasher([1, 2, 3], 2);
