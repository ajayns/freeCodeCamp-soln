function isBool(value) {
  return Boolean(value);
}

function bouncer(arr) {

  arr = arr.filter(isBool);

  return arr;
}

bouncer([7, "ate", "", false, 9]);
