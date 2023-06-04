using Microsoft.EntityFrameworkCore;
using ProductCatalogue.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductCatalogue
{
    public class EfRepo:IRepo
    {
        private readonly ProductCatalogueContext _Pdcontext;
        public EfRepo(ProductCatalogueContext pdcontext)
        {
            _Pdcontext = pdcontext;
        }
        public Category AddCategory(Category category)
        {
            _Pdcontext.Add(category);
            _Pdcontext.SaveChanges();
            return category;
        }

        public Product AddProduct(Product product)
        {
            _Pdcontext.Add(product);
            _Pdcontext.SaveChanges();
            return product;
        }

        public List<Category> getAllCatagories()
        {
            return _Pdcontext.Categories.ToList();
        }
        public List<Product> getAllProducts()
        {
            return _Pdcontext.Products.ToList();
        }

        public List<catpro> GetAllDetails()
        {
            var cdetails = _Pdcontext.Categories;
            var pdetails = _Pdcontext.Products;

            var alldetails = (from c in cdetails
                              join p in pdetails on c.Id equals p.CategoryId
                              select new catpro()
                              {
                                  Name = c.CategoryName,
                                  CategoryId = c.Id,
                                  ProductId = p.ProductId,
                                  ProductName = p.ProductName,
                                  Price = (int)p.Price,
                                  Brand = p.Brand,
                                  ProductDescription = p.ProductDesc,
                              });
            return alldetails.ToList();
        }

        public Category UpdateCatagory(Category category)
        {
            _Pdcontext.Update(category);
            _Pdcontext.SaveChanges();
            return category;
        }

        public Product UpdateProduct(Product p)
        {
            _Pdcontext.Update(p);
            _Pdcontext.SaveChanges();
            return p;
        }
        public Product DeleteProByID(Guid id)
        {
            var p = _Pdcontext.Products.Where(d=>d.ProductId== id).FirstOrDefault();
            _Pdcontext.Products.Remove(p);
            _Pdcontext.SaveChanges();
            return p;
        }

        public Category DeleteCatagory(string name)
        {
            var p = _Pdcontext.Categories.Where(d=>d.CategoryName==name).FirstOrDefault();
            var c = _Pdcontext.Products.Where(x => x.CategoryId == p.Id).FirstOrDefault();
            _Pdcontext.Products.Remove(c);
            _Pdcontext.Categories.Remove(p);
            _Pdcontext.SaveChanges();
            return p;
        }
    }
}
