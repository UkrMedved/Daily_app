var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/home');
        // $locationProvider.html5Mode(true);  
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/template/main.html',
                controller:'mainCtrl'
            })
            .state('home.comments', {
                url: '/comments/:id',
                views: {
                      'comments': {
                        templateUrl: 'app/template/comment.html',
                        controller: 'commentCtrl'
                       },
                 }
            })
            
})
