// Logout function to clear session or token and redirect to login page
function logout() {
    // Example of clearing localStorage or sessionStorage if any data is stored
    localStorage.clear();  // Clears localStorage
    sessionStorage.clear();  // Clears sessionStorage (if used)

    // Redirecting to login page after logout
    window.location.href = '../html/login.html';  // Change to your actual login page
}