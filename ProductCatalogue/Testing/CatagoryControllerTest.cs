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
    public class CatagoryControllerTest
    {
        private readonly IFixture fixture;
        private readonly Mock<ILogic> mlogic;
        private readonly catagoryController c1;
        public CatagoryControllerTest()
        {
            fixture = new Fixture();
            mlogic = fixture.Freeze<Mock<ILogic>>();
            c1 = new catagoryController(mlogic.Object);

        }
        [Fact]
        public void AddcatagoryTest()
        {
            var hr = fixture.Create<Models.catagory>();
            mlogic.Setup(x => x.Addcategory(hr)).Returns(hr);

            var result = c1.Addcatagory(hr);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<OkObjectResult>();
            result.As<OkObjectResult>().Value.Should().NotBeNull().And.BeOfType(hr.GetType());
            mlogic.Verify(x => x.Addcategory(hr), Times.AtLeastOnce());
        }
        [Fact]
        public void Addcatagorydetails_BadRequest_Test()
        {
            catagory P = null;
            var req = fixture.Create<catagory>();
            mlogic.Setup(x => x.Addcategory(req)).Returns(P);
            var res = c1.Addcatagory(req);
            res.Should().BeAssignableTo<OkObjectResult>();
            mlogic.Verify(x => x.Addcategory(req), Times.AtLeastOnce());
        }
        [Fact]
        public void Addcatagory_Exception_Test()
        {
            var request = fixture.Create<catagory>();
            mlogic.Setup(x => x.Addcategory(request)).Throws(new Exception("Something wrong with the request"));

            var result = c1.Addcatagory(request);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mlogic.Verify(x => x.Addcategory(request), Times.AtLeastOnce());
        }


        [Fact]
        public void UpdateCatagory_Test()
        {
            var hr = fixture.Create<Models.catagory>();
            var id = fixture.Create<int>();
            mlogic.Setup(x => x.UpdateCategory(id, hr)).Returns(hr);

            var result = c1.Update(id, hr);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<OkObjectResult>();
            result.As<OkObjectResult>().Value.Should().NotBeNull().And.BeOfType(hr.GetType());
            mlogic.Verify(x => x.UpdateCategory(id, hr), Times.AtLeastOnce());
        }

        [Fact]
        public void Updatecatagory_Exception()
        {
            var request = fixture.Create<catagory>();
            var id = fixture.Create<int>();
            mlogic.Setup(x => x.UpdateCategory(id, request)).Throws(new Exception("Something wrong with the request"));

            var result = c1.Update(id, request);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mlogic.Verify(x => x.UpdateCategory(id, request), Times.AtLeastOnce());
        }
    }

}

