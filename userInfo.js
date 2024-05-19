function processArray(arr) {
    // Create a new empty array to store the results
    const newArray = [];
  
    // Loop through each element in the original array
    for (const element of arr) {
      // Check if the element is even
      if (element % 2 === 0) {
        // Square the even number
        newArray.push(element * element);
      } else {
        // Triple the odd number
        newArray.push(element * 3);
      }
    }
  
    // Return the new array with modified elements
    return newArray;
  }
  
  function formatArrayStrings(stringArr, numberArr) {
    // Check if the lengths of both arrays are equal
    if (stringArr.length !== numberArr.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    // Create a new empty array to store formatted strings
    const formattedStrings = [];
  
    // Loop through each element and its corresponding number
    for (let i = 0; i < stringArr.length; i++) {
      const currentString = stringArr[i];
      const correspondingNumber = numberArr[i];
  
      // Modify the string based on the number
      let formattedString;
      if (correspondingNumber % 2 === 0) {
        formattedString = currentString.toUpperCase();
      } else {
        formattedString = currentString.toLowerCase();
      }
  
      // Push the formatted string to the new array
      formattedStrings.push(formattedString);
    }
  
    // Return the new array with formatted strings
    return formattedStrings;
  }
  
  function createUserProfiles(names, formattedNames) {
    // Check if the lengths of both arrays are equal
    if (names.length !== formattedNames.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    // Create an empty array to store user profiles
    const userProfiles = [];
  
    // Auto-incrementing ID counter
    let id = 1;
  
    // Loop through each name and its corresponding formatted name
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = formattedNames[i];
  
      // Create a new user profile object
      constuserProfile = {
        id: id,
        originalName: originalName,
        modifiedName: modifiedName,
      };
  
      // Push the user profile to the array
      userProfiles.push(userProfile);
  
      // Increment the ID counter
      id++;
    }
  
    // Return the array of user profiles
    return userProfiles;
  }
  