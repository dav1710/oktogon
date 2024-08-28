$(document).ready(function(){
    function setActiveNav() {
        var scrollPosition = $(document).scrollTop();
        $('section').each(function() {
            var sectionOffset = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var sectionId = $(this).attr('id');
            
            if (scrollPosition >= sectionOffset - 100 && scrollPosition < sectionOffset + sectionHeight - 100) {
                $('nav a').removeClass('active');
                $('.navigation_numbers_wrap a').removeClass('active_side');
                $('nav a[href="#' + sectionId + '"]').addClass('active');
                $('.navigation_numbers_wrap a[href="#' + sectionId + '"]').addClass('active_side');
            }
        });
    }
    $(window).on('scroll', function() {
        setActiveNav();
    });
   
    $('#goTopBtn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000); // Время прокрутки в миллисекундах
    });
    setActiveNav(); 
});