
function repeatStringNumTimes(str, num) {
  var s = str;
  if(num <= 0) // if repeat 0 then str = ""
    str = "";
  else {
    for(var i=0; i<num-1; ++i) {
      str = str.concat(s); // Concatenate str to itself num times
    }
  }
  return str;
}

repeatStringNumTimes("abc", 3);
