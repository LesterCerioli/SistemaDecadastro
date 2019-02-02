using Sistema_Cadastro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sistema_Cadastro.Controllers
{
    public class FuncionarioController : Controller
    {
        #region Métpdp para listar Funcionários
        public JsonResult GetFuncionario()
        {
            using (var db = new FuncionariosEntities())
            {

                List<funcionario> listarfuncionarios = db.funcionarios.ToList();
                return Json(listarfuncionarios, JsonRequestBehavior.AllowGet);
            }
            #endregion
        }
    }

   
}