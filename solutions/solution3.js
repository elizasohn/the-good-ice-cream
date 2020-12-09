$(document).ready(function () {
    $('#button3').click(function () {
        $('.ice-cream-list').empty();
        iceCreamFlavors.forEach(function (cream) {
            $('.ice-cream-list').append('<li>' + cream + '</li>');
        })
        document.getElementById('reset').style.display = 'block';
        document.getElementsByClassName('ice-cream-list')[0].style.display = 'block';
    });
    $('#reset').click(function () {
        document.getElementById('reset').style.display = 'none';
        document.getElementsByClassName('ice-cream-list')[0].style.display = 'none';
    })
});