$(document).ready(function () {
    $('#button3').click(function () {
        $('.ice-cream-list').empty();
        iceCreamFlavors.forEach(function (cream) {
            $('.ice-cream-list').append('<li>' + cream + '</li>');
        })
        document.getElementsByClassName('main-content')[0].style.display = 'flex';
    });
    $('#reset').click(function () {
        document.getElementsByClassName('main-content')[0].style.display = 'none';
        $('.ice-cream-list').empty();
    })
});