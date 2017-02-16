
function chunkArrayInGroups(arr, size) {
  var a = [];
  var b = [];
  for(var i=0; i<arr.length/size; ++i) {
      b = arr.slice(i*size,(i+1)*size);
      a.push(b);
  }
  return a;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
