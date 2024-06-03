document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);

    // Define the Getform.io endpoint
    const getformEndpoint = 'https://getform.io/f/YOUR-UNIQUE-ENDPOINT-HERE'; // Replace with your actual Getform.io endpoint

    // Send the form data to Getform.io
    fetch(getformEndpoint, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
           
            window.location.href = 'todo.html'; 
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again.');
    });
});
