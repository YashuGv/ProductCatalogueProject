using BusinessLogic;
using ProductCatalogue;
using Microsoft.EntityFrameworkCore;
using ProductCatalogue.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




builder.Services.AddDbContext<ProductCatalogueContext>(Options => Options.UseSqlServer("Server=LAPTOP-LV9NEDHH;Database=Product_Catalogue;Trusted_Connection=True;TrustServerCertificate=True;"));
builder.Services.AddScoped<IRepo, EfRepo>();
builder.Services.AddScoped<ILogic, Logic>();







var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
