(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("DenunciaFormController", DenunciaFormController);

    DenunciaFormController.$inject = [
        "DenunciaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function DenunciaFormController(
        DenunciaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.denuncia = {};
        vm.titulo = "Nova Denuncia";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                DenunciaService.findById($routeParams.id).success(function (data) {
                    vm.denuncia = data;
                    vm.titulo = "Editando Denuncia";
                });
            }
        }

        function salvar() {
            DenunciaService.save(vm.denuncia).success(function () {
                $location.path("/denuncia");
                alert("Denuncia cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();