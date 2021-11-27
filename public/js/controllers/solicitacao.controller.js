(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("SolicitacaoListController", SolicitacaoListController);

        SolicitacaoListController.$inject = ["SolicitacaoService"];

    function SolicitacaoListController(SolicitacaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            SolicitacaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            SolicitacaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();