// Create function as a parameter pass in string
function longestWord(str) {
  // Split items in array between every space
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (words.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Argument we are going to be passing
console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"));
