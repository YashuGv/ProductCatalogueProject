using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCatalogue
{
    public class catpro
    {
        
        public string Name { get; set; }
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string Brand { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
    }
}
