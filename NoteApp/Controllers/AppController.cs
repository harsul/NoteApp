using NoteApp.Models;
using NoteApp.Models.Home;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace NoteApp.Controllers
{
    public class AppController : Controller
    {
        [LoginKontrol]
        public ActionResult Index()
        {
            MultiModel mm = new MultiModel();
            notDBEntities2 db = new notDBEntities2();
            mm.NotAlbum = db.notAlbum.Take(8).OrderByDescending(d => d.yuklemeTarih).ToList();
            mm.NotResim = db.notResim.ToList();

            return View(mm);
        }
        [LoginKontrol]
        public ActionResult NotEkle()
        {
            return View();
        }
        [HttpPost]
        public ActionResult notEkle(IEnumerable<HttpPostedFileBase> dosyalar,FormCollection formData)
        {
            string userFolder = Session["UID"].ToString();
            //albüm oluşturma
            notDBEntities2 db = new notDBEntities2();
            notAlbum album = new notAlbum
            {
                yukleyenID = Convert.ToInt32(Session["UID"]),
                albumDersAdi = formData["dersAd"],
                albumHoca = formData["dersHoca"]
            };
            db.notAlbum.Add(album);
            db.SaveChanges();
            //albüm oluşturma - bitiş
            //albüm ID al
            notAlbum VeriBul = db.notAlbum.Where(
                x => x.albumHoca.Equals(album.albumHoca.ToString()) &&
                x.albumDersAdi.Equals(album.albumDersAdi.ToString()) &&
                 x.yukleyenID.Equals(album.yukleyenID)).FirstOrDefault();
            string albumID = VeriBul.albumID.ToString();
            //albumID al - bitis
            //klasör kontrolleri
            bool kontrol = Directory.Exists(Server.MapPath("~/yuklemeler/"+userFolder+ "/" + albumID));
            if (!kontrol)
            {
                Directory.CreateDirectory(Server.MapPath("~/yuklemeler/" + userFolder+ "/" + albumID));
            }
            //klasör kontrolleri - bitiş
            //fotoğraf upload
                foreach (var dosya in dosyalar)
                {
                string guid = Guid.NewGuid().ToString();
                dosya.SaveAs(Path.Combine(Server.MapPath("~/yuklemeler/" + userFolder+ "/" + albumID), guid+ "-" + Path.GetFileName(dosya.FileName)));
                }
            //fotoğraf upload bitiş
            return View();
        }

        [LoginKontrol]
        public ActionResult Notlarim()
        {
            notDBEntities2 db = new notDBEntities2();
            MultiModel mm = new MultiModel();
            int UID = Convert.ToInt32(Session["UID"]);
            mm.NotAlbum = db.notAlbum.Where(d => d.yukleyenID == UID).OrderByDescending(d => d.yuklemeTarih).ToList();
            mm.NotResim = db.notResim.ToList();
            return View(mm);
        }
        [LoginKontrol]
        public ActionResult BaskaNotlar()
        {
            MultiModel mm = new MultiModel();
            notDBEntities2 db = new notDBEntities2();
            mm.Bolumler = db.bolumler;
            mm.Universite = db.universite;
            mm.NotAlbum = db.notAlbum.Take(3).OrderBy(x => x.yuklemeTarih);
            mm.NotResim = db.notResim;
            return View(mm);
        }
        [HttpPost]
        public ActionResult BaskaNotlar(FormCollection formData)
        {
            MultiModel mm = new MultiModel();
            notDBEntities2 db = new notDBEntities2();
            string aUniversite = formData["universite"];
            string aBolum = formData["bolum"];
            string aHoca = formData["dersHoca"];
            string aDers = formData["dersAd"];
            mm.NotAlbum = db.notAlbum.Where(d => (d.yukleyenBolum.Contains(aBolum) && d.yukleyenUni.Contains(aUniversite)) ||
               (d.albumDersAdi.Contains(aDers) || d.albumHoca.Contains(aHoca))).ToList();
            mm.NotResim = db.notResim;
            mm.Universite = db.universite;
            mm.Bolumler = db.bolumler;
            return View(mm);
        }
        [LoginKontrol]
        public ActionResult NotGoster()
        {
            string id = Request.QueryString["ID"];
            int urlID = Convert.ToInt32(id);//albumID
            int sID = Convert.ToInt32(Session["UID"]);//kullanıcı ID
            notDBEntities2 db = new notDBEntities2();
            MultiModel mm = new MultiModel();
            //goruntulenme artış
            var kontrol = db.notAlbum.Where(d => d.albumID == urlID).Select(x => new
            {
                yukleyenU = x.yukleyenID
            }).FirstOrDefault();
            if (kontrol.yukleyenU.ToString() != sID.ToString())
            {
                var viewArtis = db.notAlbum.Where(d => d.albumID == urlID).FirstOrDefault();
                viewArtis.goruntulenme++;
                db.Entry(viewArtis).State = EntityState.Modified;
                db.SaveChanges();
            }
            //görüntülenme artış - bitiş
            mm.NotAlbum = db.notAlbum.Where(d => d.albumID == urlID).ToList();
            mm.NotResim = db.notResim.Where(d => d.albumID == urlID).ToList();
            return View(mm);
        }
        [LoginKontrol]
        public ActionResult LayoutBilgi()
        {
            MultiModel mm = new MultiModel();
            notDBEntities2 db = new notDBEntities2();
            //görüntülenme ve indirme sayıları
            int id = Convert.ToInt32(Session["UID"]);
            var viewCo = 0;
            viewCo = Convert.ToInt32(db.notAlbum.Where(d => d.yukleyenID == id).Sum(d => d.goruntulenme));
            var eklenenNotlar = db.user.Where(d => d.Id == id).Select(x => new
            {
                notS = x.eklenenNotSayisi
            }).FirstOrDefault();
            mm.addedNote = eklenenNotlar.notS.ToString();
            mm.ViewCount = viewCo.ToString();
            //görüntülenme indirme sayıları - bitiş
            return PartialView(mm);
        }
        [LoginKontrol]
        public ActionResult HizliAra()
        {
            notDBEntities2 db = new notDBEntities2();
            string kelime = Request.QueryString["kelime"];
            MultiModel mm = new MultiModel();
            mm.NotAlbum = db.notAlbum.Where(d => d.albumDersAdi.Contains(kelime) || d.albumHoca.Contains(kelime)).ToList();
            mm.NotResim = db.notResim;
            return View(mm);
        }
        [LoginKontrol]
        public ActionResult ProfilDuzenle()
        {
            string id = Request.QueryString["ID"];
            int urlID = Convert.ToInt32(id);//albumID
            int sID = Convert.ToInt32(Session["UID"]);//kullanıcı ID
            notDBEntities2 db = new notDBEntities2();
            MultiModel mm = new MultiModel();
            var userInfo = db.user.Where(d => d.Id == sID).FirstOrDefault();
            if (sID == urlID)
            {
                mm.User = userInfo;
                mm.Universite = db.universite;
                mm.Bolumler = db.bolumler;
                return View(mm);
            }
            else
            {
                RedirectToAction("Index", "App");
            }
            ViewBag.Message = "";
            return View();
        }
        [HttpPost]
        public ActionResult ProfilDuzenle(FormCollection form)
        {
            notDBEntities2 db = new notDBEntities2();
            MultiModel mm = new MultiModel();
            int sID = Convert.ToInt32(Session["UID"]);//kullanıcı ID
            var userInfo = db.user.Where(d => d.Id == sID).FirstOrDefault();
            if (userInfo.user_pw == form["sifreNow"])
            {
                userInfo.user_pw = form["sifre"];
                userInfo.user_universite = form["universite"];
                userInfo.user_bolum = form["bolum"];
                userInfo.user_adsoyad = form["adsoyad"];
                db.Entry(userInfo).State = EntityState.Modified;
                db.SaveChanges();
                ViewBag.Message = "Bilgileriniz Güncellendi";
            }
            else
            {
                ViewBag.Message = "Doldurduğunuz alanları kontrol ediniz.";
            }
            mm.User = db.user.Where(x => x.Id == sID).FirstOrDefault();
            mm.Universite = db.universite;
            mm.Bolumler = db.bolumler;
            return View(mm);
        }
        
    }
}