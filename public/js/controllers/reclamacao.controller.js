(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ReclamacaoListController", ReclamacaoListController);

        ReclamacaoListController.$inject = ["ReclamacaoService"];

    function ReclamacaoListController(ReclamacaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ReclamacaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ReclamacaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();