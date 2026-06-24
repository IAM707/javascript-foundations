// make the user score and the loop
score = 0;
console.log("Your Score is " + score);

for (let round = 0; round < 3; round++) {
  // make a math question with a random number
  let randomNumber1 = Math.floor(Math.random() * 10) + 1;
  let randomNumber2 = Math.floor(Math.random() * 10) + 1;

  // question and users answer
  let textanswer = prompt("What is " + randomNumber1 + " + " + randomNumber2);

  //convert it from text to a number

  let userAnswerInNumber = Number(textanswer);

  // the real answer

  let realAnswer = randomNumber1 + randomNumber2;
  // check user answer

  if (userAnswerInNumber === realAnswer) {
    console.log("your answer is correct!");
    score += 1;
    console.log("Now Your Score is " + score + "!!!");
  } else {
    console.log("Your answer is wrong )=");
  }
}
//final results
console.log("finally you made it ! your final score is " + score);
