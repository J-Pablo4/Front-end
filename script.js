// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }


function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    
    var popup = document.getElementById('myForm');
    popup.classList.toggle('active');
}

function init_form()
{
  const sign_up = document.querySelector('#sign_up_form');
  sign_up.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log('Este es el evento:',ev);

    let input_sign = document.querySelectorAll('#sign_up_form .input_sign');

    input_sign = [...input_sign];

    const sign_up_values = {
      nombre: "",
      correo: "",
      password: ""
    }
    console.log(input_sign);

    input_sign.map((elem) => {
      const value = elem.value;
      const name = elem.name;

      sign_up_values[name] = value;
    });

    axios.post('//localhost:3000/users/sign_up', sign_up_values).then((response) => {
      console.log('success', response);
      window.location = '/log_in.html';
    }).catch((err) => {
      console.log(err);
    });

  });
}

document.addEventListener('DOMContentLoaded', () => {
    init_form();
});
