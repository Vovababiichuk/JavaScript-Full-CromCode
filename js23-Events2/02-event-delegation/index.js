const generateNumbersRange = (from, to) => {
  const res = [];

  for (let i = from; i <= to; i += 1) {
    res.push(i);
  }

  return res;
};

const getLineSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      seatNumber => `
		<div
			class="sector__seat"
			data-seat-number="${seatNumber}"
		>
		</div>
	`,
    )
    .join('');
};

const getSectorLines = () => {
  const seats = getLineSeats();

  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
		<div
			class="sector__line"
			data-line-number="${lineNumber}"
		>
		${seats}</div>
	`,
    )
    .join('');
};

const arena = document.querySelector('.arena');

const renderArena = () => {
  const sectorLines = getSectorLines();

  const sectorLine = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
			<div
				class="sector"
				data-sector-number="${sectorNumber}"
			>
			${sectorLines}</div>
		`,
    )
    .join('');

  arena.innerHTML = sectorLine;
};

const handleSeatSelect = e => {
  const { classList, dataset } = e.target;
  const isSeat = classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const { sectorNumber } = e.target.closest('.sector').dataset;
  const { lineNumber } = e.target.closest('.sector__line').dataset;
  const { seatNumber } = dataset;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arena.addEventListener('click', handleSeatSelect);

renderArena();
