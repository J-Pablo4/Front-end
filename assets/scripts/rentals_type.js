document.addEventListener('DOMContentLoaded', () => {
    const house = document.querySelector('#house');
    const apartment = document.querySelector('#apartment');
    const other = document.querySelector('#other');

    house.addEventListener('click', () => {
        localStorage.setItem('Type', 'house');
    });
    apartment.addEventListener('click', () => {
        localStorage.setItem('Type', 'apartment');
    });
    other.addEventListener('click', () => {
        localStorage.setItem('Type', 'other');
    });
});