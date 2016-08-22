
var camelCalcApp = angular.module('camelCalcApp', ['ngRoute']);

camelCalcApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'inputs.html',
				controller  : 'AppCtrl'
			})

			.when('/results', {
				templateUrl : 'results.html',
				controller  : 'ResultsController'
			})

	});

camelCalcApp.controller('AppCtrl', function($scope) {

    $scope.age = {min: 14, max: 70, value: 22};
    $scope.heightincm = {min: 140, max: 220, value: 176};

    $scope.hairlengths = [{
        id: 1,
        label: 'long'
      }, {
        id: 2,
        label: 'middle'
      },{
        id: 3,
        label: 'short'
      },{
        id: 4,
        label: 'long'
    }];
    $scope.haircolors = [{
        id: 1,
        label: 'blonde'
      }, {
        id: 2,
        label: 'brown'
      },{
        id: 3,
        label: 'black'
      },{
        id: 4,
        label: 'red'
      },{
        id: 5,
        label: 'grey'
    }];
    $scope.eyecolors = [{
        id: 1,
        label: 'blue'
      }, {
        id: 2,
        label: 'green'
      },{
        id: 3,
        label: 'brown'
      },{
        id: 4,
        label: 'grey'
      }];
    $scope.beards = [{
        id: 1,
        label: 'none',
        img: './images/beardnone.png'
      }, {
        id: 2,
        label: 'small',
        img: './images/beardsmall.png'
      },{
        id: 3,
        label: 'medium',
        img: './images/beardmiddle.png'
      },{
        id: 4,
        label: 'large',
        img: './images/beardfull.png'
      }];
    $scope.bodytypes = [{
        id: 1,
        label: 'muscular',
        img: './images/bodymuscular.png'
      }, {
        id: 2,
        label: 'normal',
        img: './images/bodynormal.png'
      },{
        id: 3,
        label: 'chubby',
        img: './images/bodychubby.png'
      }];
  });
