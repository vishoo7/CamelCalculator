
var camelCalcApp = angular.module('camelCalcApp', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngRoute']);

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

camelCalcApp.controller('AppCtrl', function($scope, $location) {

    $scope.age = {min: 14, max: 70, value: 22};
    $scope.height= {min: 140, max: 220, value: 176};

    $scope.hairlengths = ['long','middle','short'];
    $scope.haircolors = ['blonde','brown','black','red','grey'];
    $scope.eyecolors = ['blue','green','brown','grey'];

    $scope.beards = [{
        value: 'none',
        img: './images/beardnone.png'
      }, {
        value: 'small',
        img: './images/beardsmall.png'
      },{
        value: 'medium',
        img: './images/beardmiddle.png'
      },{
        value: 'large',
        img: './images/beardfull.png'
      }];
    $scope.bodytypes = [{
        value: 'muscular',
        img: './images/bodymuscular.png'
      }, {
        value: 'normal',
        img: './images/bodynormal.png'
      },{
        value: 'chubby',
        img: './images/bodychubby.png'
      }];

      //defaults
      $scope.hairlength=$scope.hairlengths[0];
      $scope.haircolor=$scope.haircolors[0];
      $scope.eyecolor=$scope.eyecolors[0];
      $scope.beard=$scope.beards[0].value;
      $scope.bodytype=$scope.bodytypes[0].value;
  });

camelCalcApp.controller('ResultsController', function($scope, $location) {
      var searchObject = $location.search();
      $scope.result = searchObject.result;
	});
