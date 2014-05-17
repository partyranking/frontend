/**
 * @module
 * Manages app
 *
 * @since 2013-05
 * @author Rafael Almeida Erthal Hermano
 */
var app, host;

app = angular.module('party-ranking', ['ngRoute', 'ngResource', 'ngCookies']);

app.config(function ($routeProvider) {
    'use strict';
});

host = location.hostname.replace('www.', '');
if (host === 'localhost') {
    app.value('apiUrl', 'localhost:8080');
} else {
    app.value('apiUrl', 'api.' + host);
}