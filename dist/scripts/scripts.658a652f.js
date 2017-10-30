"use strict";angular.module("myNewProjectApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","angular.filter"]).config(["$stateProvider",function(a){a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).state("main",{url:"/mainTwo",templateUrl:"views/mainTwo.html",controller:"MainTwoCtrl",controllerAs:"mainTwo"}).state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).state("projects",{url:"/projects",templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).state("project",{url:"/project/:id",templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project"})}]),angular.module("myNewProjectApp").controller("MainCtrl",function(){}),angular.module("myNewProjectApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("myNewProjectApp").controller("ProjectsCtrl",function(){}),angular.module("myNewProjectApp").controller("ProjectCtrl",["$scope","$stateParams",function(a,b){var c=b.id;"1"===c?(a.title="Wish Upon A Store",a.description="A mock e-commerce site built in 1.5 weeks with a 5-person team as part of Grace Hopper Academy",a.technologies="Express | Angular | Node | SCSS | Sequelize",a.deployed="http://bit.ly/wishuponastore",a.github="https://github.com/nbates88/wish-upon-a-store/",a.imageOne="../../images/WUAS1.df0ef91b.png",a.imageTwo="../../images/WUAS2.52531f42.png",a.imageThree="../../images/WUAS3.4b967da8.png"):"2"===c?(a.title="Synethsize",a.description="A Buzzfeed-esque guessing game incorporating the user's Spotify playlists; built in 3 days as part of Grace Hopper Academy program.",a.technologies="Spotify Web API | Angular-Spotify Module | Material Design for Bootstrap | Express | Angular | CSS3 | Node",a.demos="https://www.gracehopper.com/student-projects/synethsize",a.github="https://github.com/nbates88/synethsize",a.imageOne="../../images/Synethsize3.600cadf2.png",a.imageTwo="../../images/Synethsize1.ba2b348b.png",a.imageThree="../../images/Synethsize2.18870f07.png"):"3"===c?(a.title="Grasshopper",a.description="An npm module/dashboard allowing developers to collect bug reports from end users and manage the bug-fixing process. Built in 2.5 weeks as part of Grace Hopper Academy.",a.technologies="Express | Angular | Node | SCSS | Sequelize | HTML2Canvas | Highcharts | Material Design for Bootstrap",a.github="https://github.com/nbates88/capstone",a.demos="https://youtube.com/watch?v=p-y-Miuu7Cs&feature=youtu.be",a.imageOne="../../images/Grasshopper1.4d311ba6.png",a.imageTwo="../../images/Grasshopper2.0d3f6cae.png",a.imageThree="../../images/Grasshopper3.a35f10eb.png"):"4"===c?(a.title="Memory Game",a.description="A simple implementation of the classic game.",a.technologies="Angular | CSS3 | HTML5 | Javascript | jQuery;",a.github="https://github.com/nbates88/memoryGameTwo",a.imageOne="../../images/MemoryGame1.255da3d5.png",a.imageTwo="../../images/memoryGame2.png",a.imageThree="../../images/MemoryGame3.dd257022.png"):"5"===c?(a.title="Honeycomb",a.description="An Instagram-based e-commerce taggable image gallery builder app for Shopify stores",a.technologies="JS | jQuery | C# | Razor | Azure",a.imageOne="../../images/HC1.4beb244d.png",a.imageTwo="../../images/HC2.eab42e56.png",a.imageThree="../../images/HC3.c1fb5275.png",a.imageFour="../../images/HC4.582e3f5a.png",a.demos="https://vimeo.com/240416788"):"6"===c&&(a.title="Annote-A-Song",a.description="A Spotify feature that allows users to annote songs with comments and then playback songs to see all users' comments",a.technologies="JS | TS | Angular2 | Node | Express | MongoDB | Mongoose | RxJS",a.github="https://github.com/nbates88/song-tagger-app",a.imageOne="../../images/AS3.9c58d7d9.png",a.imageTwo="../../images/AS2.33feaee8.png",a.imageThree="../../images/AS4.062312cc.png",a.imageFour="../../images/AS1.4bbdf58e.png",a.demos="https://vimeo.com/240382366")}]),angular.module("myNewProjectApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <div class="jumbotron about"> <p> Full Stack Software Engineer<br> <span>Pollen, Inc, New York, NY </span> <span>October 2016-Present </span> <ul> <li> Single-handedly designed and developed an Instagram-based e-commerce taggable gallery builder app for Shopify stores [JS, jQuery, C#, Razor, Azure] </li><li> Collaborated with a designer to redesign the front-end experience of the main app </li><li> Reimplemented the entire front-end as the sole front-end developer [JS, jQuery, C#, Razor] </li><li> Actively propose improvements to release cycle such as feature flags </li><li> Deployed, automated and optimized a lead-generator [Python, MySQL, Ubuntu] </li><li> Mapped out business and technical requirements for integration with third party APIs </li><li> Identify and improve user experience issues and bugs [JS, jQuery, C#, Razor] </li><li> Add and deploy new product features [JS, jQuery, C#, Razor] </li><li> Successfully became a contributor within two days with no on-boarding and no prior knowledge of C# </li></ul> </p> <p> Grace Hopper Academy, a Fullstack Academy affiliate, New York, NY <ul> <li> Immersive software development bootcamp focusing on Javascript and the SEAN stack </li><li> Over 700 hours of coursework </li><li> Became proficient in Node.js, AngularJS, Express, Sequelize (PostgreSQL), amongst other technologies such as JQuery, HTML5, SASS/CSS </li></ul> </p> </div> </div>'),a.put("views/main.html",'<div class="container"> <div class="jumbotron"> <h2>Nichole C. Bates</h2> <h3>Full Stack Software Engineer</h3> <div class="flex-container home-page"> <div class="description"> <div class="myPic"> <img src="../../images/Nichole_Small.2e4dee08.jpg" height="300px" width="auto"> </div> </div> <div class="screenshots details"> <p> <b>Proficient:</b> Javascript, Node, Express, Angular1, Angular2, Sequelize, SQL, PostgreSQL, jQuery, C#, .Net, Razor, Git, HTML5, CSS3/SCSS, Bootstrap </p> <p> <b>Working Knowledge:</b> Swig, Gulp, Mocha, Chai, Jasmine, Sinon, Bluebird, Mongoose, MongoDB </p> <p> <b>Learning:</b> React, Flux, Redux, Java, Android </p> <p> <b>Methodologies:</b> Agile, SCRUM </p> </div> </div> <div class="bottom"> </div> </div></div>'),a.put("views/mainTwo.html",'<div class="container"> <div class="jumbotron"> <h2>Nichole C. Bates</h2> <h3>Full Stack Software Engineer</h3> <div class="myPic"> <img src="../../images/Nichole_Small.2e4dee08.jpg" height="300px" width="auto"> </div> <p> <b>Proficient:</b> Javascript, Node, Express, Angular1, Angular2, Sequelize, SQL, PostgreSQL, jQuery, C#, .Net, Razor, Git, HTML5, CSS3/SCSS, Bootstrap </p> <p> <b>Working Knowledge:</b> Swig, Gulp, Mocha, Chai, Jasmine, Sinon, Bluebird, Mongoose, MongoDB </p> <p> <b>Basic Knowledge:</b> React, Flux, Redux, Java, Android </p> <p> <b>Methodologies:</b> Agile, SCRUM </p> </div></div>'),a.put("views/project.html",'<div class="inside-content"> <div class="flex-container"> <div class="description"> <div class="app-title"> <h2> {{title}} </h2> </div> <div class="app-description"> <b>Description:</b> {{description}} </div> <div class="app-description"> <b>Technologies Used:</b> {{technologies}} </div> <div class="app-description"> <b>Links:</b> <ul class="app-links"> <li ng-hide="!github"><a ng-href="{{github}}">Github Repo</a> </li><li ng-hide="!demos"><a ng-href="{{demos}}">Demo Video</a> </li><li ng-hide="!deployed"><a ng-href="{{deployed}}">Deployed Site</a> </li></ul> </div> </div> <div class="screenshots"> <ul class="image"> <li><img src="{{imageOne}}"> </li><li><img src="{{imageTwo}}"> </li><li><img src="{{imageThree}}"> </li><li><img src="{{imageFour}}"> </li></ul> </div> </div> </div>'),a.put("views/projects.html",'<div class="inside-content"> <div class="panel panel-default" ui-sref="project({id: 6})"> <div class="panel-heading">Annote-A-Song</div> <div class="panel-body"> &lt; / A &gt; </div> <div class="panel-heading h-footer">Fall 2017</div> </div> <div class="panel panel-default" ui-sref="project({id: 5})"> <div class="panel-heading">Honeycomb</div> <div class="panel-body"> &lt; / H &gt; </div> <div class="panel-heading h-footer">Poln, Inc</div> </div> <div class="panel panel-default" ui-sref="project({id: 3})"> <div class="panel-heading">Grasshopper</div> <div class="panel-body"> &lt; / G &gt; </div> <div class="panel-heading h-footer">Grace Hopper Academy</div> </div> <div class="panel panel-default" ui-sref="project({id: 1})"> <div class="panel-heading">Wish Upon A Store</div> <div class="panel-body"> &lt; / W &gt; </div> <div class="panel-heading h-footer">Grace Hopper Academy</div> </div> <div class="panel panel-default" ui-sref="project({id: 2})"> <div class="panel-heading">Synethsize</div> <div class="panel-body"> &lt; / S &gt; </div> <div class="panel-heading h-footer">Grace Hopper Academy</div> </div> <div class="panel panel-default" ui-sref="project({id: 4})"> <div class="panel-heading">Memory Game</div> <div class="panel-body"> &lt; / M &gt; </div> <div class="panel-heading h-footer">Summer 2016</div> </div> </div>')}]);