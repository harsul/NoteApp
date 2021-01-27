using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NoteApp.Models.Home
{
    public class LoginDurum
    {
        notDBEntities2 db = new notDBEntities2();
        public LoginDurum()
        {

        }
        public bool LoginBasari(string mail,string sifre)
        {
            user sonucUser = db.user.Where(x => x.user_mail.Equals(mail) && x.user_pw.Equals(sifre)).FirstOrDefault();
            if(sonucUser != null)
            {
                HttpContext.Current.Session.Add("UID", sonucUser.Id.ToString());
                return true;
            }
            return false;   
        }

    }
}