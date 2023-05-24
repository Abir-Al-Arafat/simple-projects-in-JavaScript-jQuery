// setting event and fade speed 
let action = 'click'
let speed = '500'
// setting if other unclicked slides should kept open if a slide is clicked
let shutUnclickedSlides = true;

// event handler
$(document).ready(onSlideClick)

// functionality for slide 
function onSlideClick(){
    // event handler for question
    $('li.question').on(action, function(){
        // checking 
        shutUnclickedSlides ?
        // getting sibling element (answer)
        $(this).next()
        // adding toggle and speed
        .slideToggle(speed)
        // getting other list siblings (answer)
        .siblings('li.answer')
        // shutting down other list siblings (answer)
        .slideUp() 
            // runs if other unclicked siblings are supposed to be open 
            : $(this).next()
            .slideToggle(speed)
        // getting active img element
        let imgActive = $(this).children('img')
        // removing rotate class from non-active img elements
        $('img').not(imgActive).removeClass('rotate')
        imgActive.toggleClass('rotate')
    })
}