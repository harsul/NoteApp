using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NoteApp.Models.Home
{
    public class LoginKontrol:ActionFilterAttribute,IActionFilter
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            try
            {
                if (!string.IsNullOrEmpty(HttpContext.Current.Session["UID"].ToString()))
                {
                    base.OnActionExecuting(filterContext);
                }
                else
                {
                    HttpContext.Current.Response.Redirect("Home/");
                }
            }
            catch (Exception)
            {

                HttpContext.Current.Response.Redirect("/Home/Index#giris");
            }
        }
    }
}