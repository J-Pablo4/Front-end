function get_rentals()
{
  axios.get('https://back-top-trip-backend.herokuapp.com/places').then((respuesta) => {
    const place = document.getElementById('place');
    
    const card = `
    <div class="row">
      <div class="col">
        <a href="./list_propi.html?place=${respuesta.data[0].place}" style="position: relative" class="list-by-places">
          <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[0].place}</h2>
          <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[0].photo.split('/').pop()}" alt="" class="img">
        </a>
      </div>
      <div class="col">
      <a href="./list_propi.html?place=${respuesta.data[1].place}" style="position: relative" class="list-by-places">
          <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[1].place}</h2>
          <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[1].photo.split('/').pop()}" alt="" class="img">
        </a>
      </div>
      <div class="col">
        <a href="./list_propi.html?place=${respuesta.data[2].place}" style="position: relative" class="list-by-places">
          <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[2].place}</h2>
          <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[2].photo.split('/').pop()}" alt="" class="img">
        </a>
      </div>
    </div>
      <div class="row">
        <div class="col">
          <a href="./list_propi.html?place=${respuesta.data[3].place}" style="position: relative" class="list-by-places">
            <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[3].place}</h2>
            <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[3].photo.split('/').pop()}" alt="" class="img">
          </a>
        </div>
        <div class="col">
          <a href="./list_propi.html?place=${respuesta.data[4].place}" style="position: relative" class="list-by-places">
            <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[4].place}</h2>
            <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[4].photo.split('/').pop()}" alt="" class="img">
          </a>
        </div>
        <div class="col">
          <a href="./list_propi.html?place=${respuesta.data[5].place}" style="position: relative" class="list-by-places">
            <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[5].place}</h2>
            <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[5].photo.split('/').pop()}" alt="" class="img">
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a href="./list_propi.html?place=${respuesta.data[6].place}" style="position: relative" class="list-by-places">
            <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[6].place}</h2>
            <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[6].photo.split('/').pop()}" alt="" class="img">
          </a>
        </div>
        <div class="col">
          <a href="./list_propi.html?place=${respuesta.data[7].place}" style="position: relative" class="list-by-places">
            <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[7].place}</h2>
            <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[7].photo.split('/').pop()}" alt="" class="img">
          </a>
        </div>
        <div class="col">
          <a href="./list_propi.html?place=${respuesta.data[8].place}" style="position: relative" class="list-by-places">
            <h2 style="position:absolute; left: 0; right: 0;">${respuesta.data[8].place}</h2>
            <img src="https://back-top-trip-backend.herokuapp.com/${respuesta.data[8].photo.split('/').pop()}" alt="" class="img">
          </a>
        </div>
      </div>
    `
    place.innerHTML += card;
      
  }).catch((err) => {
    console.log('Hubo un error', err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    get_rentals();
});