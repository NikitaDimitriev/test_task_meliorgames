angular
	.module('app')
	.controller('AddItemsCtrl', AddItemsCtrl);

AddItemsCtrl.$inject = ['TableService', '$state', '$window'];



function AddItemsCtrl(TableService, $state, $window) {
	var vm = this;
	vm.newPerson = {
		firstName: '',
		lastName: '',
		position: ''
	};
	vm.createPerson = createPerson;
	vm.updatePerson = update;
	vm.personToDelete = personToDelete;
	vm.persons = [];
	vm.currentPerson = {};
	vm.sortType = 'firstName';
	vm.sortReverse = false;
	vm.searchField = '';
	vm.searchPerson = searchPerson;
	vm.data = [];
	vm.modal = false;

	vm.sync = function (key) {
		if (key != null) {
			id = vm.persons[key]._id;
			vm.data.push(id);
		} else {
			for (var i = 0; i < vm.data.length; i++) {
				if (vm.data[i] == id) {
					vm.data.splice(i, 1);
				}
			}
		}
	};

	vm.displayModal = function (id) {
		console.log(id)
		vm.modal = !vm.modal;
		TableService.getPersonById(id)
		.then(function(data) {
			console.log(data);
			vm.currentPerson = data;
		});
	};


	activate();

	function activate() {
		getPersons();
	};

	function createPerson() {
		console.log(vm.newPerson);

		TableService.postPerson(vm.newPerson)
			.then(function (data) {
				$state.reload();
			});
	}

	function personToDelete() {
		console.log(vm.data);

		TableService.deletePerson(vm.data)
			.then(function (data) {
				$state.reload();
			});
	}

	function getPersons() {

		TableService.getPersons()
			.then(function (data) {
				vm.persons = data;
			});
	}

	function searchPerson() {
		console.log("search");
		TableService.search(vm.searchField)
			.then(function (data) {
				vm.persons = data;
			});
	}

	function update(personId) {
		TableService.update(personId, vm.currentPerson)
	            .then(function(data) {
	                $state.reload();
	            });
	}

};
