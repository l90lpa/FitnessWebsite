var initialSlide = 0;
showSlide(initialSlide);


function showSlide(n)
{
	var slides = document.getElementsByClassName("slide");
	var buttons = document.getElementsByClassName("slideButton");
	var i;
	for(i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}
	for(i = 0; i < buttons.length; i++)
	{
		buttons[i].className = buttons[i].className.replace(" active", "")
	}
	slides[n].style.display = "block";
	buttons[n].className += " active";
}