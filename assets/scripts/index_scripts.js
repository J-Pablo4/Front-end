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
    var input = document.querySelector('#new_post_form input[type="file"]')
    var input_description = document.querySelector('#new_post_form textarea[name="description"]');
    var input_place = document.querySelector('#new_post_form select[name="place"]');

    var data = new FormData()
    data.append('photo', input.files[0])
    data.append('description', input_description.value);
    data.append('place', input_place.value);
    const token = localStorage.getItem('token');

    if(input.files[0] === undefined || input_description.value === "" || input_place.value === "")
    {
      alert('One or more than one of the entries are empty.');
    }else
    {
      fetch('//localhost:3000/publications/publish?token='+token, {
      method: 'POST',
      body: data
    }).then((respuesta) => {
      if(respuesta.status == 400)
      {
        alert('No estás autenticado');
        localStorage.removeItem('token');
        window.location = '/log_in.html';
      }else
      {
        alert('Se creó una nueva publicación');
        window.location = '/index.html';
      }
    }).catch((err) => {
      console.log('Hubo un error', err);
    });
    }
    
  });
}

function get_publications()
{
  axios.get('//localhost:3000/publications').then((respuesta) => {
    const publications = respuesta.data.reverse();
    const container = document.getElementById('publications');

    publications.forEach(element => {
      const user_name = element.user_name;
      const place = element.place;
      const description = element.description;
      const photo = element.photo.split('/').pop();
      const accommodation_name = element.accommodation_name;
      const rental_id = element.rental_id;

      let card;

      if(accommodation_name == null)
      {
        if(element.comments.length == 0)
        {
          card = `
      <div class="card shadow-lg mb-5" style="margin-top: 50px">
      <div class="card-body d-flex">
          <div class="d-flex">
            <div class="profile-picture rounded-circle" id="post-general" style="margin-right: 20px"></div>
            <div class="align-self-center">
              <a href="#" class="text-dark text-decoration-none fw-bold">${user_name}</a>
            </div>
          </div>
      </div>
      <div style="margin-bottom: 15px">
        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
        <a href="./list_propi.html?place=${place}" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
      </div>
      <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
      <div class="card-body">
        <div class="d-flex">
          <p>${description}</p>
        </div>

      </div>
      <form class="d-flex border-top py-3 px-2 comment-form">
        <input type="text" name="comment" class="form-control border-0" id="comment-${element._id}" placeholder="Comment...">
        <button type="submit" class="btn new-post unauth">Publish</button>
      </form>
  </div>
  ` 
        }else if(element.comments.length == 1)
        {
          card = `
      <div class="card shadow-lg mb-5" style="margin-top: 50px">
      <div class="card-body d-flex">
          <div class="d-flex">
            <div class="profile-picture rounded-circle" id="post-general" style="margin-right: 20px"></div>
            <div class="align-self-center">
              <a href="#" class="text-dark text-decoration-none fw-bold">${user_name}</a>
            </div>
          </div>
      </div>
      <div style="margin-bottom: 15px">
        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
        <a href="./list_propi.html?place=${place}" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
      </div>
      <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
      <div class="card-body">
        <div class="d-flex">
          <p>${description}</p>
        </div>
        <hr>
        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">${element.comments[0].user_name}</a> ${element.comments[0].comment_text}</p>
      </div>
      <form class="d-flex border-top py-3 px-2 comment-form">
        <input type="text" name="comment" class="form-control border-0" id="comment-${element._id}" placeholder="Comment...">
        <button type="submit" class="btn new-post unauth">Publish</button>
      </form>
  </div>
  ` 
        }else
        {
          const reverse_array = element.comments.reverse();
          card = `
      <div class="card shadow-lg mb-5" style="margin-top: 50px">
      <div class="card-body d-flex">
          <div class="d-flex">
            <div class="profile-picture rounded-circle" id="post-general" style="margin-right: 20px"></div>
            <div class="align-self-center">
              <a href="#" class="text-dark text-decoration-none fw-bold">${user_name}</a>
            </div>
          </div>
      </div>
      <div style="margin-bottom: 15px">
        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
        <a href="./list_propi.html?place=${place}" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
      </div>
      <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
      <div class="card-body">
        <div class="d-flex">
          <p>${description}</p>
        </div>
        <hr>
        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">${reverse_array[1].user_name}</a> ${element.comments[1].comment_text}</p>
        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">${reverse_array[0].user_name}</a> ${element.comments[0].comment_text}</p>
      </div>
      <form class="d-flex border-top py-3 px-2 comment-form">
        <input type="text" name="comment" class="form-control border-0" id="comment-${element._id}" placeholder="Comment...">
        <button type="submit" class="btn new-post unauth">Publish</button>
      </form>
  </div>
  `
        }
      }else
      {
        if(element.comments.length == 0)
        {
          card = `
        <div class="card shadow-lg mb-5" style="margin-top: 50px">
                      <div class="card-body d-flex">
                          <div class="d-flex">
                            <div class="profile-picture rounded-circle" id="post-rental" style="margin-right: 20px"></div>
                            <a href="#" class="text-dark text-decoration-none fw-bold align-self-center">${user_name}</a>
                          </div>
                      </div>
                      <div style="margin-bottom: 15px">
                        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
                        <a href="./list_propi.html?place=${place}" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
                      </div>
                      <hr>
                      <h4 style="margin-left: 80px">${accommodation_name}</h4>
                      <div class="d-flex" style="margin-bottom: 10px">
                        <span class="text-dark text-decoration-none fw-bold" style="margin-left: 100px;">Rate:</span>
                        <i class="fa fa-star checked align-self-center" style="margin-left: 20px;"></i>
                        <i class="fa fa-star checked align-self-center"></i>
                        <i class="fa fa-star checked align-self-center"></i>
                        <i class="fa fa-star align-self-center"></i>
                        <i class="fa fa-star align-self-center" style="margin-right: 10px"></i>
                        <span class="text-dark text-decoration-none fw-bold" id="users_rate">Users 265</span>
                      </div>
                      <a href="rental.html?id=${rental_id}">
                        <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
                      </a>
                      <div class="card-body">
                        <div class="d-flex">
                          <p>${description}</p>
                        </div>
                        
                      </div>
                      <form class="d-flex border-top py-3 px-2 comment-form">
                        <input type="text" name="comment" class="form-control border-0" id="comment-${element._id}" placeholder="Comment...">
                        <button type="submit" class="btn new-post unauth">Publish</button>
                      </form>
                  </div>
        `
        }else if(element.comments.length == 1)
        {
          card = `
        <div class="card shadow-lg mb-5" style="margin-top: 50px">
                      <div class="card-body d-flex">
                          <div class="d-flex">
                            <div class="profile-picture rounded-circle" id="post-rental" style="margin-right: 20px"></div>
                            <a href="#" class="text-dark text-decoration-none fw-bold align-self-center">${user_name}</a>
                          </div>
                      </div>
                      <div style="margin-bottom: 15px">
                        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
                        <a href="./list_propi.html?place=${place}" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
                      </div>
                      <hr>
                      <h4 style="margin-left: 80px">${accommodation_name}</h4>
                      <div class="d-flex" style="margin-bottom: 10px">
                        <span class="text-dark text-decoration-none fw-bold" style="margin-left: 100px;">Rate:</span>
                        <i class="fa fa-star checked align-self-center" style="margin-left: 20px;"></i>
                        <i class="fa fa-star checked align-self-center"></i>
                        <i class="fa fa-star checked align-self-center"></i>
                        <i class="fa fa-star align-self-center"></i>
                        <i class="fa fa-star align-self-center" style="margin-right: 10px"></i>
                        <span class="text-dark text-decoration-none fw-bold" id="users_rate">Users 265</span>
                      </div>
                      <a href="rental.html?id=${rental_id}">
                        <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
                      </a>
                      <div class="card-body">
                        <div class="d-flex">
                          <p>${description}</p>
                        </div>
                        <hr>
                        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">${element.comments[0].user_name}</a> ${element.comments[0].comment_text}</p>
                      </div>
                      <form class="d-flex border-top py-3 px-2 comment-form">
                        <input type="text" name="comment" class="form-control border-0" id="comment-${element._id}" placeholder="Comment...">
                        <button type="submit" class="btn new-post unauth">Publish</button>
                      </form>
                  </div>
        `
        }else
        {
          const reverse_array = element.comments.reverse();
          card = `
        <div class="card shadow-lg mb-5" style="margin-top: 50px">
                      <div class="card-body d-flex">
                          <div class="d-flex">
                            <div class="profile-picture rounded-circle" id="post-rental" style="margin-right: 20px"></div>
                            <a href="#" class="text-dark text-decoration-none fw-bold align-self-center">${user_name}</a>
                          </div>
                      </div>
                      <div style="margin-bottom: 15px">
                        <p class="fw-bold" style="margin-left: 85px; display: inline; font-size: 18px; margin-right: 5px">Place:</p>
                        <a href="./list_propi.html?place=${place}" class="text-dark text-decoration-none fw-bold" style="display: inline">${place}</a>
                      </div>
                      <hr>
                      <h4 style="margin-left: 80px">${accommodation_name}</h4>
                      <div class="d-flex" style="margin-bottom: 10px">
                        <span class="text-dark text-decoration-none fw-bold" style="margin-left: 100px;">Rate:</span>
                        <i class="fa fa-star checked align-self-center" style="margin-left: 20px;"></i>
                        <i class="fa fa-star checked align-self-center"></i>
                        <i class="fa fa-star checked align-self-center"></i>
                        <i class="fa fa-star align-self-center"></i>
                        <i class="fa fa-star align-self-center" style="margin-right: 10px"></i>
                        <span class="text-dark text-decoration-none fw-bold" id="users_rate">Users 265</span>
                      </div>
                      <a href="rental.html?id=${rental_id}">
                        <img src="//localhost:3000/${photo}" alt="post" class="img-fluid" style="width: 900px;">
                      </a>
                      <div class="card-body">
                        <div class="d-flex">
                          <p>${description}</p>
                        </div>
                        <hr>
                        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">${reverse_array[1].user_name}</a> ${element.comments[1].comment_text}</p>
                        <p class="mb-0"><a href="#" class="text-dark fw-bold text-decoration-none">${reverse_array[0].user_name}</a> ${element.comments[0].comment_text}</p>
                      </div>
                      <form class="d-flex border-top py-3 px-2 comment-form">
                        <input type="text" name="comment" class="form-control border-0" id="comment-${element._id}" placeholder="Comment...">
                        <button type="submit" class="btn new-post unauth">Publish</button>
                      </form>
                  </div>
        `
        }
      }
      container.innerHTML += card;
    });

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
    
    const comments = document.querySelectorAll("form.comment-form");

    comments.forEach(element => {
      element.addEventListener('submit', (ev) => {
        ev.preventDefault();
        var input_comment = document.querySelector(`input#${ev.path[0][0].id}`);
        
        let yourDate = new Date();
        yourDate.toISOString().split('T')[0];
        
        let comment_values = {
          comment: "",
          time: "",
          publication_id: ""
        }

        comment_values.comment = input_comment.value;
        comment_values.publication_id = ev.path[0][0].id.split('-').pop();
        comment_values.time = yourDate;

        const token = localStorage.getItem('token');
        axios.put('//localhost:3000/publications?token='+token, comment_values).then((response) =>
        {
          window.location = '/index.html';
        }).catch((err) =>   {
          console.log(err);
          alert('No estás autenticado');
          localStorage.removeItem('token');
          window.location = '/log_in.html';
        });

      });
    });
  }).catch((err) => {
    console.log('Hubo un error', err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  get_publications();

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
