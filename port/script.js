(function() {
    emailjs.init("TIVJ1CH601dQ_r90o"); // Replace YOUR_USER_ID with your EmailJS user ID

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Fetch form values
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send email
        emailjs.send('service_mfcbcpp', 'template_w1xlieq', formData)
            .then(function(response) {
                alert('Your message has been sent successfully!');
                document.getElementById('contactForm').reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
})();