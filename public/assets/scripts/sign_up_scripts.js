function init_form()
{
  const sign_up = document.querySelector('#sign_up_form');
  sign_up.addEventListener('submit', (ev) => 
  {
    ev.preventDefault();

    let input_sign = document.querySelectorAll('#sign_up_form .input_sign');

    input_sign = [...input_sign];

    let sign_up_values = {
      nombre: "",
      correo: "",
      password: ""
    }

    input_sign.map((elem) => {
      const value = elem.value;
      const name = elem.name;

      sign_up_values[name] = value;
    });

    if(sign_up_values.nombre === "" || sign_up_values.correo === "" || sign_up_values.password === "" || sign_up_values.password_r === "")
    {
      alert('One or more than one of the entries are empty.')
    }else
    {
      if(sign_up_values.password === sign_up_values.password_r)
      {
        sign_up_values.password = JWT.encode64(sign_up_values.password);

        axios.post('//localhost:3000/users/sign_up', sign_up_values).then((response) =>
        {
          console.log('success', response);
          window.location = '/log_in.html';
        }).catch((err) =>   {
          console.log('Error', err);
        });
      }else
      {
        alert('The passwords are not the same.')
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
    init_form();
});
