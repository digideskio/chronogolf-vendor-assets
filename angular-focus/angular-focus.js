//
//  AngularJS directives for focusing on element
//  Modified version of http://stackoverflow.com/a/18295416/135296
//
angular.module('angularFocus',[]);

angular.module('angularFocus')

.directive('focusOn', function() {
   return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if(name === attr.focusOn) {
          elem[0].focus();
        }
      });
   };
})

.factory('$focus', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
  return function(name) {
    $timeout(function (){
      if(!$rootScope.$$phase) {
        $rootScope.$broadcast('focusOn', name);
      }
    });
  }
}]);