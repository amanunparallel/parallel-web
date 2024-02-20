// Get all div elements with the dotlottie attribute
const lottieDivs = document.querySelectorAll('div[dotlottie]');
if (lottieDivs.length > 0) { // Check if there are any such divs
    lottieDivs.forEach(div => {
        const lottieValue = div.getAttribute('dotlottie');
        if (lottieValue === 'src') {
            // If dotlottie value is 'src', remove the div itself
            div.parentNode.removeChild(div);
        } else {
            const player = div.querySelector('dotlottie-player');
            if (player) {
                if (!lottieValue) {
                    // If dotlottie value is not specified, remove only the dotlottie-player
                    div.removeChild(player);
                } else {
                    // Update the src attribute of the dotlottie-player
                    player.setAttribute('src', lottieValue);
                }
            }
        }
    });
}
