/*Esse arquivo irá conter o código do 'funcionarioCtrl' a qual controlará os módulos de
 * 'funcionarios
 * 
*/


funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {
    // carregamento de todos os dados dos funcionários quando a página for recarregada.
    carregarfuncionarios();
    function carregarfuncionarios() {

        var listarfuncionarios = funcionarioServices.getTodosfuncionarios();
        listarfuncionarios.then(function (d) {
            //se tudo der certo
            $scope.Funcionarios = d.data;

        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os funcionários");
            });

    }




});