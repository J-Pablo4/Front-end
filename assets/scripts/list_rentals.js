function get_rentals()
{
  axios.get('//localhost:3000/rentals').then((respuesta) => {
    const rentals = respuesta.data;
    const body = document.getElementById('body');

    console.log(respuesta.data);

    rentals.forEach(element => {
      const user_name = element.user_name;
      const place = element.place;
      const description = element.description;
      const photo = element.photo.split('/').pop();
      const card = `
      <div class="card shadow-lg mb-5" style="margin-top: 50px">
      <div class="card-body d-flex">
          <div class="d-flex">
            <div class="profile-picture rounded-circle" id="post-general" style="margin-right: 20px"></div>
            <a href="#" class="text-dark text-decoration-none fw-bold align-self-center">${user_name}</a>
          </div>
      </div>
      <div style="margin-bottom: 15px">
        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
        <a href="#" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
      </div>
      <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
      <div class="card-body">
        <div class="d-flex">
          <p>${description}</p>
        </div>
        <hr>
        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">viajesdemontaña</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, minima.</p>
        <p><a href="#" class="text-dark fw-bold text-decoration-none">casas_color_limon</a> Lorem ipsum, dolor sit amet consectetur</p>
        <small class="d-block text-muted">12 HOURS AGO</small>
      </div>
      <form class="d-flex border-top py-3 px-2">
        <input type="text" class="form-control border-0" placeholder="Comment...">
        <button type="submit" class="btn new-post unauth">Publish</button>
      </form>
  </div>
  `
      body.innerHTML += card;
    });
  }).catch((err) => {
    console.log('Hubo un error', err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    get_rentals();
});