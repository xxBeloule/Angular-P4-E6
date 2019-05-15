var voiture = angular.module('testApp', []);

voiture.controller('cars', function($scope, $http){

    $http.get('assets/js/voiture.json').then(function(res){
        $scope.voitures=res.data;
    });
});
