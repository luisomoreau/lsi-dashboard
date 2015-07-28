'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 */
angular.module('sbAdminApp')
    .directive('topscores',function() {
        return {
            templateUrl:'scripts/directives/topscores/topscores.html',
            restrict: 'E',
            replace: true
        }
    });
