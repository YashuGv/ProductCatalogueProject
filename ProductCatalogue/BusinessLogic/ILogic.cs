using Models;
using ProductCatalogue;
using ProductCatalogue.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public interface ILogic
    {
        /// <summary>
        /// Add catagory details
        /// </summary>
        /// <param name="catagory"></param>
        /// <returns></returns>
        catagory Addcategory(catagory catagory);
        /// <summary>
        /// Add product Details
        /// </summary>
        /// <param name="pro"></param>
        /// <returns></returns>
        product Addproduct(product pro);
        /// <summary>
        /// This method is used to update the category details
        /// </summary>
        /// <param name="id"></param>
        /// <param name="c"></param>
        /// <returns></returns>
        Models.catagory UpdateCategory(int id, Models.catagory c);
        /// <summary>
        /// This methos is to update the product details
        /// </summary>
        /// <param name="id"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        product UpdateProduct(Guid id, product p);
        /// <summary>
        /// To Get all the categories
        /// </summary>
        /// <returns></returns>
        IEnumerable<catagory> GetAllCatagories();
        /// <summary>
        /// To get all Products
        /// </summary>
        /// <returns></returns>
        IEnumerable<product> GetAllProducts();
        /// <summary>
        /// To get product by product id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        catpro GetProductsById(Guid id);
        /// <summary>
        /// Get Details by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        IEnumerable<catpro> GetByProName(string name);
        /// <summary>
        /// To display combined details
        /// </summary>
        /// <returns></returns>
        IEnumerable<catpro> GetAllDetails();
        /// <summary>
        /// Get details by catagory name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        IEnumerable<catpro> GetByCatName(string name);
        /// <summary>
        /// Get details by brand
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        IEnumerable<catpro> GetByBrand(string name);
        product DeleteProductById(Guid id);

        catagory DeleteCatagory(string name);
    }
}
