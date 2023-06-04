namespace Models
{
    public class product
    {
        public product()
        {

        }

        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string Brand { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
    }
}