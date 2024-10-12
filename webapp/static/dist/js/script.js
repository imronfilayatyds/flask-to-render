document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-note');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const noteId = this.getAttribute('data-note-id');

            fetch(`/delete-note/${noteId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    const noteItem = this.closest('li');
                    noteItem.remove();
                } else {
                    alert('Error deleting note')
                }
            })
            .catch(error => console.log('Error:', error));
        });
    });
});

// Hide the alert after 2 seconds (2000 milliseconds)
setTimeout(function() {
    const alert = document.getElementById('alert');
    alert.classList.add('opacity-0');
    // Optionally remove it from the DOM after the transition
    setTimeout(() => alert.remove(), 500); // Wait for transition to finish before removing
}, 3000);