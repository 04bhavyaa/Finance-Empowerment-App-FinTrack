const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

const credentials = [
  { username: 'raghav', password: 'raghav123' },
  { username: 'bhavya', password: 'bhavya123' },
  { username: 'ryan', password: 'ryan123' },
  { username: 'taranjot', password: 'taranjot123' },
  { username: 'bhuvnesh', password: 'bhuvnesh123' }
];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate login credentials
  const validLogin = credentials.some(cred => cred.username === username && cred.password === password);

  if (validLogin) {
    // Login successful, redirect to dashboard.html
    window.location.href = "index.html";
  } else {
    // Login failed
    errorMessage.textContent = 'Invalid username or password.';
  }
});