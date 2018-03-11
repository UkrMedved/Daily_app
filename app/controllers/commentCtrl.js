app.controller('commentCtrl', function($scope,$state,$stateParams){
    if(!$stateParams.id){$state.go('home');}   
    $scope.index = $stateParams.id;
    $scope.activeCom;
    $scope.place;
    $scope.newComment = '';

    $scope.myFunct = function(keyEvent) {
        if (keyEvent.keyCode == 13 && keyEvent.ctrlKey){
            $scope.taskList[$scope.index].description.push($scope.newComment);
            localStorage.setItem("taskList", JSON.stringify($scope.taskList));
            $scope.newComment = '';
        }
      }
      $scope.goActiveCom = function(comment,$index){
          $scope.activeCom = comment;
          $scope.place = $index + 1;
        }
})