function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); // Bring all arguments to an array
  args.splice(0,1); // Remove source array
  return arr.filter(function(elem) { // Filter out elements comparing values in argument array
    return args.indexOf(elem) === -1; // Compare if each element with argument
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
