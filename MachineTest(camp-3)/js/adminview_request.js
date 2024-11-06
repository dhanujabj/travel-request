// Function to retrieve stored travel request data from localStorage
function getTravelRequests() {
    const savedData = localStorage.getItem('travelRequests');  // Get data from localStorage
    if (savedData) {
        console.log('Data retrieved:', savedData);  // Debugging: Check raw saved data
        return JSON.parse(savedData);  // Parse and return the saved requests
    }
    return []; // Return empty array if no data is found
}

// Function to save example data to localStorage (for testing purposes)
function saveExampleData() {
    const travelRequests = [
        { empName: 'John Doe', destination: 'Paris', priority: 'Critical' },
        { empName: 'Jane Smith', destination: 'New York', priority: 'Normal' },
        { empName: 'Alice Johnson', destination: 'Tokyo', priority: 'Critical' },
        { empName: 'Bob Brown', destination: 'London', priority: 'Rejected' }
    ];

    // Save the example data to localStorage
    localStorage.setItem('travelRequests', JSON.stringify(travelRequests));
}

// Function to populate the table with filtered data
function populateTable(filter) {
    const requests = getTravelRequests();  // Retrieve travel requests from localStorage
    const tableBody = document.getElementById('request-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear existing data

    console.log('Requests to populate:', requests);  // Debugging: Check the data being processed

    // Loop through each request to populate the table
    requests.forEach(request => {
        // Filter the requests based on priority
        if (filter === 'all' || request.priority.toLowerCase() === filter.toLowerCase()) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.empName}</td>
                <td>${request.destination}</td>
                <td>${request.priority}</td>
                <td><a href="../html/viewmore.html" class="view-more">View more</a></td>
            `;
            tableBody.appendChild(row);
        }
    });
}

// Event listener for form select change (filter dropdown)
document.getElementById('form-select').addEventListener('change', (event) => {
    const selectedFilter = event.target.value;
    console.log('Selected filter:', selectedFilter);  // Debugging: Check the selected filter
    populateTable(selectedFilter);  // Populate table based on the selected filter
});

// Initial table population (with 'all' selected as default)
populateTable('all');

// Event listener for the logout button
document.getElementById('logout-button').addEventListener('click', () => {
    // Handle logout functionality (e.g., redirect to login page)
    window.location.href = '../html/login.html';  // Example logout action
});


saveExampleData(); 

