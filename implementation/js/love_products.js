// Select items
const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');

// Add a click event to the remove button
clearButton.addEventListener('click', function() {
    searchInput.value = ''; // Clear the text in the search bar
});

// Select items
const searchButton = document.getElementById('search-button');
const contentTexts = document.querySelectorAll('.content_text pre');

// Add a click event to the search button
searchButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    
    // Search for texts
    let found = false;
    contentTexts.forEach(text => {
        // Check if the word is present in the text
        if (text.innerText.toLowerCase().includes(query)) {
            text.style.backgroundColor = 'yellow'; // Highlight the existing text
            found = true;
        } else {
            text.style.backgroundColor = 'transparent'; // Unhighlight if the word is not present
        }
    });

    // If no text is found
    if (!found) {
        alert('No results found for "' + query + '"');
    }
});

