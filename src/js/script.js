document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.querySelector('.hamburger'),
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
        });
    });
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

  $('.carousel').slick({
    pauseOnDotsHover:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
     responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        dots:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 888,
      settings: {
        arrows: false,
        dots:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots:true
      }
    }
  ]
  });

  $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

  $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
  
});