$(document).ready(function(){
    let speed = 500; //fade speed when button is clicked
    let autoSwitch = true //auto slider option (on/off)
    let autoSwitchSpeed = 2000 // auto slider speed

    // adds active class
    $('.slide').first().addClass('active')

    // hides all slides
    $('.slide').hide()

    // shows the element which has active class
    $('.active').show()

    // function for moving to next slide
    function onNextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active')
        }else{
            $('.oldActive').next().addClass('active')
        }
        $('.oldActive').removeClass('oldActive')
        $('.slide').fadeOut(speed)
        $('.active').fadeIn(speed)
    }

    // function for moving to previous slide
    function onPrevSlide() {
        $('.active').removeClass('active').addClass('oldActive')
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active')
        }else{
            $('.oldActive').prev().addClass('active')
        }
        $('.oldActive').removeClass('oldActive')
        $('.slide').fadeOut(speed)
        $('.active').fadeIn(speed)
    }

    // goes to next slide if clicked
    $('#next').on('click', onNextSlide)

    // goes to previous slide if clicked
    $('#prev').on('click', onPrevSlide)

    // autoslider
    // if(autoSwitch){
    //     setInterval(onNextSlide, autoSwitchSpeed)
    // }

    autoSwitch && setInterval(onNextSlide, autoSwitchSpeed)

})