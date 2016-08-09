'use strict';

/**
 * @ngdoc overview
 * @name myNewProjectApp
 * @description
 * # myNewProjectApp
 *
 * Main module of the application.
 */
angular
  .module('myNewProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular.filter'
  ])
  .config(function ($stateProvider) {
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .state('project', {
        url: '/project/:id',
       templateUrl: 'views/project.html',
       controller: 'ProjectCtrl',
       controllerAs: 'project'
      });
     
  })

