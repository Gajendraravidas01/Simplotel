const menuicon = document.querySelector('.menu-icon');
const mobilenav = document.querySelector('.mobile-nav');

menuicon.addEventListener('click', () => {
  mobilenav.classList.toggle('active'); // toggles the class on each click
});
