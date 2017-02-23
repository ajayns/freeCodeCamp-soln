function factorialize(num) {
  if (num == 1 || num == 0)
    return 1; // if 1 return 1
  else
    return num*factorialize(num-1); // Keep repeating function to multiply
}

factorialize(5);
