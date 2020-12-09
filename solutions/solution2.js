$(document).ready(function () {
    $('#button2').click(function () {
        $('.ice-cream-list').empty();
        for (i = 0; i < iceCreamFlavors.length; i++) {
            $('.ice-cream-list').append('<li>' + iceCreamFlavors[i] + '</li>' );
        };
        document.getElementsByClassName('main-content')[0].style.display = 'flex';
    });
    $('#reset').click(function () {
        document.getElementsByClassName('main-content')[0].style.display = 'none';
        $('.ice-cream-list').empty();
    })
});