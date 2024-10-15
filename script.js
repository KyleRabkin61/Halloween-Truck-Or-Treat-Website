$('document').ready(() => {
    $('.pic').on('mouseenter', function() {
        $(this).find('.pic-descrip').fadeIn();
    }).on('mouseleave', function() {
        $(this).find('.pic-descrip').fadeOut();
    });
})

// audio for join btn

const audio = new Audio();
audio.src = "audio/evil-laugh.mp3";