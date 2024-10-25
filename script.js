
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-list .card');

    filterButtons.forEach(filterBtn => {
        filterBtn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Highlight active button
            filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
            this.classList.add('btn-primary');

            // Show/hide projects
            projects.forEach(project => {
                if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
        document.getElementById('formFeedback').textContent = 'Your message has been sent successfully!';
        this.reset();
    } else {
        document.getElementById('formFeedback').textContent = 'Please fill out all fields.';
    }
});


document.getElementById('downloadButton').addEventListener('click', function() {
    // Trigger the click event on the hidden download link
    document.getElementById('downloadLink').click();
});