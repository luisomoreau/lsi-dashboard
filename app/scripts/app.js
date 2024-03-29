'use strict';
/**
 * @ngdoc overview
 * @name lsiDashboard
 * @description
 * # lsiDashboard
 *
 * Main module of the application.
 */
angular
    .module('lsiDashboard', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
        });

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'lsiDashboard',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'toggle-switch',
                                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                    "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                ]
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngAnimate',
                                files: ['bower_components/angular-animate/angular-animate.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngResource',
                                files: ['bower_components/angular-resource/angular-resource.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngSanitize',
                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                            }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngTouch',
                                    files: ['bower_components/angular-touch/angular-touch.js']
                                })
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                controller: 'MainCtrl',
                templateUrl: '../views/pages/dashboard.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'lsiDashboard',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/directives/dashboard/stats/stats.js',
                                'scripts/directives/last_certificates/last_certificates.js',
                                'scripts/directives/last_examinations/last_examinations.js',
                                'scripts/directives/next_examination/next_examination.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.blank', {
                templateUrl: 'views/pages/blank.html',
                url: '/blank'
            })
            .state('dashboard.newcertificate', {
                templateUrl: 'views/pages/new_certificate.html',
                url: '/new-certificate',
                controller: 'MainCtrl',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'lsiDashboard',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/directives/next_examination/next_examination.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.examinations', {
                templateUrl: 'views/archives/examinations.html',
                url: '/archives/examinations'
            })
            .state('dashboard.certificates', {
                templateUrl: 'views/archives/certificates.html',
                url: '/archives/certificates'
            })
            .state('dashboard.cylinders', {
                templateUrl: 'views/archives/cylinders.html',
                url: '/archives/cylinders.html'
            })
            .state('dashboard.backoffice', {
                templateUrl: 'views/pages/back_office.html',
                url: '/back-office'
            })
            .state('dashboard.statistics', {
                templateUrl: 'views/pages/statistics.html',
                url: '/statistics'
            })
            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login'
            })
    }]);

    
