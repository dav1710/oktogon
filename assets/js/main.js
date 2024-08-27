$(document).ready(function(){
    function setActiveNav() {
        var scrollPosition = $(document).scrollTop();
        $('section').each(function() {
            var sectionOffset = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var sectionId = $(this).attr('id');
            
            if (scrollPosition >= sectionOffset - 100 && scrollPosition < sectionOffset + sectionHeight - 100) {
                $('nav a').removeClass('active');
                $('nav a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    }
    

    $('nav a').on('click', function(e) {
        e.preventDefault();

        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Время прокрутки в миллисекундах

        setActiveNav();
    });

    $('.navigation_numbers_wrap a').on('click', function(e) {
        // Отменяем стандартное поведение ссылки
        e.preventDefault();

        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Время прокрутки в миллисекундах

        setActiveNav();
    });
    $(window).on('scroll', function() {
        setActiveNav();
        
        // Показываем или скрываем кнопку "Вверх"
        if ($(window).scrollTop() > 300) {
            $('#goTopBtn').addClass('active_side');
        } else {
            $('#goTopBtn').removeClass('active_side');
        }
    });

    $('#goTopBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000); // Время прокрутки в миллисекундах
    });
    setActiveNav(); 
});