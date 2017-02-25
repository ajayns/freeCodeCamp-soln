function getIndexToIns(arr, num) {
  arr.push(num); // Add num to arr
  arr.sort(function(a,b) { return a-b; }); // Sort in ascending order
  return arr.indexOf(num); // Find and return index of num in arr
}

getIndexToIns([5, 3, 20, 3], 5);
