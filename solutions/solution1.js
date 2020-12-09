$(document).ready(function () {
    $('#button1').click(function () {
        $('.ice-cream-list').empty();
        iceCreamFlavors.map(function(cream) {
            $('.ice-cream-list').append( '<li>' + cream + '</li>');
        })
        document.getElementsByClassName('main-content')[0].style.display = 'flex';
    });
    $('#reset').click(function () {
        document.getElementsByClassName('main-content')[0].style.display = 'none';
    })
});