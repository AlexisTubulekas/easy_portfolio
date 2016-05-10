var myApp = angular.module('myApp', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
	$scope.hideContent1 = true
	$scope.hideContent2 = true
    $scope.hideContent3 = true
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };

    $scope.show1 = function(){

    	if($scope.hideContent1 = false){
    		$scope.hideContent1 = true
    		console.log('abc')

    	}

    	else{
    		console.log('ab cccc')
    	$scope.hideContent1 = false
    	$scope.hideContent2 = true
         $scope.hideContent3 = true
    	}
    }

    $scope.show2 = function(){

    	if($scope.hideContent2 = false){
    		$scope.hideContent2 = true

    	}
    	else{
    	$scope.hideContent2 = false
    	$scope.hideContent1 = true
         $scope.hideContent3 = true
    	}
    }
    $scope.show3 = function(){

        if($scope.hideContent3 = false){
            $scope.hideContent3 = true

        }
        else{
        $scope.hideContent3 = false
        $scope.hideContent1 = true
        $scope.hideContent2 = true
        }
    }

    $scope.aboutMe = function(){
    	console.log('c')
    }

     $scope.hoverPortrait = function(){
        console.log('pö')
        //document.getElementById("portrait").style.border = "solid 5px #63c6ae";

    }

    $scope.resetPortrait = function(){
        
        document.getElementById("portrait").style.border = "";
    }


	

}]);