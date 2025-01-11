const express = require('express');
const app = express();
const port = 3000;

// In-memory storage for clicks (use a database in production)
let clickCount = 0;

app.get('/track-click', (req, res) => {
    clickCount++;
    console.log(`Link clicked ${clickCount} times`);
    res.json({ message: 'Click tracked', clickId: clickCount });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

    document.getElementById('trackable-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Send a request to the backend to track the click
        fetch('/track-click')
            .then(response => response.json())
            .then(data => {
                console.log(data.message); // Log the response from the server
                // Redirect to the original link after tracking
                window.location.href = this.href;
            })
            .catch(error => console.error('Error tracking click:', error));
    });


    async function getToken() {
        try {
            const response = await federatedCredentialManager.get();
            // Handle the response, e.g., use the token
        } catch (error) {
            console.error('Error retrieving token:', error);
        }
    }
    
