//^ tabs

let tabsNavItem = document.querySelectorAll('.tabs__nav-item')
let tabsBlocks = document.querySelectorAll('.tabs__block')

tabsNavItem[0].classList.add('active')
tabsBlocks[0].classList.add('open')

tabsNavItem.forEach(btn => btn.addEventListener('click', (e) => {
	let index = e.currentTarget.dataset.tab

	tabsNavItem.forEach(el => {
		if (el == e.currentTarget) el.classList.add('active')
		else el.classList.remove('active')
	})

	tabsBlocks.forEach(el => {
		if (el.dataset.tab == index) el.classList.add('open')
		else el.classList.remove('open')
	})
}))


