(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("SugestaoFormController", SugestaoFormController);

    DenunciaFormController.$inject = [
        "SugestaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function SugestaoFormController(
        SugestaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.sugestao = {};
        vm.titulo = "Nova Sugestão";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                SugestaoService.findById($routeParams.id).success(function (data) {
                    vm.sugestao = data;
                    vm.titulo = "Editando Sugestão";
                });
            }
        }

        function salvar() {
            SugestaoService.save(vm.sugestao).success(function () {
                $location.path("/sugestao");
                alert("Sugestão cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();