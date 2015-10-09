var app = angular.module('events',[])
      	app.controller('EventsControl',['$scope',function($scope){
      		$scope.Old;
      		$scope.Current;
      		$scope.showCurrent = function(){
      			if(old){
      				Current=!Current;
      			}
      		}
      		$scope.showOld = function(){
      			if(Current){
      				Old=!Old;
      			}
      		}
      	}])