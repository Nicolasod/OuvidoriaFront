(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ElogioListController", ElogioListController);

        ElogioListController.$inject = ["ElogioService"];

    function ElogioListController(ElogioService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ElogioService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ElogioService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();