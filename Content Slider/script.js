$(document).ready(function(){
    let speed = 500; //fade speed
    let autoSwitch = true //auto slider option
    let autoSwitchSpeed = 3000 // auto slider speed

    // adds active class
    $('.slide').first().addClass('active')

    // hides all slides
    $('.slide').hide()

    // shows the element which has active class
    $('.active').show()

    $('#next').on('click', ()=>{
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active')
        }else{
            $('.oldActive').next().addClass('active')
        }
        $('.oldActive').removeClass('oldActive')
        $('.slide').fadeOut(speed)
        $('.active').fadeIn(speed)
    })

    $('#prev').on('click', ()=>{
        $('.active').removeClass('active').addClass('oldActive')
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active')
        }else{
            $('.oldActive').prev().addClass('active')
        }
        $('.oldActive').removeClass('oldActive')
        $('.slide').fadeOut(speed)
        $('.active').fadeIn(speed)
    })
})