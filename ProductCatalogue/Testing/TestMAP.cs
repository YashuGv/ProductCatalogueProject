using BusinessLogic;
using System.Reflection;

namespace Testing
{
    public class TestMAP
    {
        [Fact]
        public void ProductmapTest()
        {
            Models.product p = new Models.product();
            var edu = Mapper.PMap(p);
            Assert.Equal(edu.GetType(), typeof(ProductCatalogue.Entities.Product));
        }
        [Fact]
        public void CategoryTestMap()
        {
            Models.catagory c = new Models.catagory();
            var cat = Mapper.CMap(c);
            Assert.Equal(cat.GetType(), typeof(ProductCatalogue.Entities.Category));
        }
    }
}