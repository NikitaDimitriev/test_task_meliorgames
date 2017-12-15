angular
    .module('app')
    .factory('TableService', TableService);

TableService.$inject = ['$http'];

function TableService($http) {
    return {
        postPerson: postPerson,
        getPersons:getPersons,
        deletePerson:deletePerson,
        search:search,
        update:update,
        getPersonById:getPersonById
    };

    function postPerson(person) {
		return $http.post('/api/person', person)
            .then(complete)
            .catch(failed);
    }

    function deletePerson(personsId) {
		return $http.post('/api/delete-persons', personsId)
            .then(complete)
            .catch(failed);
    }

    function getPersons() {
        return $http.get('/api/persons')
            .then(complete)
            .catch(failed);

    }
    function search(title) {
        return $http.get('/api/search', {params: {title: title}})
            .then(complete)
            .catch(failed);

    }
    function update(id, person) {
		return $http.put('/api/person/'+ id, person)
            .then(complete)
            .catch(failed);
    }
    function getPersonById(id) {
		return $http.get('/api/person/'+ id)
            .then(complete)
            .catch(failed);
    }

        function complete(response) {
            console.log(response)
            return response.data;
        }

        function failed(error) {
            console.error('XHR Failed for getAvengers.' + error.data);
        }
}