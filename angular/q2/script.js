angular.module('studentApp', [])
    .controller('StudentController', function($scope) {
        $scope.students = [
            { firstname: 'Amit', lastname: 'Kumar', address: 'Delhi', mobile: '1234567890', class: 'X', division: 'A' },
            { firstname: 'Anand', lastname: 'Singh', address: 'Bangalore', mobile: '0987654321', class: 'X', division: 'B' }
        ];

        $scope.addStudent = function() {
            if ($scope.studentForm.$valid) {
                $scope.students.push({
                    firstname: $scope.newStudent.firstname.toUpperCase(),
                    lastname: $scope.newStudent.lastname.toUpperCase(),
                    address: $scope.newStudent.address.toUpperCase(),
                    mobile: $scope.newStudent.mobile,
                    class: $scope.newStudent.class.toUpperCase(),
                    division: $scope.newStudent.division.toUpperCase()
                });
                $scope.newStudent = {};
                $scope.studentForm.$setPristine();
            }
        };

        $scope.deleteStudent = function(index) {
            $scope.students.splice(index, 1);
        };
        $scope.searchStudent = function() {
            if ($scope.searchText) {
              var searchText = $scope.searchText.toUpperCase();
              $scope.students.forEach(function(student) {
                var fullName = (student.firstname + ' ' + student.lastname).toUpperCase();
                if (fullName.indexOf(searchText) > -1) {
                  student.show = true;
                } else {
                  student.show = false;
                }
              });
            } else {
              $scope.students.forEach(function(student) {
                student.show = true;
              });
            }
          };
          

        $scope.resetSearch = function() {
            $scope.searchText = '';
            $scope.students.forEach(function(student) {
                student.show = true;
            });
        };

    })
    .directive('onlyDigits', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                if (!ngModelCtrl) {
                    return;
                }

                ngModelCtrl.$parsers.push(function(val) {
                    if (angular.isUndefined(val)) {
                        val = '';
                    }
                    var clean = val.replace(/[^0-9]+/g, '');
                    if (val !== clean) {
                        ngModelCtrl.$setViewValue(clean);
                        ngModelCtrl.$render();
                    }
                    return clean;
                });
            }
        };
    });