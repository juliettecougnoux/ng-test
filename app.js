var app = angular.module('Todo', []);

app.controller('TodoListController', function($scope) {
  console.log('Init TodoListController');
  $scope.title = "Liste des choses à faire";
  $scope.list = JSON.parse(localStorage.getItem('list')) || [];
  $scope.addItem = function() {
    $scope.list.push($scope.newItem);
    $scope.newItem = '';
    save() ;
   }
    $scope.delete = function(index){
      $scope.list.splice(index, 1);
      save();
    }
    $scope.deleteAll = function(index){
      $scope.list.splice(index);
      save();
    }
    var save = function(){
      localStorage.setItem("list", JSON.stringify($scope.list));
    };
});
