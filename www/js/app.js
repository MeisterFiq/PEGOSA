// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.front', {
    url: "/front",
    views: {
      'menuContent': {
        templateUrl: "templates/front.html",
        controller: 'frontCtrl'
      }
    }
  })

  .state('app.GPU', {
    url: "/GPU",
    views: {
      'menuContent': {
        templateUrl: "templates/GPU.html"
      }
    }
  })

  .state('app.GPUPro', {
    url: "/GPUPro",
    views: {
      'menuContent': {
        templateUrl: "templates/GPU/GPU_Pro.html"
      }
    }
  })

  .state('app.GPUOEE', {
    url: "/GPUOEE",
    views: {
      'menuContent': {
        templateUrl: "templates/GPU/GPU_OEE.html"
      }
    }
  })

  .state('app.GPK', {
    url: "/GPK",
    views: {
      'menuContent': {
        templateUrl: "templates/GPK.html"
      }
    }
  })

  .state('app.GPKPro', {
    url: "/GPKPro",
    views: {
      'menuContent': {
        templateUrl: "templates/GPK/GPK_Pro.html"
      }
    }
  })

  .state('app.GPKOEE', {
    url: "/GPKOEE",
    views: {
      'menuContent': {
        templateUrl: "templates/GPK/GPK_OEE.html"
      }
    }
  })

  .state('app.GPKCrit', {
    url: "/GPKCrit",
    views: {
      'menuContent': {
        templateUrl: "templates/GPK/GPK_Crit.html"
      }
    }
  })

  .state('app.GPS', {
    url: "/GPS",
    views: {
      'menuContent': {
        templateUrl: "templates/GPS.html"
      }
    }
  })

  .state('app.GPSPro', {
    url: "/GPSPro",
    views: {
      'menuContent': {
        templateUrl: "templates/GPS/GPS_Pro.html"
      }
    }
  })

  .state('app.GPSOEE', {
    url: "/GPSOEE",
    views: {
      'menuContent': {
        templateUrl: "templates/GPS/GPS_OEE.html"
      }
    }
  })

  .state('app.GPSCrit', {
    url: "/GPSCrit",
    views: {
      'menuContent': {
        templateUrl: "templates/GPS/GPS_Crit.html"
      }
    }
  })

  .state('app.FAQ', {
    url: "/FAQ",
    views: {
      'menuContent': {
        templateUrl: "templates/FAQ.html"
      }
    }
  })

  .state('app.playlists', {
    url: "/playlists",
    views: {
      'menuContent': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/front');
});
