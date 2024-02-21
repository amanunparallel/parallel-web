document.addEventListener('DOMContentLoaded', function() {
    // Select all checkbox input elements within elements with the class 'contact-checkbox-field'
    let checkboxes = document.querySelectorAll('.contact-checkbox-field input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        // Add a change event listener to each checkbox
        checkbox.addEventListener('change', function() {
            // Find the span element with the class 'contact-check-box-label' within the same 'contact-checkbox-field' as the checkbox
            let label = checkbox.closest('.contact-checkbox-field').querySelector('.contact-check-box-label');
            
            if (label) {
                // Toggle the 'active' class on the label
                label.classList.toggle('active');
            }
        });
    });
});
