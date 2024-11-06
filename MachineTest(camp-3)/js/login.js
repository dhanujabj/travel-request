document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const userType = document.querySelector('select[name="userType"]').value;

    // Simulate login logic
    if (userType === 'admin' && username === 'admin' && password === 'admin123') {
        window.location.href = '../html/admin.html'; // Redirect to admin home page
    } else if (userType === 'employee' && username === 'employee' && password === 'employee123') {
        window.location.href = '../html/employee.html'; // Redirect to employee home page
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username, password, or user type';
    }
});
