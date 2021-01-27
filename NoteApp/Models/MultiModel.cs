using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NoteApp.Models
{
    public class MultiModel
    {
        public string ViewCount;
        public string addedNote;
        public IEnumerable<notAlbum> NotAlbum { get; set; }
        public IEnumerable<notResim> NotResim { get; set; }
        public IEnumerable<bolumler> Bolumler { get; set; }
        public IEnumerable<universite> Universite { get; set; }
        public user User { get; set; }

        public int Id { get; set; }
        [Required]
        [EmailAddress]
        public string user_mail { get; set; }
        public string user_pw { get; set; }
        public string user_adsoyad { get; set; }
        public string user_universite { get; set; }
        public string user_bolum { get; set; }
        public Nullable<int> eklenenNotSayisi { get; set; }
    }
}