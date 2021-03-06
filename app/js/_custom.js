$(document).ready(function () {
    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
        // ... more custom settings?
    });
    lazyLoadInstance.update();
   /* Header submenu */
   $('.header-submenu').parent().addClass('active-sub');
   /* Header Multilang */
   $('.multi-lang-item.active a').click(function () {
      $(this).parent().next('.multi-lang-item').css({'display':'block'});
   });
   $('.multi-lang-item a').click(function () {
       let lang = $(this).text();
       $('.multi-lang-item.active a').text(lang);
       if($(this).parent().hasClass('active')){
           console.log('changed')
       }else{
           $(this).parent().css({'display':'none'});
       }
   });
   /* Video slider */
    $('.video-slider').slick({
       arrows: true,
       draggable: true,
       infinite: true,
       swipeToSlide: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       lazyLoad: 'ondemand',
       swipe: true,
       prevArrow: '<button type="button" class="video-slider-left icofont-simple-left"></button>',
       nextArrow: '<button type="button" class="video-slider-right icofont-simple-right"></button>',
       responsive: [
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
               }
           }
       ]
    });
    /* Toggle Menu */
    $('.toggleNav').click(function () {
        $(this).toggleClass('active icofont-close');
        if($(this).hasClass('icofont-close')){
            $(this).removeClass('icofont-navigation-menu');
        }else{
            $(this).addClass('icofont-navigation-menu');
        }
        $('.header-nav').slideToggle('slow');
    });
    /* Toggle Catalog */
    $('.catalog-home-nav-item:first-of-type').addClass('active');
    $('.catalog-home-nav-item.active .hover-catalog').removeClass('hidden').prev('img').addClass('hidden');
    let currentHeader = $('.catalog-home-nav-item.active span').attr('data-href');
    $('#header').addClass(currentHeader);
    let catalogHitLink = $('.catalog-home-nav-item span');
    catalogHitLink.hover(function (e) {
        let currentUrl = $(this).attr('data-href');
        e.preventDefault();
        currentUrl = currentUrl.replace(/.*(\/)/g,'');
        $(this).parent().addClass('active').siblings().removeClass('active').find('.hover-catalog').addClass('hidden').prev('img').removeClass('hidden');
        $(this).find('.hover-catalog').removeClass('hidden').prev('img').addClass('hidden');
        $('#header').attr('class',currentUrl);
        $('#'+currentUrl).removeClass('hidden').siblings('ul').addClass('hidden');
        $('.header-banner.'+currentUrl).removeClass('hidden').siblings('.header-banner').addClass('hidden');
        $('.catalog-banner .catalog-title.'+currentUrl).removeClass('hidden').siblings('.catalog-title').addClass('hidden');
        console.log(currentUrl)
    });
   /* Product Toggle */
    $('.color-list-item').click(function () {
        let currentColor = $(this).attr('data-color');
        if($(`.${currentColor}`).hasClass('hidden')){
            $(`.${currentColor}`).removeClass('hidden').siblings('.main-img-product-container').addClass('hidden');
        }
    })
    $('.img-product-gallery-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let currentIMG = $(this).find('img').attr('src');
        let mainIMG = $(this).parent().prev('.main-img-product').find('img').attr('src');
        $(this).parent().prev('.main-img-product').find('img').attr('src',currentIMG);
        $(this).find('img').attr('src',mainIMG);
    });
});