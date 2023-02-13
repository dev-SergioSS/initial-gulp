//^ header position

let header = document.querySelector('.header')
let oldScrollTop = 0;

document.addEventListener('scroll', (e) => {
	const scrollTop = document.documentElement.scrollTop;
	if (oldScrollTop > scrollTop) header.classList.add('show')
	else header.classList.remove('show')
	oldScrollTop = scrollTop;
});