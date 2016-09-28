/**
 * Created by zhangguodong on 16/9/28.
 */
var app = angular.module('app',[]);
app.controller("myCtrl", function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
