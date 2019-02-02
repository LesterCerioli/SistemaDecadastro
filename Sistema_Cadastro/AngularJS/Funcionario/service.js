/*arquivo responsável por carregar os dados via $http.get - do MVC Controller
 *(onde transformará os dados em Json)
 * 
*/

fucionarioApp.service('funcionarioService', function ($http) {

    this.getTodosfuncionarios = function () {
        return $http.get("/Funcionario/GetFuncionario");
    }
});