const manageClasses = () => {
  const listItemOne = document.querySelector('[class="one"]');
	listItemOne.classList.add('selected');

  const listItemTwo = document.querySelector('[class="two selected"]');
	listItemTwo.classList.remove('selected');

	const listItemThree = document.querySelector('[class="three three_done"]');
	listItemThree.classList.toggle('three_done');

	const listItemFour = document.querySelector('[class="four some-class"]');
	const someClass = listItemFour.classList.contains('some-class');
	if (someClass) {
		listItemFour.classList.add('another-class');
	}
}
