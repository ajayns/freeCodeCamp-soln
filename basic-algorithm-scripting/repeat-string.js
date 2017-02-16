
function repeatStringNumTimes(str, num) {
  var s = str;
  if(num <= 0)
    str = "";
  else {
    for(var i=0; i<num-1; ++i) {
      str = str.concat(s);
    }
  }
  return str;
}

repeatStringNumTimes("abc", 3);
