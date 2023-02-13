let spoilers = document.querySelectorAll('.spoiler');

spoilers.forEach(el => el.addEventListener('click', (e) => {
	if (e.target.nodeName === 'SUMMARY') {
		e.preventDefault();
		let thisSpoiler = e.target.parentElement;

		if (thisSpoiler.open) thisSpoiler.open = false
		else {
			spoilers.forEach((el) => (el.open = false));
			thisSpoiler.open = true;
		}
	}
}))
