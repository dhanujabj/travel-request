// Event listener for the logout button
document.querySelector('button').addEventListener('click', () => {
    // Redirect to the login page
    window.location.href = '../html/login.html'; // Change the path as needed
});

// Function to retrieve travel requests data from localStorage
function getTravelRequests() {
    const savedData = localStorage.getItem('travelRequests'); // Retrieve saved data from localStorage
    if (savedData) {
        return JSON.parse(savedData); // Parse and return the stored data
    }
    return []; // Return an empty array if no data is found
}

// Function to filter and display travel details based on the selected priority
function filterTravelRequests(filter) {
    const requests = getTravelRequests(); // Get the travel requests data
    const travelDetailsContainer = document.querySelector('.travel-details'); // Get the container for travel details
    travelDetailsContainer.innerHTML = ''; // Clear the existing content

    // Filter requests based on priority and display them
    requests.forEach(request => {
        if (filter === 'all' || request.priority.toLowerCase() === filter.toLowerCase()) {
            const travelDetailsHTML = `
                <h2>Travel Details</h2>
                <p>Emp Id: ${request.empId}</p>
                <p>Emp Name: ${request.empName}</p>
                <p>Cause For Travel: ${request.cause}</p>
                <p>Source: ${request.source}</p>
                <p>Destination: ${request.destination}</p>
                <p>From ${request.startDate} to ${request.endDate} for ${request.days} days.</p>
                <p>Requested mode of travel: ${request.modeOfTravel}</p>
            `;
            travelDetailsContainer.innerHTML = travelDetailsHTML;
        }
    });
}

// Event listener for the filter dropdown change
document.getElementById('form-select').addEventListener('change', (event) => {
    const selectedFilter = event.target.value; // Get the selected priority filter
    filterTravelRequests(selectedFilter); // Filter and update the travel details section
});

// Initial load of all travel requests by default
filterTravelRequests('all');
