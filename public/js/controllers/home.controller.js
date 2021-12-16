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
        vm.sugestaoPage = sugestaoPage;
        vm.solicitacaoPage = solicitacaoPage;
        
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
            //$location.path("/denuncia");
            if (isAdministrador()){
                $location.path("/denuncia");
            }else{
                $location.path("/denuncia/new");
            }
        }
        
        function reclamacaoPage() {
            //$location.path("/reclamacao");
            if (isAdministrador()){
                $location.path("/reclamacao");
            }else{
                $location.path("/reclamacao/new");
            }
        }
        function elogioPage() {
            //$location.path("/elogio");

            if (isAdministrador()){
                $location.path("/elogio");
            }else{
                $location.path("/elogio/new");
            }
        }
        function sugestaoPage() {
            //$location.path("/sugestao");
            if (isAdministrador()){
                $location.path("/sugestao");
            }else{
                $location.path("/sugestao/new");
            }
        }
        function solicitacaoPage() {
            //$location.path("/solicitacao");
            if (isAdministrador()){
                $location.path("/solicitacao");
            }else{
                $location.path("/solicitacao/new");
            }
        }

        //Adicionado para verificar se é administrador ou não
        function isAdministrador() {
            return $window.localStorage.administrador;
        };
        
    }
})();