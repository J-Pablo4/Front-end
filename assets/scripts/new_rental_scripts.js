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
});