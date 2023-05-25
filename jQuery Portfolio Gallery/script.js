$(document).ready(function(){
    $('nav a').on('click', function(){
        // removing class from li and a elements
        $('nav li').removeClass('current');
        $('nav a').removeClass('current')

        // adding class to li and a elements
        $(this).addClass('current')
        $(this).parent().addClass('current')

        // set heading text
        $('h1#heading').text($(this).text())

        // getting category and filtering
        let category = $(this).text().toLowerCase().replace(' ', '-');
        // console.log(category);
        // removes hidden class if all projects is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden')
        }else{
            // filters to selected category
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden')
                }else{
                    $(this).fadeIn('slow').removeClass('hidden')
                }
            })
        }
        // stops link behaviour
        return false
    })

    $('ul#gallery li').on('mouseenter', function(){
        // data attribute values 
        let title = $(this).children().data('title')
        let desc = $(this).children().data('desc')

        // validation
        if(desc == null || desc == ''){
            desc = 'Click To Enlarge'
        }

        if(title == null){
            title = ''
        }

        // creating overlay div
        $(this).append(`<div class="overlay"></div>`)

        // getting overlay div
        let overlay = $(this).children('.overlay')
        console.log(overlay);

        // adding html to overlay
        overlay.html(`<h3>${title}</h3> <p>${desc}</p>`)
        console.log(overlay)

        // fade in overlay
        overlay.fadeIn(600)
    })

    // mouse leave overlay
    $('ul#gallery li').on('mouseleave', function(){
        // creating overlay div
        $(this).append(`<div class="overlay"></div>`)

        // getting overlay div
        let overlay = $(this).children('.overlay')

        // fade out overlay
        overlay.fadeOut(400)
    })
})