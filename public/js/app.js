var app = angular.module('events',['ngSanitize','720kb.datepicker'])

      	app.controller('eventsControl',['$scope',function($scope){
      		$scope.Old;
      		$scope.Current;
                  $scope.newEvent;
                  $scope.newEventName;
                  $scope.newEventDate;
                  $scope.newEventType;
                  $scope.newEventDesc;
                  $scope.newEventTypeCaption;
                  $scope.showNew = function(){
                        $scope.Old=false;
                        $scope.Current=false;
                        $scope.newEvent=true;

                  }
                  $scope.setType = function(id,name){
                        console.log('Type set to '+id+' '+name)
                        $scope.newEventTypeCaption=name;
                        $scope.newEventType=id;
                        angular.element('#eventType').html(id)
                  }
      		$scope.showCurrent = function(){
                        $scope.Old=false;
                        $scope.Current=true;
                        $scope.newEvent=false;
      		}
      		$scope.showOld = function(){
                        $scope.Old=true;
                        $scope.Current=false;
                        $scope.newEvent=false;
      		}
      	}])
