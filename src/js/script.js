document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.querySelector('.fixed-hamburger__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link'),
      menuBlock = document.querySelectorAll('.menu__block');

	hamburger.addEventListener('click', () => {
	    menu.classList.add('active');
	    hamburger.classList.add("spanX");
	});


	closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	hamburger.classList.remove("spanX");
	});

	menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove("spanX");
        })
    })
	// на майбутє,якщо буду робити фіксоване меню для десктопа
    document.addEventListener("keydown", (e) => {
	    if (e.code === 'Escape') {
	        menu.classList.remove('active');
	        hamburger.classList.remove("spanX");
	    }
	});

	function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.list1').eq(i).toggleClass('list1_active');
            $('.list2').eq(i).toggleClass('list2_active');
        })
    });
};
toggleSlide('.btn_forward');
toggleSlide('.btn_back');
});