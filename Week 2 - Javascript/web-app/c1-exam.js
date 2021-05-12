/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sentence1, sentence2) {
    const list1 = sentence1.split(" ");
    const list2 = sentence2.split(" ");
    if (list1.length !== list2.length ) {
        throw "ValueError";
    }
/*    result = [];
    let i = 0;
    //??
    while (i < list1.length) {
        // push adds word according to index
        result.push(list1[i]);
        result.push(list2[i]);
        i += 1;
    }
    return result.join(" ");
    */
   // flatMap = Map but flattens to one row array, apply function to everything in that list
   // k = index, v = element
    return list1.flatMap((v, k) => [v, list2[k]]).join(" ");
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (inputstring) {
    let count = 0;

  // loop over every char
  while (const char of inputstring) {
      // check if it is lowercase, I assume if matches any of lowercase alphabet
      if (char.match(/[a-z]/)) {
      // if yes, increase count
    // or if (char === char.lowercase) ?
      count += 1;
    }
  }

  return count;

};


// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (str) {
    return Math.max(...str.split(" ").map(word => word.length));
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (a) {
    
    (a % 2 !=== 0) {}
    return Math.max(a);
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location = "London") {
    // use weird 
    return `Hello, ${username}, how is ${location}?`;
};



// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar = 1, offset = 0) {
    const ans = x * scalar + offset;
    if (ans < 0){
        return 0;
    }
    return ans;
}; 
export default Object.freeze(Exam); 

