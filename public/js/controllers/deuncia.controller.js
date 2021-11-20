(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("DenunciaListController", DenunciaListController);

        DenunciaListController.$inject = ["DenunciaService"];

    function DenunciaListController(DenunciaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            DenunciaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            DenunciaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();