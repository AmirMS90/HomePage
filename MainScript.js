const HamMenueButton = document.getElementById('ham');
const HamMenueXButton = document.getElementById('ham_x');
const HamMenue = document.querySelector('.menue');

HamMenueButton.addEventListener('click', (e) => {
    HamMenue.classList.add('enabled');
    e.preventDefault();
});

HamMenueXButton.addEventListener('click', (e) => {
    HamMenue.classList.remove('enabled');
    e.preventDefault();
});