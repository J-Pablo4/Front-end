function rental(id)
{
    axios.get('https://back-top-trip-backend.herokuapp.com/rentals/'+id).then((respuesta) => {
    const body = document.getElementById('body');
    const rental = respuesta.data;
    const photo = rental.photo.split('/').pop();

    const card = `
    <div class="container" style="margin-top: 100px">
        <div class="row">
          <div class="col-lg-8">
            <div class="card shadow-lg mb-5" style="margin-top: 50px">
            <img src="https://back-top-trip-backend.herokuapp.com/${photo}" class="img-fluid" alt="Sample image">
            </div>
            <div class="card">
              <div class="card-body">
                <div class="fw-bold" ; style="font-size:larger">${rental.accommodation_name}</div>
                  <div class="d-flex">
                    <small class="text-muted" style="margin-right: 390px">${rental.type} | ${rental.category}</small>
                  </div>
                  <div style="margin-left: 20px;">
                    ${rental.street_address}, C.P. ${rental.postal_code}, ${rental.city}, ${rental.country}
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-3">
                      <small class="fw-bold">
                        Details
                      </small>
                    </div>
                    <div class="col-lg-3">
                      <div>
                        <i class="fa-solid fa-square-parking"></i>
                        <small style="font-size:small">Parking</small>
                      </div>
                      <div>
                        <i class="fa-solid fa-tv"></i>
                        <small style="font-size:small">TV</small>
                      </div> 
                      <div>
                        <i class="fa-solid fa-fire-extinguisher"></i> 
                        <small style="font-size:small">Extinguisher</small>
                      </div>
                      <div>
                        <i class="fa-solid fa-temperature-arrow-up"></i>
                        <small style="font-size:small">Heater</small>
                      </div>
                      <div>
                        <i class="fa-solid fa-person-swimming"></i>
                        <small style="font-size:small">Pool</small>
                      </div>
                    <div>
                      <i class="fa-solid fa-bath"></i>
                      <small style="font-size:small">Bath</small>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <i class="fa-regular fa-snowflake"></i>
                    <small style="font-size:small">Mini bar</small>
                    <div>
                      <i class="fa-solid fa-wind"></i>
                      <small style="font-size:small">Sauna</small>
                    </div> 
                    <div>
                      <i class="fa-solid fa-plant-wilt"></i>
                      <small style="font-size:small">Balcony</small>
                    </div>
                    <div>
                      <i class="fa-solid fa-seedling"></i>
                      <small style="font-size:small">Garden</small>
                    </div>
                    <div>
                      <i class="fa-solid fa-paw"></i>
                      <small style="font-size:small">Pet allowed</small>
                    </div>
                    <div>
                      <i class="fa-solid fa-fan"></i>
                      <small style="font-size:small">Air conditioner</small>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <i class="fa-solid fa-wifi"></i>
                    <small style="font-size:small">Wifi</small>
                    <div>
                      <i class="fa-solid fa-fire-burner"></i>
                      <small style="font-size:small">Kitchen</small>
                    </div> 
                    <div>
                      <i class="fa-solid fa-bacon"></i>
                      <small style="font-size:small">Breakfast offered</small>
                    </div>
                    <div>
                      <i class="fa-solid fa-pump-soap"></i>
                      <small style="font-size:small">Toiletries</small>
                    </div>
                    <div>
                      <i class="fa-solid fa-mattress-pillow"></i>
                      <small style="font-size:small">Linen</small>                     
                    </div>
                    <div>
                      <i class="fa-solid fa-people-roof"></i>
                      <small style="font-size:small">Patio</small>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-lg-2">
                    <small class="fw-bold">Areas</small>
                  </div>
                  <div class="col-lg-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="fw-bold" style="font-size:smaller;">Bedroom 1</div>
                        <div style="font-size:smaller">1 king size bed</div>
                        <div style="font-size:smaller">1 TV</div>
                        <div style="font-size:smaller">1 Full bathroom</div>
                        <div style="font-size:smaller">1 king size bed</div>
                        <div style="font-size:smaller">Air conditioned</div>
                      </div>
                    </div>
                  </div>      
                  <div class="col-lg-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="fw-bold" style="font-size:smaller;">Kitchen</div>
                        <div style="font-size:smaller"></div>
                        <div style="font-size:smaller">Air conditioned</div>
                        <div style="font-size:smaller">Oven</div>
                        <div style="font-size:smaller">Stove</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="fw-bold" style="font-size:smaller;">Patio</div>        
                      <div style="font-size:smaller">1 Pool</div>
                      <div style="font-size:smaller">Light</div>
                      <div style="font-size:smaller">Garden</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div class="col-lg-4">
                <form id="aqui">
                    <div class="card mb-5" style="margin-top: 50px; position:fixed; width: 320px;">
                      <div class="card-body d-flex" >
                        <div class="Rental_info " style="width:325px ;">
                          <div class="fw-bold">${rental.accommodation_name}</div>
                          <div>${rental.city}, ${rental.country}</div>
                          <div>${rental.number_of_bedrooms} bedroom - ${rental.maximum_guests} guest</div>
                          <div class="d-flex" style="margin-bottom: 10px">
                            <i class="fa fa-star align-self-center"></i>
                            <i class="fa fa-star align-self-center"></i>
                            <i class="fa fa-star align-self-center"></i>
                            <i class="fa-regular fa-star align-self-center"></i>
                            <i class="fa-regular fa-star align-self-center"></i>
                            <span class="font-size: small" id="users_rate">  - 265 ratings</span>
                          </div>
                          <hr>

                          <div class="row">
                            <div class="col-lg-6">
                              Check-in
                              <input type="date" id="targetCI">  
                            </div>
                            <div class="col-lg-6">
                              Check-out
                              <input type="date" id="targetCO">  
                            </div>
                          </div>
                          <hr>
                          <div>
                            Guests
                            <div id="targetP">
                              <div>
                                <div><small class="text-muted">Adults :</small></div>
                                <input type="number" id="adults" value="1" min="1" max="100">
                              </div>
                              <div>
                                <div><small class="text-muted">Kids :</small></div>
                                <input type="number" id="kids" value="0" min="0" max="100">
                              </div>
                              <div>
                                <div><small class="text-muted">Pets :</small></div>
                                <input type="number" id="pets" value="0" min="0" max="100">
                              </div>
                            </div>  
                          </div>
                          <hr>
                          <div class="fw-bold">Price per night </div>
                          <div> ${rental.price} DLS</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button id="aqui_boton" class="btn new-post shadow-lg mb-5 unauth" style="width: 320px; height: 42px; position: fixed; margin-top: 570px">
                        Book Rental
                      </button>
                    </div>
                  </form>
                  </div>
                  <div class="col-lg-8">
                    <div class="card mb-5" style="margin-top: 50px">
                      <div class="card-body ">
                        <div class="Reviews fw-bold" style="font-size:large">
                          Reviews
                        </div>
                        <div class="d-flex" style="margin-bottom: 10px">
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa-regular fa-star align-self-center"></i>
                          <i class="fa-regular fa-star align-self-center"></i>
                          <span class="font-size: small" id="users_rate">  - 265 ratings</span>
                        </div>
                        <hr>
                        <div class="d-flex">
                          <div class="profile-picture rounded-circle" id="post-general" style="margin-right: 20px"></div>
                          <a href="#" class="text-dark text-decoration-none align-self-center">viajesdemontaña</a>
                        </div>
                        <div class="d-flex" style="margin-bottom: 10px">
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa fa-star align-self-center"></i>
                          <i class="fa-regular fa-star align-self-center"></i>                        
                        </div>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus blanditiis provident quos fugiat necessitatibus unde, expedita atque a officiis impedit, repellat reiciendis nam vitae laudantium delectus sequi eum pariatur.</div>
                      </div>
                    </div>
                  </div>
            </div> 
        </div>
    `
      body.innerHTML += card;
      if(logged())
    {
        const elements_to_remove = document.querySelectorAll('.auth');
        const elements_to_show = document.querySelectorAll('.unauth');

        elements_to_remove.forEach((elem) => {
            elem.remove();
        });

        elements_to_show.forEach((elem) => {
            elem.classList.remove('unauth');
        });
    }else{
        const elements_to_remove = document.querySelectorAll('.unauth');
        const elements_to_show = document.querySelectorAll('.auth');

        elements_to_remove.forEach((elem) => {
            elem.remove();
        });

        elements_to_show.forEach((elem) => {
            elem.classList.remove('auth');
        });
    }

    const book_form = document.querySelector('form#aqui');

    book_form.addEventListener('submit', (ev) => {
      ev.preventDefault();

      let check_in = document.querySelector('#targetCI');
      let check_out = document.querySelector('#targetCO');
      let adults = document.querySelector("#adults");
      let kids = document.querySelector("#kids");
      let pets = document.querySelector("#pets");
      let total = parseInt(adults.value, 10) + parseInt(kids.value, 10) + parseInt(pets.value, 10);

      let book_values = {
        check_in: check_in.value,
        check_out: check_out.value,
        adults: adults.value,
        kids: kids.value,
        pets: pets.value,
        total: total,
        publication_id: id
      }
      if(check_in.value == "" || check_out.value == "")
      {
        alert('One, or more, of the fields is empty.');
      }else
      {
        if(check_in.value <= check_out.value)
        {
          if(total <= rental.maximum_guests)
          {
            const token = localStorage.getItem('token');
            axios.put('https://back-top-trip-backend.herokuapp.com/rentals/book?token='+token, book_values).then((response) =>
            {
              alert('The rental was booked');
              document.getElementById('aqui_boton').disabled = true;
            }).catch((err) =>   {
              console.log(err);
              alert('No estás autenticado');
              localStorage.removeItem('token');
              window.location = '/log_in.html';
            });
          }else
          {
            alert("The guests introduced exceeds the accommodation's maximum guests.");
          }
        }else
        {
          alert('Inconsistences in dates');
        }
      }

    });
  }).catch((err) => {
    console.log('Hubo un error', err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    let value = params.id;
    if(value != null)
    {
        rental(value);
    }else
    {
        window.location = '/list_propi.html';
    }
});