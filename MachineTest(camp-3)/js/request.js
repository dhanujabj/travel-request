// Function to validate the form
function validateForm() {
    let isValid = true;

    // Validate required fields
    const requiredFields = ['empId', 'empName', 'project', 'causeForTravel', 'source', 'destination', 'fromDate', 'noOfDays', 'modeOfTravel'];
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            isValid = false;
            const error = document.createElement('p');
            error.classList.add('error');
            error.textContent = `${field} is required.`;
            input.parentNode.insertBefore(error, input.nextSibling);
        }
    });

    // Validate date
    const fromDate = new Date(document.getElementById('fromDate').value);
    const today = new Date();
    if (fromDate < today) {
        isValid = false;
        const error = document.createElement('p');
        error.classList.add('error');
        error.textContent = 'From date cannot be in the past.';
        document.getElementById('fromDate').parentNode.insertBefore(error, document.getElementById('fromDate').nextSibling);
    }

    // Validate number of days
    const noOfDays = document.getElementById('noOfDays').value;
    if (noOfDays <= 0) {
        isValid = false;
        const error = document.createElement('p');
        error.classList.add('error');
        error.textContent = 'Number of days must be positive.';
        document.getElementById('noOfDays').parentNode.insertBefore(error, document.getElementById('noOfDays').nextSibling);
    }

    return isValid;
}

// Function to store form data in localStorage
function storeFormData() {
    const formData = {
        empId: document.getElementById('empId').value,
        empName: document.getElementById('empName').value,
        project: document.getElementById('project').value,
        causeForTravel: document.getElementById('causeForTravel').value,
        source: document.getElementById('source').value,
        destination: document.getElementById('destination').value,
        fromDate: document.getElementById('fromDate').value,
        noOfDays: document.getElementById('noOfDays').value,
        modeOfTravel: document.getElementById('modeOfTravel').value
    };

    // Retrieve existing data and add the new request
    const existingData = JSON.parse(localStorage.getItem('travelRequests')) || [];
    existingData.push(formData);
    localStorage.setItem('travelRequests', JSON.stringify(existingData));

    // Debugging: Verify data has been saved
    console.log("Data saved to localStorage:", localStorage.getItem('travelRequests'));
}

// Event listener for form submission
document.getElementById('travel-request-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // First, validate the form
    if (validateForm()) {
        // Store form data in localStorage
        storeFormData();

        // Handle form submission, e.g., show a success message
        alert('Form submitted successfully and data saved!');

        // Clear form fields and error messages
        document.getElementById('travel-request-form').reset();
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(error => error.remove());
    }
});

// Function to load saved data from localStorage (if any)
function loadFormData() {
    const savedData = localStorage.getItem('travelRequests');
    if (savedData) {
        const formDataArray = JSON.parse(savedData);
        const tableBody = document.getElementById('request-table').getElementsByTagName('tbody')[0];
        formDataArray.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.empName}</td>
                <td>${request.destination}</td>
                <td>${request.fromDate}</td>
                <td>${request.modeOfTravel}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Call the function to load saved data when the page loads
window.onload = loadFormData;
