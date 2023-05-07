let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12) // [ 91, 82, 63, 84, false, 'Not Present' ]
console.log(marks_class_12[0]) // 91
console.log(marks_class_12[1]) // 82
console.log(marks_class_12[2]) // 63
console.log(marks_class_12[3]) // 84
console.log(marks_class_12[4]) // false
console.log(marks_class_12[5]) // Not Present
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length) // The length of marks_class_12 is 6
marks_class_12[6] = 89 // Adding a new value to the array
console.log("The length of marks_class_12 is", marks_class_12.length) // The length of marks_class_12 is 7
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12) // [ 96, 82, 63, 84, false, 'Not Present', 89 ]
console.log(typeof marks_class_12) // object

// typeof array will be print "object"
// arrays are mutable
// arrays can be changed

for(i in marks_class_12)
  console.log(marks_class_12[i])
/* 
96
82
63
84
false
Not Present
89 */