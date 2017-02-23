
function chunkArrayInGroups(arr, size) { // Input array and size of chunks
  // Declare variables
  var a = [];
  var b = [];
  for(var i=0; i<arr.length/size; ++i) { // Loop that repeats n/size
      b = arr.slice(i*size,(i+1)*size); // Make an array of size from the source array
      a.push(b); // Store it in an array
  }
  return a;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
