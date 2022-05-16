
var slideIndex2 = 1;
showSlides(slideIndex2);

function plusSlides(n) {
showSlides(slideIndex2 += n);
}

function currentSlide(n) {
showSlides(slideIndex2 = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides2");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex2 = 1}    
if (n < 1) {slideIndex2 = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].classList.remove("transisiku");
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex2-1].style.display = "block";  
slides[slideIndex2-1].classList.add("transisiku");
dots[slideIndex2-1].className += " active";
}