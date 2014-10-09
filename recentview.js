movieApp.controller('RecentViewCtrl', function($scope) {

 	$scope.recent = false;
    $scope.recentArray = [];
    
    $scope.recentSearch = function() {
        if (localStorage.length != 0) {
            $scope.recent = true;
            for (var i = 0; i < localStorage.length; i++) {
                var objStr = localStorage.getItem(localStorage.key(i));

                var obj = angular.fromJson(objStr);

                $scope.recentArray.push(obj);
            }
            console.log($scope.recentArray);
        }
    }
    $scope.recentSearch();
});
