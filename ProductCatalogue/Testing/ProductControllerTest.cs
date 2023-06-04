using AutoFixture;
using BusinessLogic;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Models;
using Moq;
using Server.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Testing
{
    public class ProductControllerTest
    {
        private readonly IFixture fixture;
        private readonly Mock<ILogic> mlogic;
        private readonly productController c1;
        public ProductControllerTest()
        {
            fixture = new Fixture();
            mlogic = fixture.Freeze<Mock<ILogic>>();
            c1 = new productController(mlogic.Object);

        }
        [Fact]
        public void AddproductTest()
        {
            var hr = fixture.Create<Models.product>();
            mlogic.Setup(x => x.Addproduct(hr)).Returns(hr);

            var result = c1.Add(hr);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<OkObjectResult>();
            result.As<OkObjectResult>().Value.Should().NotBeNull().And.BeOfType(hr.GetType());
            mlogic.Verify(x => x.Addproduct(hr), Times.AtLeastOnce());
        }
        [Fact]
        public void Addproductdetails_BadRequest_Test()
        {
            product P = null;
            var req = fixture.Create<product>();
            mlogic.Setup(x => x.Addproduct(req)).Returns(P);
            var res = c1.Add(req);
            res.Should().BeAssignableTo<OkObjectResult>();
            mlogic.Verify(x => x.Addproduct(req), Times.AtLeastOnce());
        }
        [Fact]
        public void AddProduct_Test()
        {
            var request = fixture.Create<product>();
            mlogic.Setup(x => x.Addproduct(request)).Throws(new Exception("Something wrong with the request"));

            var result = c1.Add(request);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mlogic.Verify(x => x.Addproduct(request), Times.AtLeastOnce());
        }
        public void UpdateProduct_Test()
        {
            var hr = fixture.Create<Models.product>();
            var id = fixture.Create<Guid>();
            mlogic.Setup(x => x.UpdateProduct(id, hr)).Returns(hr);

            var result = c1.Update(id, hr);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<OkObjectResult>();
            result.As<OkObjectResult>().Value.Should().NotBeNull().And.BeOfType(hr.GetType());
            mlogic.Verify(x => x.UpdateProduct(id, hr), Times.AtLeastOnce());
        }

        [Fact]
        public void Updateproduct_Exception()
        {
            var request = fixture.Create<product>();
            var id = fixture.Create<Guid>();
            mlogic.Setup(x => x.UpdateProduct(id, request)).Throws(new Exception("Something wrong with the request"));

            var result = c1.Update(id, request);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mlogic.Verify(x => x.UpdateProduct(id, request), Times.AtLeastOnce());
        }
    }
}
