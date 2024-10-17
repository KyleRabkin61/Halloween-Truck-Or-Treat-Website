$('document').ready(() => {

    // flyer script

    $('.more-info-btn').on('click', function() {
        $('.flyer').fadeIn()
    })

    // gallery script

    $('.pic').on('mouseenter', function() {
        $(this).find('.pic-descrip').fadeIn();
    }).on('mouseleave', function() {
        $(this).find('.pic-descrip').fadeOut();
    });

    // schedule script

    $('.date').on('click', function() {
        $('.date-answer').slideToggle()
    })
    $('.set-up').on('click', function() {
        $('.set-up-answer').slideToggle()
    })
    $('.event').on('click', function() {
        $('.event-answer').slideToggle()
    })

    // back to top script

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
            $('#myBtn').fadeIn(200)
        } else {
            $('#myBtn').fadeOut(200)
        }
}


})

// audio for join btn

const audio = new Audio();
audio.src = "audio/evil-laugh.mp3";


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

