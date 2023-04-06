angular.module('todoApp', [])
.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    { text: 'Task 1', completed: false, created: Date.now() },
    { text: 'Task 2', completed: false, created: Date.now() },
    { text: 'Task 3', completed: false, created: Date.now() }
  ];

  $scope.addTodo = function() {
    $scope.todos.push({ text: $scope.newTodo, completed: false, created: Date.now() });
    $scope.newTodo = '';
  };

  $scope.remove = function(todo) {
    var index = $scope.todos.indexOf(todo);
    $scope.todos.splice(index, 1);
  };

  $scope.complete = function(todo) {
    todo.completed = !todo.completed;
  };
})
.directive('myTodoCreatedTime', function() {
    return {
      restrict: 'E',
      template: '<p>{{creationTime}}</p>',
      scope: {
        createdTime: '='
      },
      link: function(scope, element, attrs) {
        scope.creationTime = new Date(scope.createdTime).toLocaleString();
      }
    };
  });
