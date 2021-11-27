(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.paisesPage = paisesPage;
        vm.reclamacaoPage = reclamacaoPage;
        vm.denunciaPage = denunciaPage;
        vm.elogioPage = elogioPage;
        
        activate();

        function activate() {
        }

        function cidadesPage() {
            $location.path("/cidade");
        }

        function estadosPage() {
            $location.path("/estado");
        }

        function paisesPage() {
            $location.path("/pais");
        }
        function denunciaPage() {
            $location.path("/denuncia");
        }
        
        function reclamacaoPage() {
            $location.path("/reclamacao");
        }
        function elogioPage() {
            $location.path("/elogio");
        }
        
    }
})();