// // Array methods:

// let nums = [5, 3, 5, 7, 8, 3];

// console.log(nums);

// // method # 01
// // convert array to string:

// console.log("Method # 01 in array = " + nums.toString()); // array has been converted to string

// // method # 02:
// // Join Method is used to replace ',' with the word you have written in your join method

// console.log(nums.join(" 'joined' "));

// // method # 03:
// // Pop method in array is used to remove the value at last index from our array.

// console.log(nums.pop());
// console.log(nums); // note: It alwasy modifies the orginal array

// // method # 04:
// // Push method in array is used to include the value at last index of our array.

// console.log(nums.push("Owais")); // it will print the length of our original array , after adding one more index at last element using push method
// console.log(nums);

// // method # 05:
// // Shift method in array is used to remove the value at first index from our array.

// console.log(nums.shift()); // It will return the removed element which was present at nums[0] and will modify the original array
// console.log(nums);

// // method # 06
// // UnShift method in array is used to insert the value at first index of our array.

// console.log(nums.unshift(345)); // It will print the length of 'nums' array which this arrays has , after inserting '345' at the start using unshift method

// // method # 07
// // --------------------- Most Important for interview perspective of JaavaScript array methods---------------------
// // 'Delete' Array Method in JavaScript is used to hide last index element from the array and it will print empty in place of it.
// // Note: I can only see the 'empty' in my broswer's console of Javascript
// // When I will try to print it , then I will see the result as undefined . But the memory is still allocated in Array

// console.log(nums.delete);
// console.log(nums);
// console.log(nums.length);

// // method # 08
// Concatinating/Joining one array to another one:
// Through this function , we can join our array with our another array and that's the concept . here's an example
// let nums_array_1 = [5, 7, 3, 2, 9];
// let nums_array_2 = [55, 74, 33, 23, 39];
// console.log(nums_array_1.concat(nums_array_1)); // two arrays have now converted into a single array by joining each other
// console.log(typeof nums_array_1.concat(nums_array_1)); // will print type as 'obj'
// -----------------------Note: It will not modify the original array  -----------------------
// console.log(nums_array_1); // both of the original arrays are still the same
// console.log(nums_array_1); // both of the original arrays are still the same

// // Method # 09:
// // Sort Method is used to sort your unordered array into a sorted method
// // Note: Keep in mind that It modifies the original array

// let nums = [6, 3, 36, 53, 56, 37, 9, 8, 67];
// console.log(nums.sort()); // It will sort in such a way that all "1" numbers will get placed with each other and then vise versa in an order

// // Method # 10: '''Splice Method''' is an important method
// This method is used to add new numbers and removing,replacing some numbers from an array

// let nums = [6, 3, 2, 1, 90, 67, 45, 34];
// console.log("Original Array before spliced was = ", nums);
// // For example: arr.splice( 1'''from which number index do u want to start editing''' , 2'''how many numbers do u want to replace''' , 3'''With what do u want to replace''')
// spliced_results = nums.splice(4, 3, "Owais", "Hamza", "Ali");
// console.log("Original Array after spliced was =", nums); // It modifies the original array

// // Method # 11 '''Slice Method is used to print some chunks of your array or you can say that , you can print out from specific place one end to another'''
// Note: // It does not modifies the original array

// let nums = [4, 9, 6, 7, 5, 2, 45, 23, 69];

// console.log(nums.slice(3, 5)); // will print from array index 3 to index 4 (including 3rd index number and 4th index number)

// console.log(nums.slice(3));
// console.log(nums); // It does not modify the original array
