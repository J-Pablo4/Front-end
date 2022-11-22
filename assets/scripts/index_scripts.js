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

    let input_new = document.querySelectorAll('#new_post_form .input_new_post');

    input_new = [...input_new];

    const new_post_values =
    {
      photo: "",
      description: "",
      place: ""
    }

    input_new.map((elem) => {
      const value = elem.value;
      const name = elem.name;

      new_post_values[name] = value;
    });

    console.log(new_post_values);

    // axios.post('//localhost:3000/publications/publish?token=123', new_post_values).then((response) =>
    //     {
    //       console.log('success', response);
    //       window.location = '/index.html';
    //     }).catch((err) =>   {
    //       console.log(err);
    //     });
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
