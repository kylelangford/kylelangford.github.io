var app = angular.module('UXAudit', [
    'ui.sortable', 
    'ngRoute',
    'chart.js',
    ]);

app.constant('URL', 'data/');

app.filter('render', function () {
  return function (value) {
    return value;
  };
});


app.config( function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/view1.html'
  })
  .otherwise({ redirectTo: '/'});

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

});

app.factory('DataService', function ($http, URL) {
  var getData = function () {
    return $http.get(URL + 'suggestions.json');
  };

  return {
    getData: getData
  };
});


app.controller('suggestionController', function (DataService, $sce) {
    var ctrl = this;
    ctrl.content = [];
    ctrl.sortReverse = false;
    ctrl.sortType = 'focus';
    ctrl.options = {
      legend: {
        display: true,
      }
    }

    ctrl.loadSuggestion = function () {
      // do nothing
    }

    ctrl.fetchContent = function () {
      DataService.getData().then(function (result) {

        ctrl.content = result.data;
        console.log(ctrl.content);

        ctrl.impactCount = _.countBy(ctrl.content, 'impact');
        ctrl.impactLabels = Object.keys(ctrl.impactCount);
        ctrl.impactData = Object.values(ctrl.impactCount);

        ctrl.focusCount = _.countBy(ctrl.content, 'focus');
        ctrl.focusLabels = Object.keys(ctrl.focusCount);
        ctrl.focusData = Object.values(ctrl.focusCount);

        ctrl.effortCount = _.countBy(ctrl.content, 'effort');
        ctrl.effortLabels = Object.keys(ctrl.effortCount);
        ctrl.effortData = Object.values(ctrl.effortCount);

      });

    };

    ctrl.fetchContent();

});


app.directive('linkblock', function ($compile, $http) {

  var buildLinks = function ( title_string, url_string ) {

    var title_array = title_string.split(',');
    var url_array = url_string.split(',');
    var linkbar = '';

    url_array.forEach(function(item, key){
      if (item !== '') {
        var link = '<div class="link"><a target="_blank" href="';
        link += item + '">';
        link += title_array[key] + '</a></div>';
        linkbar += link;
      } else {
        linkbar += '';
      }
    });

    return linkbar;
  }

  var linker = function (scope, element, attrs) {
    var LinkHTML = buildLinks(scope.content.asset, scope.content.path);
    $(element).append(LinkHTML);
    $compile(element.contents())(scope);
  }

  return {
    restrict: 'EA',
    replace: true,
    template: '',
    link: linker,
    scope: {
      content: '<',
    }
  };
});






