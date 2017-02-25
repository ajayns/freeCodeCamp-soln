function truncateString(str, num) {
  if(str.length <= num) { // If num is less that size of string, return string itself
    return str;
  }
  else if(num < 3) {
    str = str.slice(0, num) + "..."; // If num less than 3, take num characters from str and add "..."
  }
  else
    str = str.slice(0,num-3) + "..."; // In all other cases, take num-3 characters from str and add "..."

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
