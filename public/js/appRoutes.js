angular
.module('app')
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 
	function($stateProvider, $locationProvider, $urlRouterProvider) {

		$stateProvider

			.state('login', {
				templateUrl: 'views/login.html',
				url: '/',
				controller: 'LoginCtrl',
				controllerAs: 'vm'
			})
			.state('addItem', {
				templateUrl: 'views/additems.html',
				url: '/addItem',
				controller: 'AddItemsCtrl',
				controllerAs: 'vm'
			})
			
			$urlRouterProvider.otherwise('/');
}]);