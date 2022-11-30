function get_rentals()
{
  axios.get('//localhost:3000/rentals').then((respuesta) => {
    const rentals = respuesta.data;
    const body = document.getElementById('body');

    console.log(respuesta.data);

    rentals.forEach(element => {
      const accommodation_name = element.accommodation_name;
      const description = element.description;
      const photo = element.photo.split('/').pop();
      const card = `
      <section>
      <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px; margin-top: 60px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-1">
                  <img src="//localhost:3000/${photo}"
                    class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                  <p class="text-center h2 fw-bold mb-4 mx-1 mx-md-3 mt-4">${accommodation_name}</p>
                  <h5>Description</h5>
                  <div class="justify-content mx-1 mx-md-4">
                    <span>${description}</span> 
                  </div>
                  <br>
                  <div class="d-flex justify-content-center mx-4 mb-5 mb-lg-5 ">
                    <a href="rental.html?id=${element._id}" type="button" class="btn new-post">See more</a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    `
      body.innerHTML += card;
    });
  }).catch((err) => {
    console.log('Hubo un error', err);
  });
}

function list_rentals_by_places(place)
{
  axios.get('//localhost:3000/rentals/places/'+place).then((respuesta) => {
    const rentals = respuesta.data;
    const body = document.getElementById('body');

    console.log(respuesta.data);

    rentals.forEach(element => {
      const accommodation_name = element.accommodation_name;
      const description = element.description;
      const photo = element.photo.split('/').pop();
      const card = `
      <section>
      <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px; margin-top: 60px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-1">
                  <img src="//localhost:3000/${photo}"
                    class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                  <p class="text-center h2 fw-bold mb-4 mx-1 mx-md-3 mt-4">${accommodation_name}</p>
                  <h5>Description</h5>
                  <div class="justify-content mx-1 mx-md-4">
                    <span>${description}</span> 
                  </div>
                  <br>
                  <div class="d-flex justify-content-center mx-4 mb-5 mb-lg-5 ">
                    <a href="rental.html?id=${element._id}" type="button" class="btn new-post">See more</a>
                  </div> 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    `
      body.innerHTML += card;
    });
  }).catch((err) => {
    console.log('Hubo un error', err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.place;
  
  if(value == null)
  {
    get_rentals();
  }else
  {
    list_rentals_by_places(value);
  }
});