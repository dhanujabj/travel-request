// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Event listener for "Edit" button clicks
    document.getElementById('request-table').addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-button')) {
            const row = event.target.closest('tr');
            const empName = row.cells[0].innerText;
            const currentDestination = row.cells[1].innerText;
            const currentPriority = row.cells[2].innerText;
            const status = row.cells[3].innerText;

            // Log the data to console (or you can open a form for editing)
            console.log("Editing request for:", empName, currentDestination, currentPriority, status);

            // Prompt the user to edit the Destination and Priority
            const newDestination = prompt("Edit Destination:", currentDestination);
            const newPriority = prompt("Edit Priority (Normal/Critical):", currentPriority);

            // Check if the user has entered new values
            if (newDestination && newPriority) {
                // Update the table with new values
                row.cells[1].innerText = newDestination;
                row.cells[2].innerText = newPriority;

                // Optional: Save changes to the server (you can implement AJAX or form submission)
                console.log("Updated Destination:", newDestination);
                console.log("Updated Priority:", newPriority);
            } else {
                alert("You need to provide valid input for both fields.");
            }
        }
    });

    // Event listener for "Delete" button clicks
    document.getElementById('request-table').addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const row = event.target.closest('tr');
            
            // Confirm the deletion action
            const confirmation = confirm("Are you sure you want to delete this request?");
            
            if (confirmation) {
                // Delete the row from the table
                row.remove();
                alert("Request deleted successfully.");
            }
        }
    });

    // Event listener for logout button
    document.getElementById('logout-button').addEventListener('click', () => {
        // Handle logout functionality (e.g., redirect to login page)
        window.location.href = '../html/login.html';  // Example logout action
    });
});
