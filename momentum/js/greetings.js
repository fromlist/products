const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');
const body = document.querySelector('body');

const HIDDEN_CLASSNAME = 'hidden';
const LOGIN_CLASSNAME = 'login'
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY,username);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = username;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	body.classList.add(LOGIN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}