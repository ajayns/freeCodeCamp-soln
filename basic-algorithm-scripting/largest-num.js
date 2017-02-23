function largestOfFour(arr) {
   var largestNumber = [0,0,0,0];
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) { // Traverse main array
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) { // Traverse subarray
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) { // Compare size of variables
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex]; // Store if variable is larger
        }
    }
 }
 return largestNumber;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
