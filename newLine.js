let name = "Onyebuchi \nAniekwe \nChristian"
console.log(name)

let statement = "she said, \"hello!\" \\"
console.log(statement)
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 

// findig substring in a string
let sentence = "JavaScript is awesome!"
console.log(sentence.indexOf("awesome!"))
console.log(sentence.indexOf("hey"))

sentence = "JavaScript is awesome, and JavaScript is powerful!"
console.log(sentence.indexOf("JavaScript", 10))