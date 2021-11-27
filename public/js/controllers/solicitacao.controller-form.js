(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("SolicitacaoFormController", SolicitacaoFormController);

    SolicitacaoFormController.$inject = [
        "SolicitacaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function SolicitacaoFormController(
        SolicitacaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.solicitacao = {};
        vm.titulo = "Nova Solicitacao";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                SolicitacaoService.findById($routeParams.id).success(function (data) {
                    vm.solicitacao = data;
                    vm.titulo = "Editando Solicitacao";
                });
            }
        }

        function salvar() {
            SolicitacaoService.save(vm.solicitacao).success(function () {
                $location.path("/solicitacao");
                alert("Solicitacão cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();