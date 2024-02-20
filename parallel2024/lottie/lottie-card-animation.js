const videos = document.querySelectorAll(".hover_video_wrapper .video");

// Loop over videos to add eventListeners
for (const video of videos) {
    // Ensure video plays in loop
    video.loop = true;

    // Play on Mouseover
    video.addEventListener('mouseover', function() { 
        video.play();
        // Feel free to add functionality here
    }, false);

    // Restart and pause on Mouseout
    video.addEventListener('mouseout', function() { 
        // Feel free to add functionality here
        video.currentTime = 0; // Restart video
        video.pause();
    }, false);
}
