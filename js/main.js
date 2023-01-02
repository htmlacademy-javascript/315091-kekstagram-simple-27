//варианты комментариев для поста
const DESCRIPTION_OPTIONS = [
  'сегодня отличный день', 'в кексограме очень весело', 'позанимался 2 часа', 'включила новый плейлист',
  'кошечка заснула прямо на руках', 'сегодня много заданий', 'прочитала новую книгу'];

//количество постов в массиве
const SIMILAR_PHOTO_POSTS_COUNT = 25;

//количество лайков
const LIKES_COUNT = {
  min: 15,
  max: 200,
};

//количество комментариев
const COMMENTS_COUNT = {
  min: 0,
  max: 200,
};

//рандомное положительное число в переданном диапазоне
const getRandomNumber = (firstNumber, secondNumber) => {
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN;
  }

  const minNumber = Math.ceil(Math.min(firstNumber, secondNumber));
  const maxNumber = Math.floor(Math.max(firstNumber, secondNumber));
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Math.floor(randomNumber);
};

//рандомный элемент по индексу из массива
const getRandomArrayElement = (someArray) => {
  return someArray[getRandomNumber(0, someArray.length - 1)];
};

const createPhotoPost = (_, index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTION_OPTIONS),
    likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
    comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max),
  };
};

const photoPosts = Array.from({length:  SIMILAR_PHOTO_POSTS_COUNT}, (_, photoPostIndex) => createPhotoPost(_, photoPostIndex + 1));

function checkStringLength (string, length) {
  return string.length <= length;
};

console.log(photoPosts);

checkStringLength('', 140);
