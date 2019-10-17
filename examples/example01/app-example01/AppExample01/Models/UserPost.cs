using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppExample01.Models
{
    public class UserPost
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}