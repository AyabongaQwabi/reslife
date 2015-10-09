var app = angular.module('events',[])
      	app.controller('eventsControl',['$scope',function($scope){
      		$scope.Old;
      		$scope.Current;
      		$scope.showCurrent = function(){
                        $scope.Old=false;
                        $scope.Current=true;
      		}
      		$scope.showOld = function(){
                        $scope.Old=true;
                        $scope.Current=false;
      		}
      	}])