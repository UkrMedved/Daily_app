app.controller('mainCtrl',function($scope, $state){
    $scope.active = 0;
    $scope.title='';
    $scope.taskList = JSON.parse(localStorage.getItem('taskList')) ? JSON.parse(localStorage.getItem('taskList')) : [];
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
        $scope.taskList.forEach(function(key,i){
            if(item.title == key.title){
                $scope.taskList.splice(i,1);
            }
        })
        localStorage.setItem("taskList", JSON.stringify($scope.taskList));
        if (item.id == $scope.active) {
            $state.go('home')
        }
    }
})