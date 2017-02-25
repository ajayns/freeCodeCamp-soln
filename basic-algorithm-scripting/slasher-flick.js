function slasher(arr, howMany) {
  arr = arr.slice(howMany, arr.length); // Slice from howMany till array end
  return arr;
}

slasher([1, 2, 3], 2);
