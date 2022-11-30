document.addEventListener('DOMContentLoaded', () => {
    const apartment = document.querySelector('#apartment');
    const apartment_hotel = document.querySelector('#apartment_hotel');

    apartment.addEventListener('click', () => {
        localStorage.setItem('Category', 'Apartment');
    });

    apartment_hotel.addEventListener('click', () => {
        localStorage.setItem('Category', 'Apartment Hotel');
    });
});