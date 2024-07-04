const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.log(titleElem);
  console.dir(titleElem);
  return titleElem;
};

getTitleElement();

const getInputElement = () => {
  const inputElement = document.querySelector('input[type="text"]');
  console.dir(inputElement);
  return inputElement;
};

getInputElement();
