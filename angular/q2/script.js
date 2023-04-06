// Define the studentManagementSystem module
var app = angular.module('studentManagementSystem', []);

// Define the studentController controller
app.controller('studentController', function($scope) {
  $scope.students = [];

  $scope.addStudent = function() {
    $scope.students.push({
      firstName: $scope.newStudent.firstName,
      lastName: $scope.newStudent.lastName,
      address: $scope.newStudent.address,
      mobileNo: $scope.newStudent.mobileNo,
      class: $scope.newStudent.class,
      division: $scope.newStudent.division
    });

    $scope.newStudent.firstName = '';
    $scope.newStudent.lastName = '';
    $scope.newStudent.address = '';
    $scope.newStudent.mobileNo = '';
    $scope.newStudent.class = '';
    $scope.newStudent.division = '';
  };
});
