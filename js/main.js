//варианты комментариев для поста
const descriptionOptions = [
  'сегодня отличный день', 'в кексограме очень весело', 'позанимался 2 часа', 'включила новый плейлист',
  'кошечка заснула прямо на руках', 'сегодня много заданий', 'прочитала новую книгу'];

//данные которые даны в задании - в константы

//количество постов в массиве
const SIMILAR_PHOTO_POSTS_COUNT = 5;

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

const createPhotoPost = (index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(descriptionOptions),
    likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
    comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max),
  };
};

//финальный массив из постов
const getPhotoPosts = Array.from({length:  SIMILAR_PHOTO_POSTS_COUNT}, createPhotoPost);

/*
const getIndex = () => {
  return  Array.from({length: getPhotoPosts.length}, (_, photoPostIndex) => createPhotoPost(photoPostIndex + 1));
}; */

const getIndex = () => {
  return getPhotoPosts.map((_, photoPostIndex) => createPhotoPost(photoPostIndex + 1));
};

function checkStringLength (string, length) {
  return string.length <= length;
};

console.log(getIndex());
console.log(getPhotoPosts);
checkStringLength('', 140);
