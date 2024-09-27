// Function to load content dynamically and apply transitions
function showContent(section) {
    // Hide all content sections with a fade-out effect
    document.querySelectorAll('.content-section').forEach(function(content) {
        content.style.opacity = '0';  // Start fade-out
        setTimeout(function() {
            content.style.display = 'none';  // Hide the content after fade-out
        }, 500);  // 500ms duration for fade-out
    });

    // Show the selected content section with a fade-in effect
    setTimeout(function() {
        const sectionElement = document.getElementById(section);
        sectionElement.style.display = 'block';
        setTimeout(function() {
            sectionElement.style.opacity = '1';  // Start fade-in
        }, 50);  // Small delay before starting fade-in
    }, 500);  // 500ms duration to match the fade-out timing
}

// Initial content load
document.addEventListener('DOMContentLoaded', function() {
    showContent('home');  // Load the home section by default
});
