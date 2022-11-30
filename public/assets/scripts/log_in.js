function init_form()
{
  const log_in = document.querySelector('#log_in_form');
  log_in.addEventListener('submit', (ev) => 
  {
    ev.preventDefault();

    let input_log = document.querySelectorAll('#log_in_form .input_sign');

    input_log = [...input_log];

    let log_in_values = {
      correo: "",
      password: ""
    }

    input_log.map((elem) => {
      const value = elem.value;
      const name = elem.name;

      log_in_values[name] = value;
    });

    if(log_in_values.correo === "" || log_in_values.password === "")
    {
      alert('One or more than one of the entries are empty.');
    }else
    {
        log_in_values.password = JWT.encode64(log_in_values.password);

        axios.post('https://back-top-trip.herokuapp.com/users/log_in', log_in_values).then((response) =>
        {
            
            set_token(response.data.token);

            window.location = '/index.html';
        }).catch((err) =>   {
          alert("Incorrect email or password");
        });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

    init_form();
});
