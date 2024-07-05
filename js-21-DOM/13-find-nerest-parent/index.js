export const getSection = (num) => {
  const numString = String(num);
  const span = document.querySelector(`span[data-number="${numString}"]`);
  const closestParent = span.closest('.box');
  console.log(closestParent);
  return closestParent.dataset.section
}
