'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('lsiDashboard')
	.directive('nextexamination',function(){
		return {
        templateUrl:'scripts/directives/next_examination/next_examination.html',
        restrict: 'E',
        replace: true,
    	}
	});


