// Seleciona os botões do menu
const btnLogin = document.getElementById('btn-show-login');
const btnRegister = document.getElementById('btn-show-register');

// Seleciona as telas (seções de formulário)
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');

// Função para exibir a tela de Login
btnLogin.addEventListener('click', () => {
  // Exibe a página de login e esconde a de cadastro
  loginPage.classList.remove('hidden');
  registerPage.classList.add('hidden');

  // Atualiza o estado visual dos botões no menu
  btnLogin.classList.add('active');
  btnRegister.classList.remove('active');
});

// Função para exibir a tela de Cadastro
btnRegister.addEventListener('click', () => {
  // Exibe a página de cadastro e esconde a de login
  registerPage.classList.remove('hidden');
  loginPage.classList.add('hidden');

  // Atualiza o estado visual dos botões no menu
  btnRegister.classList.add('active');
  btnLogin.classList.remove('active');
});