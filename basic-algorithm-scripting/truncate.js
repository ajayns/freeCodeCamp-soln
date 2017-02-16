function truncateString(str, num) {
  if(str.length <= num) {
    return str;
  }
  else if(num < 3) {
    str = str.slice(0, num) + "...";
  }
  else
    str = str.slice(0,num-3) + "...";

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
