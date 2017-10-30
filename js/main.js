$(document).ready(function () {

    $('#icon-transition').on('click', function () {
        $(this).toggleClass('open');
    });

    //on navbar scroll add brand logo
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    $(function () {
        if( window.pageYOffset > 50 && $(document).width() >= 992){
            $('nav').addClass('navbar-shrink')
            $('.navbar-brand-logo').css('display','block');

            $(window).scroll(function() {
                if ($(document).scrollTop() > 50 && $(document).width() >= 992) {
                    $('nav').addClass('navbar-shrink');
                    $('.navbar-brand-logo').css('display','block');
                } else {
                    $('nav').removeClass('navbar-shrink');
                    $('.navbar-brand-logo').css('display','none');
                }
            });
        }
        else if( window.pageYOffset < 50 && $(document).width() >= 992){
            $(window).scroll(function() {
                if ($(document).scrollTop() > 50 && $(document).width() >= 992 ) {
                    $('nav').addClass('navbar-shrink');
                    $('.navbar-brand-logo').css('display','block');
                } else {
                    $('nav').removeClass('navbar-shrink');
                    $('.navbar-brand-logo').css('display','none');
                }
            });
        }

        if($(document).width() <= 991 && window.pageYOffset > 50 || $(document).width() <= 991 && window.pageYOffset < 50 ){
            $('nav').addClass('navbar-shrink');

        }


        var contactMenu = $('.navbar-menu').last();
        contactMenu.on('click',function(){
            $('html, body').animate({
                scrollTop: $($(this).find('a').attr('href')).offset().top - 100
            }, 500);
            return false;
        });
    });

});