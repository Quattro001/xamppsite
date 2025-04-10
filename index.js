if (document.getElementById('registerForm')) {
    const registerForm = document.getElementById('registerForm');
   
    registerForm.addEventListener('submit', registerUser);
   
    function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const email = document.getElementById('registerEmail').value;
   
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password, email });
    localStorage.setItem('users', JSON.stringify(users));
   
    alert('Регистрация успешна!');
    window.location.href = 'login.html';
    }
   }
   
   if (document.getElementById('KlientLogin')) {
    const loginForm = document.getElementById('KlientLogin');
   
    loginForm.addEventListener('submit', loginUser);
   
    function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('patientUsername').value;
    const password = document.getElementById('patientPassword').value;
   
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
   
    if (user) {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
    alert('Вход успешен!');
    window.location.href = 'index.html';
    } else {
    alert('Неправильный логин или пароль!');
    }
    }
   }
   
   if (document.querySelectorAll('.book-button')) {
    const bookButtons = document.querySelectorAll('.book-button');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
   
    bookButtons.forEach(button => {
    button.addEventListener('click', redirectToBooking);
    button.style.display = isAuthenticated ? 'block' : 'none';
    });
   
    function redirectToBooking() {
    if (isAuthenticated) {
    window.location.href = 'Broni.html';
    } else {
    alert('Пожалуйста, войдите в систему для бронирования!');
    }
    }
   }
   
   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
   if (!isAuthenticated) {
    if (document.querySelectorAll('.book-button')) {
    const bookButtons = document.querySelectorAll('.book-button');
    bookButtons.forEach(button => {
    button.style.display = 'none';
    });
    }
   }