angular
	.module('app')
	.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['LoginService', '$state'];

function LoginCtrl(LoginService, $state) {
	var vm = this;
	var currentUser = [
		{ username: 'admin', password: 'admin' },
		{ username: 'Lion11', password: '123qwerty' },
		{ username: 'Tiger58', password: '00000' },
		{ username: 'eLephant_II', password: '228322' },
		{ username: 'new_orlean77', password: '123456789' },
	];
	vm.user = {
		name: '',
		password: ''
	};
	vm.loginUser = loginUser;


	function loginUser() {
		console.log('LogInCtrl');
		for (i = 0; i < currentUser.length; i++) {
			(currentUser[i].username === vm.user.name && currentUser[i].password === vm.user.password) ? $state.transitionTo('addItem') : vm.error = 'Не вірний логін або пароль'
		}
	};

};