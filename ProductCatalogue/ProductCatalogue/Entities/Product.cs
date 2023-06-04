using System;
using System.Collections.Generic;

namespace ProductCatalogue.Entities;

public partial class Product
{
    public Guid ProductId { get; set; }

    public int? CategoryId { get; set; }

    public string? ProductName { get; set; }

    public string? Brand { get; set; }

    public int? Price { get; set; }

    public string? ProductDesc { get; set; }

    public virtual Category? Category { get; set; }
}
