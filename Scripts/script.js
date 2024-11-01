
	
window.addEventListener('scroll', reveal);

function reveal(){

	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint){

			reveals[i].classList.add('active');
		}else{

			reveals[i].classList.remove('active');
		}
	}
}

function EraseLoader(){
  const $Loader = document.getElementById('loader')
  setTimeout(()=>{
    $Loader.classList.add('Loaded')
  }, 1500)

  setTimeout(()=>{
    toggleLoadedClass()
  }, 1500)
  
  $Loader.addEventListener("transitionend", ()=>{$Loader.remove()})
}



function toggleLoadedClass() {
    // Obtén el elemento body
    const body = document.body;
    body.classList.add('loaded');
}


document.addEventListener("DOMContentLoaded", ()=>{
    EraseLoader()
    
})