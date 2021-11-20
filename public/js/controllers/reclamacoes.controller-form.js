(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ReclamacaoFormController", ReclamacaoFormController);

    ReclamacaoFormController.$inject = [
        "ReclamacaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ReclamacaoFormController(
        ReclamacaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.reclamacao = {};
        vm.titulo = "Nova Reclamação";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                ReclamacaoService.findById($routeParams.id).success(function (data) {
                    vm.reclamacao = data;
                    vm.titulo = "Editando Reclamação";
                });
            }
        }

        function salvar() {
            ReclamacaoService.save(vm.reclamacao).success(function () {
                $location.path("/reclamacao");
                alert("Reclamação cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();