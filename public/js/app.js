angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/login.html",
                controller:"LoginCtrl"
            })
            .when("/login", {
                templateUrl: "partials/login.html",
                controller:"LoginCtrl"
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/pais", {
                templateUrl: "partials/pais.html",
            })
            .when("/pais/:id", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/pais/new", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/denuncia", {
                templateUrl: "partials/denuncia.html",
            })
            .when("/denuncia/:id", {
                templateUrl: "partials/denuncia-form.html",
            })
            .when("/denuncia/new", {
                templateUrl: "partials/denuncia-form.html",
            })
            .when("/reclamacao", {
                templateUrl: "partials/reclamacao.html",
            })
            .when("/reclamacao/:id", {
                templateUrl: "partials/reclamacao-form.html",
            })
            .when("reclamacao/new", {
                templateUrl: "partials/reclamacao-form.html",
            })
            .when("/elogio", {
                templateUrl: "partials/elogio.html",
            })
            .when("/elogio/:id", {
                templateUrl: "partials/elogio-form.html",
            })
            .when("/elogio/new", {
                templateUrl: "partials/elogio-form.html",
            })
            .when("/sugestao", {
                templateUrl: "partials/sugestao.html",
            })
            .when("/sugestao/:id", {
                templateUrl: "partials/sugestao-form.html",
            })
            .when("/sugestao/new", {
                templateUrl: "partials/sugestao-form.html",
            })
            .when("/solicitacao", {
                templateUrl: "partials/solicitacao.html",
            })
            .when("/solicitacao/:id", {
                templateUrl: "partials/solicitacao-form.html",
            })
            .when("/solicitacao/new", {
                templateUrl: "partials/solicitacao-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);