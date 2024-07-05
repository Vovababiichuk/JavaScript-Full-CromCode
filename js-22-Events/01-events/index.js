const divRectEl = document.querySelector('.rect.rect_div');
const pRectEl = document.querySelector('.rect.rect_p');
const spanRectEl = document.querySelector('.rect.rect_span');

const clear = document.querySelector('.btn.clear-btn');
const remove = document.querySelector('.btn.remove-handlers-btn');
const attach = document.querySelector('.btn.attach-handlers-btn');

const divEventsList = document.querySelector('.rect.events-list');

const handleAdd = (text, color) => {
  divEventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const handleGreyDiv = handleAdd.bind(null, 'div', 'grey');
const handleGreyP = handleAdd.bind(null, 'p', 'grey');
const handleGreySpan = handleAdd.bind(null, 'span', 'grey');

const handleGreenDiv = handleAdd.bind(null, 'div', 'green');
const handleGreenP = handleAdd.bind(null, 'p', 'green');
const handleGreenSpan = handleAdd.bind(null, 'span', 'green');

const attachHandlers = () => {
  divRectEl.addEventListener('click', handleGreyDiv, true);
  pRectEl.addEventListener('click', handleGreyP, true);
  spanRectEl.addEventListener('click', handleGreySpan, true);

  divRectEl.addEventListener('click', handleGreenDiv);
  pRectEl.addEventListener('click', handleGreenP);
  spanRectEl.addEventListener('click', handleGreenSpan);
};

const removeHandlers = () => {
  divRectEl.removeEventListener('click', handleGreyDiv, true);
  pRectEl.removeEventListener('click', handleGreyP, true);
  spanRectEl.removeEventListener('click', handleGreySpan, true);

  divRectEl.removeEventListener('click', handleGreenDiv);
  pRectEl.removeEventListener('click', handleGreenP);
  spanRectEl.removeEventListener('click', handleGreenSpan);
};

const clearEventsList = () => {
  divEventsList.innerHTML = '';
};

attach.addEventListener('click', attachHandlers);
remove.addEventListener('click', removeHandlers);
clear.addEventListener('click', clearEventsList);

attachHandlers();
