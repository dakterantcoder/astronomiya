(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
        new WOW().init();

        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();
        
        //Member Filter Isotop
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.col-12',
            layoutMode: 'fitRows',
        });

        // filter functions
        var filterFns = {
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.filters-button-group').on('click', '.filter-btn', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.filters-button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.filter-btn', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    })

    

    $(document).ready(function () {

        /*==== header Section Start here =====*/
        $("ul>li>ul").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (screen.width < 1200) {
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(300, "swing");
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown(300, "swing");
                    element.siblings('li').children('ul').slideUp(300, "swing");
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(300, "swing");
                }
            }
        })

        $('.header__ellepsis').on('click', function (e) {
            var element = $('.header__top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        $('.header__bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })
        

        // search bar
        $('.search_icon, .search__close').on('click', function () {
            $('.search').toggleClass('active');
        })
        

        //Header
        var fixed_top = $(".header__bottom");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("header-fixed animated fadeInDown");
            } else {
                fixed_top.removeClass("header-fixed animated fadeInDown");
            }
        });

        var body = $(".header--four>.header__top");
        $(window).on('scroll', function () {
            if (screen.width > 1200) {
                if ($(this).scrollTop() > 100) {
                    body.addClass("d-none");
                } else {
                    body.removeClass("d-none");
                }
            }
        });

        /*==== header Section End here =====*/

        // scroll up start here
        $(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '2%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });

            //Click event to scroll to top
            $('a.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });

        
        //Odometer
        $(".odometer").each(function () {
            $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                var el = document.querySelectorAll('.odometer')[i];
                el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
            });
        });


        // Testimonial slider start here
        var swiper = new Swiper('.banner__slider', {
            slidesPerView: 1,
            speed: 1200,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: ".banner__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            loop: true,
        });


        // Testimonial slider start here
        var swiper = new Swiper('.testimonial__slider', {
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 1200,
            navigation: {
                nextEl: '.testimonial__prev',
                prevEl: '.testimonial__next',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true
        });
        var swiper = new Swiper('.testimonial__slider__two', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 1500,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            breakpoints: {
				991: {
					slidesPerView: 1,
				},
			},
            pagination: {
                el: ".testimonial__pagination__two",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            loop: true,
        });


        // history slider
        // Testimonial slider start here
        var swiper = new Swiper('.history__slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1200,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
				480: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			},
        });

        // Project slider start here
        var swiper = new Swiper('.project__slider', {
            slidesPerView: 5,
            spaceBetween: 20,
            speed: 1200,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
				480: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1440: {
					slidesPerView: 4,
				},
			},
        });


        // Service slider start here
        var swiper = new Swiper('.service__slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1200,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".service__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            loop: true,
            breakpoints: {
				480: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			},
        });
        


        // sponsor slider start here
        var swiper = new Swiper('.sponsor__slider', {
            slidesPerView: 6,
            spaceBetween: 20,
            speed: 1200,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
				480: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
			},
        });

        


        // shop cart + - start here
        var CartPlusMinus = $('.cart-plus-minus');
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });

        // shop sidebar menu
        $(".shop-menu>li>ul").parent("li").addClass("catmenu-item-has-children");
        $('.shop-menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })

        // product view mode change js
        $(function() {
            $('.shop__mode').on('click', 'a', function (e) {
                e.preventDefault();
                var shopProductWrap = $('.shop__product');
                var viewMode = $(this).data('target');
                $('.shop__mode a').removeClass('active');
                $(this).addClass('active');
                shopProductWrap.removeClass('grids lists').addClass(viewMode);
            });
        });

        
        
        //Review Tabs
        $('.review__nav').on('click', 'li', function (e) {
            e.preventDefault();
            var reviewContent = $('.review__content');
            var viewRev = $(this).data('target');
            $('.review__nav li').removeClass('active');
            $(this).addClass('active');
            reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
        });


    });
    
    //Odometer
    $(".app__content ul li").each(function () {
        $(this).isInViewport(function (status) {
        if (status === "entered") {
            for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
            }
        }
        });
    });

    //contact form js
    $(function () {
        var form = $('#contact-form');
        var formMessages = $('.form-message');
        $(form).submit(function (e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });

    // wow animation
    new WOW().init();

}(jQuery));