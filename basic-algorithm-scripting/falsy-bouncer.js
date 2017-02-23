function isBool(value) {
  return Boolean(value); // function to check if value is boolean
}

function bouncer(arr) {
  arr = arr.filter(isBool); // filter out boolean variables
  return arr;
}

bouncer([7, "ate", "", false, 9]);
