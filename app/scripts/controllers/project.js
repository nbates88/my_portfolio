'use strict';

angular.module('myNewProjectApp')
  .controller('ProjectCtrl', function ($scope, $stateParams) {
  	var appId = $stateParams.id;
  
  	if(appId === "1"){
  		$scope.title = "Wish Upon A Store";
  		$scope.description = "A mock e-commerce site built in 1.5 weeks with a 5-person team as part of Grace Hopper Academy";
  		$scope.technologies = "Express | Angular | Node | SCSS | Sequelize";
      $scope.deployed = "http://bit.ly/wishuponastore";
  		$scope.github = "https://github.com/nbates88/wish-upon-a-store/";
  		$scope.imageOne = "../../images/WUAS1.png";
  		$scope.imageTwo = "../../images/WUAS2.png";
  		$scope.imageThree = "../../images/WUAS3.png";
  	} else if(appId === "2"){
  		$scope.title = "Synethsize";
  		$scope.description = "A Buzzfeed-esque guessing game incorporating the user's Spotify playlists; built in 3 days as part of Grace Hopper Academy program.";
  		$scope.technologies = "Spotify Web API | Angular-Spotify Module | Material Design for Bootstrap | Express | Angular | CSS3 | Node";
      $scope.demos = "https://www.gracehopper.com/student-projects/synethsize";
  		$scope.github = "https://github.com/nbates88/synethsize";
  		$scope.imageOne = "../../images/Synethsize3.png";
  		$scope.imageTwo = "../../images/Synethsize1.png";
  		$scope.imageThree = "../../images/Synethsize2.png";
  	} else if(appId === "3"){
  		$scope.title = "Grasshopper";
  		$scope.description ="An npm module/dashboard allowing developers to collect bug reports from end users and manage the bug-fixing process. Built in 2.5 weeks as part of Grace Hopper Academy.";
  		$scope.technologies ="Express | Angular | Node | SCSS | Sequelize | HTML2Canvas | Highcharts | Material Design for Bootstrap";
      $scope.github = "https://github.com/nbates88/capstone";
  		$scope.demos = "https://youtube.com/watch?v=p-y-Miuu7Cs&feature=youtu.be";
  		$scope.imageOne = "../../images/Grasshopper1.png";
  		$scope.imageTwo = "../../images/Grasshopper2.png";
  		$scope.imageThree = "../../images/Grasshopper3.png";
  	} else if(appId === "4"){
      $scope.title = "Memory Game";
      $scope.description ="A simple implementation of the classic game.";
      $scope.technologies ="Angular | CSS3 | HTML5 | Javascript | jQuery;";
      $scope.github = "https://github.com/nbates88/memoryGameTwo";
      $scope.imageOne = "../../images/MemoryGame1.png";
      $scope.imageTwo = "../../images/memoryGame2.png";
      $scope.imageThree = "../../images/MemoryGame3.png";
    } else if(appId === "5"){
      $scope.title = "Honeycomb";
      $scope.description ="An Instagram-based e-commerce taggable image gallery builder app for Shopify stores";
      $scope.technologies ="JS | jQuery | C# | .NET | Razor | Azure";
      $scope.imageOne = "../../images/HC1.png";
      $scope.imageTwo = "../../images/HC2.png";
      $scope.imageThree = "../../images/HC3.png";
      $scope.imageFour = "../../images/HC4.png";
      $scope.demos = "https://vimeo.com/240416788";
    }
    else if(appId === "6"){
      $scope.title = "Annote-A-Song";
      $scope.description ="A Spotify feature that allows users to annote songs with comments and then playback songs to see all users' comments";
      $scope.technologies ="JS | TS | Angular2 | Node | Express | MongoDB | Mongoose | RxJS";
      $scope.github = "https://github.com/nbates88/song-tagger-app";
      $scope.imageOne = "../../images/AS3.png";
      $scope.imageTwo = "../../images/AS2.png";
      $scope.imageThree = "../../images/AS4.png";
      $scope.imageFour = "../../images/AS1.png";
      $scope.demos = "https://vimeo.com/240382366";
    }

  });
