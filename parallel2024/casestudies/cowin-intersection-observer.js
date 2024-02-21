    document.addEventListener("DOMContentLoaded", function() {
        // Offset percentage: 0.5 means 50% of the section must be in view
        const offset = 0.5;

        // Select the section with cowin='onview'
        const targetSection = document.querySelector('section[cowin="onview"]');
        // Select all elements within the section to which you want to add the class
        const targetElements = targetSection.querySelectorAll('.cowin__new-eight__img');

        // Create an intersection observer with the specified offset
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > offset) {
                    // Add the class "normal" to each target element when the section comes into view
                    targetElements.forEach(el => el.classList.add('normal'));
                    // Optionally, you can unobserve the target section after the class is added
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: offset  // Controls when the callback is invoked
        });

        // Observe the target section
        observer.observe(targetSection);
    });
