(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ElogioFormController", ElogioFormController);

    ElogioFormController.$inject = [
        "ElogioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ElogioFormController(
        ElogioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.elogio = {};
        vm.titulo = "Novo Elogio";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                ElogioService.findById($routeParams.id).success(function (data) {
                    vm.elogio = data;
                    vm.titulo = "Editando Elogio";
                });
            }
        }

        function salvar() {
            ElogioService.save(vm.elogio).success(function () {
                $location.path("/elogio");
                alert("Elogio cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();