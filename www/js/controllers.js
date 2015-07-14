angular.module('starter.controllers', [])
angular.module('starter.controllers', ['angularCharts'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('frontCtrl', function($scope){

  var chartGPU = new CanvasJS.Chart("chartContainerGPU",
  {
    title:{
      text: "GPU Performance Summary"
    },
                animationEnabled: true,
    legend:{
      verticalAlign: "center",
      horizontalAlign: "left",
      fontSize: 14,
      fontFamily: "Helvetica"        
    },
    theme: "theme2",
    data: [
    {        
      type: "pie",       
      indexLabelFontFamily: "Garamond",       
      indexLabelFontSize: 12,
      indexLabel: "{label} {y}",
      toolTipContent:"{legendText} {y}",
      dataPoints: [
        {  y: 43.13, legendText:"GPK", indexLabel: "GPK {y} " },
            {  y: 34.64, legendText:"GPS", indexLabel: "GPS {y} " }
      ]
    }
    ]
  });
  chartGPU.render();

  var chartGPK = new CanvasJS.Chart("chartContainerGPK",
  {
    title:{
      text: "GPK Performance Summary"
    },
                animationEnabled: true,
    legend:{
      verticalAlign: "center",
      horizontalAlign: "left",
      fontSize: 14,
      fontFamily: "Helvetica"        
    },
    theme: "theme2",
    data: [
    {        
      type: "pie",       
      indexLabelFontFamily: "Garamond",       
      indexLabelFontSize: 12,
      indexLabel: "{label} {y}",
      toolTipContent:"{legendText} {y}",
      dataPoints: [
        {  y: 3.64, legendText:"GPP1", indexLabel: "GPP1 {y} " },
            {  y: 12.34, legendText:"GPP2", indexLabel: "GPP2 {y} " },
            {  y: 11.28, legendText:"GPP3", indexLabel: "GPP3 {y} " },
            {  y: 11.28, legendText:"GPP4", indexLabel: "GPP4 {y} " },
            {  y: 4.59, legendText:"KCS", indexLabel: "KCS {y} " }
      ]
    }
    ]
  });
  chartGPK.render();

  var chartGPS = new CanvasJS.Chart("chartContainerGPS",
  {
    title:{
      text: "GPS Performance Summary"
    },
                animationEnabled: true,
    legend:{
      verticalAlign: "center",
      horizontalAlign: "left",
      fontSize: 14,
      fontFamily: "Helvetica"        
    },
    theme: "theme2",
    data: [
    {        
      type: "pie",       
      indexLabelFontFamily: "Garamond",       
      indexLabelFontSize: 12,
      indexLabel: "{label} {y}",
      toolTipContent:"{legendText} {y}",
      dataPoints: [
        {  y: 17.32, legendText:"GPP5", indexLabel: "GPP5 {y} " },
            {  y: 17.32, legendText:"GPP6", indexLabel: "GPP6 {y} " }
      ]
    }
    ]
  });
  chartGPS.render();


});