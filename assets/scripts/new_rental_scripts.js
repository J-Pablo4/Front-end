function init_form()
{
  const new_rental = document.querySelector('#new_rental_form');

  

  new_rental.addEventListener('submit', (ev) =>
  {
    ev.preventDefault();

    var input_accommodation_name = document.querySelector('#new_rental_form input[name="accommodation_name"]')
    var input_maximum_guests = document.querySelector('#new_rental_form input[name="maximum_guests"]');
    var input_country = document.querySelector('#new_rental_form select[name="country"]');
    var input_street_address = document.querySelector('#new_rental_form input[name="street_address"]');
    var input_postal_code = document.querySelector('#new_rental_form input[name="postal_code"]');
    var input_city = document.querySelector('#new_rental_form input[name="city"]');
    var input_number_of_bedrooms = document.querySelector('#new_rental_form input[name="number_of_bedrooms"]');
    var input_photo = document.querySelector('#new_rental_form input[name="photo"]');
    var input_price = document.querySelector('#new_rental_form input[name="price"]');

    var data = new FormData();
    data.append('type', localStorage.getItem('Type'));
    data.append('category', localStorage.getItem('Category'));
    data.append('accommodation_name', input_accommodation_name.value);
    data.append('maximum_guests', input_maximum_guests.value);
    data.append('country', input_country.value);
    data.append('street_address', input_street_address.value);
    data.append('postal_code', input_postal_code.value);
    data.append('city', input_city.value);
    data.append('number_of_bedrooms', input_number_of_bedrooms.value);
    data.append('photo', input_photo.files[0]);
    data.append('price', input_price.value);

    const token = localStorage.getItem('token');
    fetch('//localhost:3000/rentals/new-rental?token='+token, {
      method: 'POST',
      body: data
    }).then(() => {
      alert('Created a new rental');
      window.location = '/index.html';
    }).catch((err) => {
      console.log(err);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('input[type="file"]');

    fileInput.onchange = function(){
        const file = fileInput.files[0];
    
        const reader = new FileReader();
    
        reader.onload = function(event) {
          const url = event.target.result;
          document.getElementById('image-box').style.borderStyle = 'none';
          document.getElementById('image-box').style.backgroundImage = 'url('+url+')';
          document.getElementById('image-icon').style.color = 'white';
        }
    
        reader.readAsDataURL(file);
      }

      init_form();
});