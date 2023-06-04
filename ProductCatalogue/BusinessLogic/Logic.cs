using Models;
using ProductCatalogue;
using ProductCatalogue.Entities;
using System.Xml.Linq;

namespace BusinessLogic
{
    public class Logic:ILogic
    {
        IRepo _repo;
        public Logic(IRepo repo)
        {
            _repo = repo;
        }
        public catagory Addcategory(catagory catagory)
        {
            return Mapper.CMap(_repo.AddCategory(Mapper.CMap(catagory)));
        }

        public product Addproduct(product pro)
        {
            return Mapper.PMap(_repo.AddProduct(Mapper.PMap(pro)));
        }

        public IEnumerable<catagory> GetAllCatagories()
        {
            return Mapper.CMap(_repo.getAllCatagories());
        }

        public IEnumerable<catpro> GetAllDetails()
        {
            return _repo.GetAllDetails();
        }

        public IEnumerable<product> GetAllProducts()
        {
            return Mapper.PMap(_repo.getAllProducts());
        }

        public catpro GetProductsById(Guid id)
        {
            var pro = _repo.GetAllDetails().Where(r=>r.ProductId== id).FirstOrDefault();
            return pro;
        }
        public IEnumerable<catpro> GetByProName(string name)
        {
            var pro=_repo.GetAllDetails().Where(r=>r.ProductName== name).ToList();
            return pro;
        }

        public IEnumerable<catpro> GetByCatName(string name)
        {
            var pro = _repo.GetAllDetails().Where(r=>r.Name== name).ToList();
            return pro;
        }
        public IEnumerable<catpro> GetByBrand(string name)
        {
            var pro = _repo.GetAllDetails().Where(r => r.Brand == name).ToList();
            return pro;
        }

        public catagory UpdateCategory(int id, catagory c)
        {
            var dummy = (from data in _repo.getAllCatagories()
                         where data.Id == id
                         select data).FirstOrDefault();
            if (dummy != null)
            {
                
                dummy.CategoryName = c.Name;

                dummy = _repo.UpdateCatagory(dummy);
            }

            return Mapper.CMap(dummy);
        }
        public product UpdateProduct(Guid id,product p)
        {
            var pro = (from data in _repo.getAllProducts()
                       where data.ProductId == id
                       select data).FirstOrDefault();
            if(pro != null) 
            {
                pro.ProductName = p.ProductName;
                pro.ProductDesc= p.ProductDescription;
                pro.Brand = p.Brand;
                pro.Price = p.Price;
                pro.CategoryId = p.CategoryId;

                pro = _repo.UpdateProduct(pro);
            }
            return Mapper.PMap(pro);
        }

        public product DeleteProductById(Guid id)
        {
            var pro = _repo.DeleteProByID(id);
            return Mapper.PMap(pro);
        }

        public catagory DeleteCatagory(string name)
        {
            var cat = _repo.DeleteCatagory(name);
            return Mapper.CMap(cat);
        }

    }
}