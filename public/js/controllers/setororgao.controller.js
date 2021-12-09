(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("SetorOrgaoListController", SetorOrgaoListController);

        SetorOrgaoListController.$inject = ["SetorOrgaoService"];

    function SetorOrgaoListController(SetorOrgaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            SetorOrgaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            SetorOrgaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();