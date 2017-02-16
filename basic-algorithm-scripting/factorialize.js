function factorialize(num) {
  if (num == 1 || num == 0)
    return 1;
  else
    return num*factorialize(num-1);
}

factorialize(5);
