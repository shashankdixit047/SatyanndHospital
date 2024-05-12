// FOr experience form
// Modify the function to show a feedback message while sending the form
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("experience-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var form = event.target;
        var formData = new FormData(form);

        // Show feedback message while sending the form
        document.getElementById('alertMessage').innerText = "Sending Experience...";
        document.getElementById('alertMessage').style.display = "block";

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('alertMessage').innerText = "Experience Shared Successfully!";
                // Reset the form after 5 seconds
                setTimeout(function() {
                    form.reset();
                    document.getElementById('alertMessage').innerText = "Your Experience Pending Review for Website.";
                }, 5000); // 5000 milliseconds = 5 seconds
            } else {
                document.getElementById('alertMessage').innerText = "Failed to send message";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('alertMessage').innerText = "Something Went Wrong: " + error;
        });
    });
});