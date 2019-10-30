const tilt = $('.tilt-image').tilt();





$('.carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  autoPlay: true,
  prevNextButtons: false,
  draggable: false,
  autoPlay: 2500
});




















var $containerWidth = $(window).width();
$('button').click(function() {
    var $containerWidth = $(window).width();
});
if ($containerWidth <= 992) {

    $('#mais').click(function(e) {
        e.preventDefault();
        if ($('#vermais').hasClass('d-none')) {
            $('#vermais').removeClass('d-none');
            $('#mais').html('ver menos  <hr>');
        } else {
            $('#mais').html('ver mais <hr>');
            $('#vermais').addClass('d-none');
        }



    });



    $('.nav-link').click(function(e) {
        e.preventDefault();

        $(".img-one").removeClass("d-block");
        $("nav").removeClass("nav-shadow");
        $(".navbar-collapse").removeClass("animated slideInLeft");
        $(".navbar-collapse").css({ "opacity": 0 }).removeClass('show');
        $("#collapsibleNavId").collapse('hide');

        $(".effect-menu .on").addClass('off');
        $(".effect-menu .on").removeClass('on');

    });



    $(document).on('click', '.effect-menu .off', function(e) {
        e.preventDefault();

        $(".img-one").addClass("d-block");
        $(".img-two").addClass("d-none");
        $(".navbar-collapse").css({ "opacity": 1 }).addClass('show');
        $(".navbar-collapse").addClass("animated slideInLeft");
        $("nav").addClass("nav-shadow");


        $(this).removeClass('off');
        $(this).addClass('on');
    });

    $(document).on('click', '.effect-menu .on', function(e) {
        e.preventDefault();


        $("nav").removeClass("nav-shadow");
        $(".navbar-collapse").removeClass("animated slideInLeft");
        $(".navbar-collapse").css({ "opacity": 0 });

        $("#collapsibleNavId").collapse('hide');

        $(this).addClass('off');
        $(this).removeClass('on');
    });


    $(window).scroll(function() {

        var beginTop = $('#specs').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= beginTop) {
            $("#bg-full-nav-2").css({ "opacity": 1 });
            $("nav").css({ "top": "0px", "right": "0px" });

            $("nav").addClass("nav-collapse");

        } else {
            $("#bg-full-nav-2").css({ "opacity": 0 });
            $(".img-two").removeClass("d-block");

            $("nav").removeClass("nav-collapse");

        }
    })
} else {


    $(window).scroll(function() {

        var beginTop = $('#specs').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= beginTop) {
            $("#bg-full-nav-2").css({ "opacity": 1 });
            $("nav").css({ "top": "0px", "right": "0px" });
            $(".img-two").addClass("d-block");
            $("nav").addClass("nav-collapse");

        } else {
            $("#bg-full-nav-2").css({ "opacity": 0 });
            $("nav").css({ "top": "15px", "right": "15px" });
            $(".img-two").removeClass("d-block");
            $("nav").removeClass("nav-collapse");

        }
    })
}





function modal() { $("#modalcontato").addClass(""); }
