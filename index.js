var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'main.html',
                controller:'firstCtrl'
            })
            .state('home.comments', {
                url: '/comments/:id',
                views: {
                      'comments': {
                        templateUrl: 'comment.html',
                        controller: 'secondCtrl'
                       },
                 }
            })
            
})
.controller('firstCtrl',function($scope, $state){
    $scope.active = 0;
    $scope.title='';
    $scope.taskList = JSON.parse(localStorage.getItem('taskList')) ? JSON.parse(localStorage.getItem('taskList')) : [];
    console.log($scope.taskList)
    $scope.addTask = function(title){
        $scope.newTask = {
            title: title,
            id: Date.now(),
            description: []
        }
        $scope.taskList.push($scope.newTask);
        localStorage.setItem("taskList", JSON.stringify($scope.taskList));
        $scope.title = '';
    }
    $scope.goActive = function(task){$scope.active = task.id}
    $scope.deleteTask = function(item){
        // console.log($scope.taskList)
        console.log(`${item.id},${$scope.active}`)
        $scope.taskList.forEach(function(key,i){
            if(item.title == key.title){
                $scope.taskList.splice(i,1);
            }
        })
        localStorage.setItem("taskList", JSON.stringify($scope.taskList));
        if (item.id == $scope.active) {
            console.log(item.id)
            $state.go('home')
        }
    }
})
.controller('secondCtrl', function($scope,$state,$stateParams){
    if(!$stateParams.id){$state.go('home');}   
    $scope.index = $stateParams.id;
    $scope.activeCom;
    $scope.place;
    $scope.newComment = '';
    // console.log('task',$scope.taskList)
    $scope.myFunct = function(keyEvent) {
        if (keyEvent.keyCode == 13 && keyEvent.ctrlKey){
            $scope.taskList[$scope.index].description.push($scope.newComment);
            // console.log($scope.taskList)
            localStorage.setItem("taskList", JSON.stringify($scope.taskList));
            $scope.newComment = '';
        }
      }
      $scope.goActiveCom = function(comment,$index){
          $scope.activeCom = comment;
          $scope.place = $index + 1;
        }
})
