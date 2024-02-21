document.addEventListener('DOMContentLoaded', function() {
    var tiles = document.querySelectorAll('.tile:not(.black)');
    var colors = ['#9260DE', '#DF65B2', '#FAE561', '#54B8F3'];

    tiles.forEach(function(tile) {
        tile.addEventListener('mouseenter', function() {
            var currentColor = window.getComputedStyle(tile).backgroundColor;
            var newColor;

            do {
                newColor = colors[Math.floor(Math.random() * colors.length)];
            } while (newColor === currentColor);

            tile.style.setProperty('--hover-color', newColor);
        });
    });
});
