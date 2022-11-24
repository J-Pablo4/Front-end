document.addEventListener('DOMContentLoaded', () => {
    const house = document.querySelector('#house');
    const apartment = document.querySelector('#apartment');
    const other = document.querySelector('#other');

    house.addEventListener('click', () => {
        localStorage.setItem('Type', 'House');
    });
    apartment.addEventListener('click', () => {
        localStorage.setItem('Type', 'Apartment');
    });
    other.addEventListener('click', () => {
        localStorage.setItem('Type', 'Other');
    });
});