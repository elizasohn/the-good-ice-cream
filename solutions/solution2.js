$(document).ready(function () {
    $('#button2').click(function () {
        $('.ice-cream-list').empty();
        for (i = 0; i < iceCreamFlavors.length; i++) {
            $('.ice-cream-list').append('<li>' + iceCreamFlavors[i] + '</li>' );
        };
        document.getElementById('reset').style.display = 'block';
        document.getElementsByClassName('ice-cream-list')[0].style.display = 'block';
    });
    $('#reset').click(function () {
        document.getElementById('reset').style.display = 'none';
        document.getElementsByClassName('ice-cream-list')[0].style.display = 'none';
    })
});