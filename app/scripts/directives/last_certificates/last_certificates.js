'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('lsiDashboard')
	.directive('lastcertificates',function(){
		return {
        templateUrl:'scripts/directives/last_certificates/last_certificates.html',
        restrict: 'E',
        replace: true,
    	}
	});


