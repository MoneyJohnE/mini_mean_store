// Inject the ngRoute dependency in the module:
var miniStoreApp = angular.module("miniStoreApp", ["ngRoute"]);
// Use the config method to set up routing:
miniStoreApp.config(function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "partials/customers.html"
    })
    .when("/customers", {
      templateUrl: "partials/customers.html"
    })
    .when("/orders", {
      templateUrl: "partials/orders.html"
    })
    .when("/products", {
      templateUrl: "partials/products.html"
    })
    .otherwise({
      redirectTo: "/"
    })

})