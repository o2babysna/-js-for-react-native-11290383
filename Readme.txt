This project demonstrates various array manipulation techniques in JavaScript. (Student ID: 11290383)

Functions:

1. processArray(arr):
   - Takes an array of numbers as input.
   - Returns a new array where each even number is squared and each odd number is tripled.

2. formatArrayStrings(stringArr, numberArr):
   - Takes two arrays as input:
     - An array of strings.
     - An array of numbers processed by processArray.
   - Modifies each string based on its corresponding number:
     - Capitalizes the entire string if the number is even.
     - Converts the string to lowercase if the number is odd.
   - Throws an error if the input arrays have different lengths.

3.createUserProfiles(names, formattedNames):
   - Takes two arrays as input:
     - An array of names (strings).
     - An array of formatted names from formatArrayStrings.
   - Returns an array of objects, each containing:
     - `id`: Unique ID (auto-incremented starting from 1).
     - `originalName`: The original name from the `names` array.
     - `modifiedName`: The formatted name from the `formattedNames` array.
   - Throws an error if the input arrays have different lengths.
