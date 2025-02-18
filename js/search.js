document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            element.style.backgroundColor = 'yellow'; // Highlight the matching elements
        } else {
            element.style.backgroundColor = ''; // Reset the background color
        }
    });
});
