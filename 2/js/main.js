function getRandomNumber (firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN;
  }

  const minNumber = Math.ceil(Math.min(firstNumber, secondNumber));
  const maxNumber = Math.floor(Math.max(firstNumber, secondNumber));
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Math.floor(randomNumber);
}

getRandomNumber(3, 12);

function checkCommentLength (string, length) {
  return string.length <= length;
}

checkCommentLength('', 140);

