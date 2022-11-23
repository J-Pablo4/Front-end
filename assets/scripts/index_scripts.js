function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  
  var popup = document.getElementById('myForm');
  popup.classList.toggle('active');
}

function init_form()
{
  const new_post = document.querySelector('#new_post_form');

  new_post.addEventListener('submit', (ev) =>
  {
    ev.preventDefault();
    console.log('Este es el evento:',ev);

    var input = document.querySelector('#new_post_form input[type="file"]')
    var input_description = document.querySelector('#new_post_form textarea[name="description"]');
    var input_place = document.querySelector('#new_post_form input[name="place"]');

    console.log()

    var data = new FormData()
    data.append('photo', input.files[0])
    data.append('description', input_description.value);
    data.append('place', input_place.value);

    fetch('//localhost:3000/publications/publish?token=123', {
      method: 'POST',
      body: data
    }).then(() => {
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

  init_form();
})
