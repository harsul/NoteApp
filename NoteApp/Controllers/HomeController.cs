using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NoteApp.Models;
using NoteApp.Models.Home;

namespace NoteApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Kayit()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Kayit(FormCollection form)
        {
            notDBEntities2 db = new notDBEntities2();
            user model = new user();
            
            model.user_mail = form["mail"];
            model.user_pw = form["sifre"];
            model.user_adsoyad = form["adsoyad"];
            model.user_universite = form["universite"];
            model.user_bolum = form["bolum"];
            db.user.Add(model);
            db.SaveChanges();
            return RedirectToAction("Index", "Home");
        }
        [HttpPost]
        public ActionResult Login(string kullanicimail , string sifre)
        {
            if(new LoginDurum().LoginBasari(kullanicimail,sifre))
                {
                notDBEntities2 db = new notDBEntities2();
                user VeriBul = db.user.Where(x => x.user_mail.Equals(kullanicimail)).FirstOrDefault();
                Session["AdSoyad"] = VeriBul.user_adsoyad.ToString();
                Session["Universite"] = VeriBul.user_universite.ToString();
                Session["Bolum"] = VeriBul.user_bolum.ToString();
                return RedirectToAction("Index", "App");
                }           
            return RedirectToAction("Index","Home");
        }
        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Index", "Home");
        }
    }
}