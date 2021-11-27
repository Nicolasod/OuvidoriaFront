(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("SugestaoListController", SugestaoListController);

        SugestaoListController.$inject = ["SugestaoService"];

    function SugestaoListController(SugestaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            SugestaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            SugestaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();