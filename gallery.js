const container = document.getElementById('imageContainer');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
  container.scrollLeft += container.offsetWidth;
});

prev.addEventListener('click', () => {
  container.scrollLeft -= container.offsetWidth;
});

// MODEL for pop up

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var images = document.getElementsByClassName("gallery-image");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
    modalImg.src = this.href;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}



