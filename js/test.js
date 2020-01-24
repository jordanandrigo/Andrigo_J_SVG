(() => {

/* this is a module pattern also called life */	

const mySpan = document.querySelector('main span');
	theSVG = document.querySelector('.svg-image');

function toggleSelected() {
	/* we want to add some kind of indicator
	 theat someone has selected n icon */

	 // debugger; 

	 this.classList.toggle('selected');

}


/* set up our triggers here */
	mySpan.addEventListener('click', toggleSelected);
	theSVG.addEventListener('click', toggleSelected);




})();