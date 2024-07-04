export const getTitle = () => {
  const title = document.querySelector('.title');
  return title.textContent;
};

getTitle();

export const getDescription = () => {
  const description = document.querySelector('.about');
  return description.innerText;
}

getDescription();

export const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
}

getPlans();

export const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
}

getGoal();