'use strict';

angular.module('myNewProjectApp')
  .controller('ProjectCtrl', function ($scope, $stateParams) {
  	var appId = $stateParams.id;
  
  	if(appId === "1"){
  		$scope.title = "Wish Upon A Store";
  		$scope.description = "A mock e-commerce site built in 1.5 weeks with a 5-person team as part of Grace Hopper Academy";
  		$scope.deployed = "http://bit.ly/wishuponastore";
  		$scope.github = "https://github.com/nbates88/wish-upon-a-store/";
  		$scope.imageOne = "../../images/WUAS1.png";
  		$scope.imageTwo = "../../images/WUAS2.png";
  		$scope.imageThree = "../../images/WUAS3.png";
  	} else if(appId === "2"){
  		$scope.title = "Synethsize";
  		$scope.description = "A Buzzfeed-esque guessing game incorporating the user's Spotify playlists; built in 3 days as part of Grace Hopper Academy program.";
  		$scope.demos = "https://www.gracehopper.com/student-projects/synethsize";
  		$scope.github = "https://github.com/nbates88/capstone";
  		$scope.imageOne = "../../images/Synethsize3.png";
  		$scope.imageTwo = "../../images/Synethsize1.png";
  		$scope.imageThree = "../../images/Synethsize2.png";
  	} else if(appId === "3"){
  		$scope.title = "Grasshopper";
  		$scope.description ="An npm module/dashboard allowing developers to collect bug reports from end users and manage the bug-fixing process. Built in 2.5 weeks as part of Grace Hopper Academy.";
  		$scope.github = "https://github.com/nbates88/synethsize";
  		$scope.demos = "https://youtube.com/watch?v=p-y-Miuu7Cs&feature=youtu.be";
  		$scope.imageOne = "../../images/Grasshopper1.png";
  		$scope.imageTwo = "../../images/Grasshopper2.png";
  		$scope.imageThree = "../../images/Grasshopper3.png";
  	}

  });
