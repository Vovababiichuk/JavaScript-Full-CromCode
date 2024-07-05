export const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const listItemLiOne = document.createElement('li');
  listItemLiOne.textContent = '1';
  list.prepend(listItemLiOne);

  const listItemLiFour = document.createElement('li');
  listItemLiFour.textContent = '4';
  special.before(listItemLiFour);

  const listItemLiSix = document.createElement('li');
  listItemLiSix.textContent = '6';
  special.after(listItemLiSix);

  const listItemLiEight = document.createElement('li');
  listItemLiEight.textContent = '8';
  list.append(listItemLiEight);
};

finishList();
