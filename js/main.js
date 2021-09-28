const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => 
{
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	//Local Storage
	if(document.body.classList.contains('dark'))
	{
		localStorage.setItem('dark-mode', 'true');
	}
	else
	{
		localStorage.setItem('dark-mode', 'false');
	}
});	

//Comprobacion
if(localStorage.getItem('dark-mode') === 'true')
{
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
}
else
{
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
  }