export const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const listItemLiOne = document.createElement('li');
  listItemLiOne.textContent = '1';
  const listItemLiFour = document.createElement('li');
  listItemLiFour.textContent = '4';
  const listItemLiSix = document.createElement('li');
  listItemLiSix.textContent = '6';
  const listItemLiEight = document.createElement('li');
  listItemLiEight.textContent = '8';

  list.prepend(listItemLiOne);
  list.append(listItemLiEight);
  special.prepend(listItemLiFour);
  special.after(listItemLiSix);
};

