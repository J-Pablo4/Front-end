// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }

  function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    
    var popup = document.getElementById('myForm');
    popup.classList.toggle('active');
  }