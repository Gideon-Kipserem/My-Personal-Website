
const number = document.querySelector('.number');
number.addEventListener('mouseover', () => {
  number.style.color = 'gray';
  number.style.cursor = 'pointer';
});
number.addEventListener('mouseout', () => {
  number.style.color = '';
});


const mail = document.querySelector('.mail');
mail.addEventListener('mouseover', () => {
  mail.style.color = 'gray';
  mail.style.cursor = 'pointer';
});
mail.addEventListener('mouseout', () => {
  mail.style.color = '';
});
