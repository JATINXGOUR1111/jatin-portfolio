// Responsive Navigation Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Basic Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevents the page from reloading
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    
    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        feedback.style.color = "#ff6b6b"; // Light red for errors on dark blue background
        feedback.innerText = "Please fill out all fields before submitting.";
        return false;
    }
    
    // Basic email validation check
    if (!email.includes('@') || !email.includes('.')) {
        feedback.style.color = "#ff6b6b";
        feedback.innerText = "Please enter a valid email address.";
        return false;
    }
    
    // Success scenario
    feedback.style.color = "#4ade80"; // Light green for success
    feedback.innerText = "Thank you! Your message has been validated successfully.";
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    return true;
}