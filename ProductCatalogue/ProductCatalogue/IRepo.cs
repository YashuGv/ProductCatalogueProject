using ProductCatalogue.Entities;

namespace ProductCatalogue
{
    public interface IRepo
    {
        Product AddProduct(Product product);
        Category AddCategory(Category category);

        Category UpdateCatagory(Category category);
        Product UpdateProduct(Product p);

        List<Category> getAllCatagories();
        List<Product> getAllProducts();

        List<catpro> GetAllDetails();

        Product DeleteProByID(Guid id);

        Category DeleteCatagory(string name);
    }
}