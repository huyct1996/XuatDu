$(document).ready(function() {
    $('.cate-toggle').click(function() {
        $('.slideshow .list-cate').toggleClass('active');
    });

    // $(window).resize(function(){
    //     console.log('a');
    //     let widthCurrent = $('.fanpage').width();
    //     console.log(widthCurrent);
    //     if(widthCurrent < 270) {
    //         $('.fanpage').addClass('off');
    //     }else {
    //         $('.fanpage').removeClass('off');
    //     }
    //     $(".fanpage").load("http://localhost/ThucTap/De4/index.html #fanpage");
    // });

    $('.pagination .page-item').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        // if('.pagination .page-item:nth-child(2) .active') {
        //     console.log('aaaa');
        //     // $('.pagination .page-item:first-child').addClass('closed');
        // }
    });

    // SLICK SLIDESHOW
    // SUPPLIES SLIDE
    $('.suppliers').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
});

