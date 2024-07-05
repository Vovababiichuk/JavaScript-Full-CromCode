const divRectEl = document.querySelector('.rect.rect_div');
const pRectEl = document.querySelector('.rect.rect_p');
const spanRectEl = document.querySelector('.rect.rect_span');

const createDivElGreen = document.createElement('span');
createDivElGreen.textContent = 'div';

const createPElGreen = document.createElement('p');
createPElGreen.textContent = 'p';

const handleAdd = (text, color) => {
  const divEventsList = document.querySelector('.rect.events-list');

  divEventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const handleGreyDiv = handleAdd.bind(null, 'div', 'grey');
const handleGreyP = handleAdd.bind(null, 'p', 'grey');
const handleGreySpan = handleAdd.bind(null, 'span', 'grey');

const handleGreenDiv = handleAdd.bind(null, 'div', 'green');
const handleGreenP = handleAdd.bind(null, 'p', 'green');
const handleGreenSpan = handleAdd.bind(null, 'span', 'green');

divRectEl.addEventListener('click', handleGreyDiv, true);
pRectEl.addEventListener('click', handleGreyP, true);
spanRectEl.addEventListener('click', handleGreySpan, true);

divRectEl.addEventListener('click', handleGreenDiv);
pRectEl.addEventListener('click', handleGreenP);
spanRectEl.addEventListener('click', handleGreenSpan);

