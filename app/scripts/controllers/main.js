'use strict';
/**
 * @ngdoc function
 * @name lsiDashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lsiDashboard
 */
angular.module('lsiDashboard')
  .controller('MainCtrl', function($scope,$position) {
      $scope.topScore = {
        team:[
          {
            team_name: "Les papy",
            points: 14659
          },
          {
            team_name: "Les sudistes",
            points: 12569
          },
          {
            team_name: "Les hurluberlu",
            points: 11369
          },
          {
            team_name: "Les lorem ipsum",
            points: 10236
          },
          {
            team_name: "Les canards",
            points: 10123
          }
        ]
      }

  });
