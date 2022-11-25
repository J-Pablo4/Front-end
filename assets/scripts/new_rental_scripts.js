function init_form()
{
  const new_rental = document.querySelector('#new_rental_form');

  new_rental.addEventListener('submit', (ev) =>
  {
    ev.preventDefault();

    var input_name = document.querySelector('#new_rental_form input[name="accomodation_name"]')
    var input_description = document.querySelector('#new_rental_form textarea[name="description"]');
    var input_place = document.querySelector('#new_rental_form input[name="place"]');

    var data = new FormData()
    data.append('photo', input.files[0])
    data.append('description', input_description.value);
    data.append('place', input_place.value);

    const token = localStorage.getItem('token');
    fetch('//localhost:3000/publications/publish?token='+token, {
      method: 'POST',
      body: data
    }).then(() => {
      alert('Se creó una nueva publicación')
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
        }
    
        reader.readAsDataURL(file);
      }
});