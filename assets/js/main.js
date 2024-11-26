// SHOW PASSWORD
const showPassword = (loginPassword, loginEye) => {
  const input = document.getElementById(loginPassword),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      input.type = 'password';
      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};

showPassword('login-password', 'login-eye');
