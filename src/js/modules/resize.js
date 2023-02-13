function resizeWindow() {
	let widthWindow = document.body.clientWidth

	if (widthWindow > 998) {
		block.append(el)
	} else {
		block.prepend(el)
	}
}

resizeWindow()