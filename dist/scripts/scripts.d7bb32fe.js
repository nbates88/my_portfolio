"use strict";angular.module("myNewProjectApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","angular.filter"]).config(["$stateProvider",function(a){a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).state("main",{url:"/mainTwo",templateUrl:"views/mainTwo.html",controller:"MainTwoCtrl",controllerAs:"mainTwo"}).state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).state("projects",{url:"/projects",templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).state("project",{url:"/project/:id",templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project"})}]),angular.module("myNewProjectApp").controller("MainCtrl",function(){}),angular.module("myNewProjectApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("myNewProjectApp").controller("ProjectsCtrl",function(){}),angular.module("myNewProjectApp").controller("ProjectCtrl",["$scope","$stateParams",function(a,b){var c=b.id;"1"===c?(a.title="Wish Upon A Store",a.description="A mock e-commerce site built in 1.5 weeks with a 5-person team as part of Grace Hopper Academy",a.deployed="http://bit.ly/wishuponastore",a.github="https://github.com/nbates88/wish-upon-a-store/",a.imageOne="../../images/WUAS1.df0ef91b.png",a.imageTwo="../../images/WUAS2.52531f42.png",a.imageThree="../../images/WUAS3.4b967da8.png"):"2"===c?(a.title="Synethsize",a.description="A Buzzfeed-esque guessing game incorporating the user's Spotify playlists; built in 3 days as part of Grace Hopper Academy program.",a.demo="http://www.gracehopper.com/student-projects/synethsize",a.github="https://github.com/nbates88/capstone",a.imageOne="../../images/Synethsize3.600cadf2.png",a.imageTwo="../../images/Synethsize1.ba2b348b.png",a.imageThree="../../images/Synethsize2.18870f07.png"):"3"===c&&(a.title="Grasshopper",a.description="An npm module/dashboard allowing developers to collect bug reports from end users and manage the bug-fixing process. Built in 2.5 weeks as part of Grace Hopper Academy.",a.github="https://github.com/nbates88/synethsize",a.demo="youtube.com/watch?v=p-y-Miuu7Cs&feature=youtu.be",a.imageOne="../../images/Grasshopper1.4d311ba6.png",a.imageTwo="../../images/Grasshopper2.0d3f6cae.png",a.imageThree="../../images/Grasshopper3.a35f10eb.png")}]),angular.module("myNewProjectApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <div class="jumbotron"> <h2>About Nichole</h2> <p> I recently graduated from Grace Hopper Academy, an immersive software development bootcamp, and am excited to begin my career as a software developer. Over the past four years I’ve worked with the major angel investor networks in the Middle East searching for viable technology startups in which to invest. My search for different technology startups drew me more to the actual development of the technology, so I started exploring software development through various online courses. I then decided to make a career change and so I pursued an education at Grace Hopper Academy.</p> <p>Over the past four months I’ve been immersed in a development environment where I was able to hone my software development skills and formalize my process. I’ve been exposed to different technologies and paradigms and have worked on multiple projects that range from building e-commerce websites, music-based games to software development tools.</p> <p>The curriculum I studied was focused on Javascript. During that time, I became proficient in Node.js, AngularJS, Express, Sequelize (PostgreSQL), amongst other technologies such as JQuery, HTML5, SASS/CSS and GitHub and continue to explore new technologies such as React and Redux on my own time.</p> </div> </div>'),a.put("views/main.html",'<div class="container"> <div class="jumbotron"> <h2>Nichole C. Bates</h2> <h3>Full Stack Software Engineer</h3> <div class="myPic"> <img src="../../images/Nichole_Small.2e4dee08.jpg" height="300px" width="auto"> </div> <p> <b>Proficient:</b> Javascript, Node, Express, Angular, Sequelize, SQL, PostgreSQL, jQuery, Git, HTML5, CSS3/SCSS, Bootstrap </p> <p> <b>Working Knowledge:</b> Swig, Gulp, Mocha, Chai, Jasmine, Sinon, Bluebird </p> <p> <b>Basic Knowledge:</b> React, Flux, Redux, Java, Android </p> <p> <b>Methodologies:</b> Agile, SCRUM </p> </div></div>'),a.put("views/mainTwo.html",'<div class="container"> <div class="jumbotron"> <h2>Nichole C. Bates</h2> <h3>Full Stack Software Engineer</h3> <div class="myPic"> <img src="../../images/Nichole_Small.2e4dee08.jpg" height="300px" width="auto"> </div> <p> <b>Proficient:</b> Javascript, Node, Express, Angular, Sequelize, SQL, PostgreSQL, jQuery, Git, HTML5, CSS3/SCSS, Bootstrap </p> <p> <b>Working Knowledge:</b> Swig, Gulp, Mocha, Chai, Jasmine, Sinon, Bluebird </p> <p> <b>Basic Knowledge:</b> React, Flux, Redux, Java, Android </p> <p> <b>Methodologies:</b> Agile, SCRUM </p> </div></div>'),a.put("views/project.html",'<div class="inside-content"> <div class="flex-container"> <div class="description"> <div class="app-title"> <h2> {{title}} </h2> </div> <div class="app-description"> {{description}} </div> <ul class="app-links"> <li ng-hide="!github"><a href="{{github}}">Github Repo</a> </li><li ng-hide="!demo"><a href="{{demos}">Demo Video</a> </li><li ng-hide="!deployed"><a href="{{deployed}}">Deployed Site</a> </li></ul> </div> <div class="screenshots"> <ul class="image"> <li><img src="{{imageOne}}"> </li><li><img src="{{imageTwo}}"> </li><li><img src="{{imageThree}}"> </li></ul> </div> </div> </div>'),a.put("views/projects.html",'<div class="inside-content"> <div class="panel panel-default" ui-sref="project({id: 1})"> <div class="panel-heading">Wish Upon A Store</div> <div class="panel-body"> &lt; / W &gt; </div> <div class="panel-heading h-footer">Grace Hopper Academy</div> </div> <div class="panel panel-default" ui-sref="project({id: 2})"> <div class="panel-heading">Synethsize</div> <div class="panel-body"> &lt; / S &gt; </div> <div class="panel-heading h-footer">Grace Hopper Academy</div> </div> <div class="panel panel-default" ui-sref="project({id: 3})"> <div class="panel-heading">Grasshopper</div> <div class="panel-body"> &lt; / G &gt; </div> <div class="panel-heading h-footer">Grace Hopper Academy</div> </div> </div>')}]);