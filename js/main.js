$(document).ready(function(){
    $("#option-1").addClass("active");
    $("#content-one").show();
    $("#content-two").hide();
    $("#content-three").hide();

    $("#option-1").click(function(){
        //Option Tab Class active
        $("#option-1").addClass("active");
        $("#option-2").removeClass("active");
        $("#option-3").removeClass("active");

        //Option Tab Content Show
        $("#content-one").show();
        $("#content-two").hide();
        $("#content-three").hide();

    })
    $("#option-2").click(function(){
        //Option Tab Class active
        $("#option-1").removeClass("active");
        $("#option-2").addClass("active");
        $("#option-3").removeClass("active");

        //Option Tab Content Show
        $("#content-one").hide();
        $("#content-two").show();
        $("#content-three").hide();

    })
    $("#option-3").click(function(){
        //Option Tab Class active
        $("#option-1").removeClass("active");
        $("#option-2").removeClass("active");
        $("#option-3").addClass("active");

        //Option Tab Content Show
        $("#content-one").hide();
        $("#content-two").hide();
        $("#content-three").show();

    })

    // Owl Slider Codes
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

});