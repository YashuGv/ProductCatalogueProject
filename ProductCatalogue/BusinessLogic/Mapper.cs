using ProductCatalogue.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class Mapper
    {
        public static Models.catagory CMap(Category c)
        {
            return new Models.catagory
            {
                Id = c.Id,
                Name = c.CategoryName
            };
        }

        public static Category CMap(Models.catagory c)
        {
            return new Category()
            {
                Id = c.Id,
                CategoryName = c.Name
            };
        }

        public static Models.product PMap(Product p)
        {
            return new Models.product
            {
                ProductId = p.ProductId,
                CategoryId = (int)p.CategoryId,
                ProductName = p.ProductName,
                ProductDescription = p.ProductDesc,
                Brand = p.Brand,
                Price = (int)p.Price
            };
        }

        public static Product PMap(Models.product p)
        {
            return new Product()
            {
                ProductId = p.ProductId,
                CategoryId = p.CategoryId,
                ProductName = p.ProductName,
                Brand = p.Brand,
                Price = p.Price,
                ProductDesc = p.ProductDescription
            };
        }

        public static IEnumerable<Models.catagory> CMap(IEnumerable<Category> records)
        {
            return records.Select(CMap);
        }

        public static IEnumerable<Models.product> PMap(IEnumerable<Product> records)
        {
            return records.Select(PMap);
        }
    }
}
