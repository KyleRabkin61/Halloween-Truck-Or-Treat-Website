$('document').ready(() => {
    $('.pic').on('mouseenter', function() {
        $(this).find('.pic-descrip').fadeIn();
    }).on('mouseleave', function() {
        $(this).find('.pic-descrip').fadeOut();
    });

    $('.more-info-btn').on('click', function() {
        $('.flyer').fadeToggle()
    })
})

// audio for join btn

const audio = new Audio();
audio.src = "audio/evil-laugh.mp3";