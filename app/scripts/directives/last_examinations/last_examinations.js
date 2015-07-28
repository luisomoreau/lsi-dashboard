'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('lsiDashboard')
	.directive('lastexaminations',function(){
		return {
        templateUrl:'scripts/directives/last_examinations/last_examinations.html',
        restrict: 'E',
        replace: true,
    	}
	});


