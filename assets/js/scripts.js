function changeMode(){
changeClasses();
changeText();

}

function changeClasses(){
	button.classList.toggle(darkModeCLass);
	h1.classList.toggle(darkModeCLass);
	body.classList.toggle(darkModeCLass);
	footer.classList.toggle(darkModeCLass);
}

function changeText(){
	const lightMode = "Light Mode";
	const darkMode = "Dark Mode";
	if(body.classList.contains(darkModeCLass)){
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + " ON"
		return;
	}

	button.innerHTML = darkMode;
		h1.innerHTML = lightMode + " ON"


	
}
const darkModeCLass = "dark-mode"
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];


console.log(body[0]);

button.addEventListener("click", changeMode )
