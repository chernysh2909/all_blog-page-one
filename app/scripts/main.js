console.log('\'Allo \'Allo!');
$(document).ready(function() {
    $('#owl-demo').owlCarousel({
        singleItem: true,
        // navigation:true,
        paginationSpeed: 800
    });
    var owl = $('#owl-demo');

    owl.owlCarousel({

        singleItem: true,
        // itemsDesktop: [1199, 3],
        // itemsDesktopSmall: [979, 3],
        pagination: false
    });

    // Custom Navigation Events
    $('#pref').click(function() {
        owl.trigger('owl.next');
    })
    $('#next').click(function() {
        owl.trigger('owl.prev');
    });

    $('.hamburger ').show();
    $('#banner').hide();

    $('.hamburger ').click(function(event) {
        event.preventDefault(); // Для того чтобы при нажатии на ссылку не кидало вверх
        $('#banner ').slideToggle('fast');
    });



});
