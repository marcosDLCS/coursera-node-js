'use strict';

angular.module('conFusion.services', ['ngResource'])
  .constant('baseURL', 'http://192.168.1.205:3000/')
  .service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "dishes/:id", null, {
      'update': {
        method: 'PUT'
      }
    });

  }])

  .factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "leadership/:id", null, {'update': {method: 'PUT'}});

  }])

  .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "feedback/:id", null, {'update': {method: 'PUT'}});

  }])

  .factory('favoriteFactory', ['$localStorage', '$resource', 'baseURL', function ($localStorage, $resource, baseURL) {
    var favFac = {};
    var favorites = [];

    favFac.addToFavorites = function (index) {
      favorites = $localStorage.getObject('favorites', '[]');
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id == index)
          return;
      }
      favorites.push({id: index})
      $localStorage.storeObject('favorites', favorites);
    };

    favFac.deleteFromFavorites = function (index) {
      favorites = $localStorage.getObject('favorites', '[]');
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id == index) {
          favorites.splice(i, 1);
        }
      }
      $localStorage.storeObject('favorites', favorites);
    };

    favFac.getFavorites = function () {
      return $localStorage.getObject('favorites', '[]');
    };

    return favFac;
  }])

  .factory('$localStorage', ['$window', function ($window) {
    return {
      store: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      storeObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key, defaultValue) {
        return JSON.parse($window.localStorage[key] || defaultValue);
      }
    }
  }])

  .factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
    return $resource(baseURL + "promotions/:id");

  }])

;
