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

  new WOW().init();

$('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('.overlay').fadeIn('slow');
        });
    });

$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };


    validateForms('#consultation form');

    $('input[name=phone]').mask("+3 (8099) 999-99-99");

});

function initMap(){ 
    const element = document.getElementById("map");
    const options = {
      zoom: 15,
      center: {lat: 55.7481, lng: 37.6271}
    };
    const image = 'icons/marker.png';

    const myMap = new google.maps.Map(element, options);

    const marker = new google.maps.Marker({
      position: {lat: 55.7481, lng: 37.6271},
      map: myMap,
      icon: image
    });

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener ("click", function(e) {
            e.preventDefault();
            const blockId = anchor.getAttribute('href');
            document.querySelector('' + blockId).scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        })
    }

    // const InfoWindow = new google.maps.InfoWindow({
    //   content: "<div class='address'> <p class='address__city'>г. Москва</p> <p class='address__street'>ул. Садовническая, дом 5,офис 4-6, 700 от м. Новокузнецкая</p> <p class='address__tel'>Тел: +7 (926) 423 01 00</p> <p class='address__email'>info@glopt.ru</p></div>"
    // });

    // InfoWindow.open(myMap, marker);
  }