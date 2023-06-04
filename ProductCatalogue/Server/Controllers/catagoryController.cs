using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Models;
using System;
using System.Reflection;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class catagoryController : ControllerBase
    {
        ILogic _logic;
        public catagoryController(ILogic log)
        {
            _logic = log;
        }



        [HttpPost("AddCatagory")]
        public IActionResult Addcatagory([FromBody] Models.catagory c)
        {
            try
            {
                if (c != null)
                {
                    var add = _logic.Addcategory(c);
                    return Ok(add);
                }
                else
                {
                    return BadRequest(c);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpGet("GetCatagories")]
        public ActionResult Get()
        {
            try
            {

                var cat = _logic.GetAllCatagories().ToList();
                return Ok(cat);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            try
            {

                var cat = _logic.GetAllDetails().ToList();
                return Ok(cat);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("ModifyCatagory/{id}")]
        public ActionResult Update([FromRoute] int id, [FromBody] catagory r)
        {
            try
            {
                if (id != null)
                {
                    var up = _logic.UpdateCategory(id,r);
                    return Ok(up);
                }
                else
                {
                    return BadRequest("Id not found");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByCatagoryName/{name}")]
        public ActionResult GetbyName([FromRoute] string name)
        {
            try
            {
                if (name != null)
                {
                    var cat = _logic.GetByCatName(name);
                    return Ok(cat);
                }
                return BadRequest("name not found");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("RemoveCatagory/{name}")]
        public IActionResult DeleteProduct([FromRoute] string name)
        {
            try
            {
                if (name != null)
                {
                    var r = _logic.DeleteCatagory(name);
                    return Ok(r);
                }
                else
                    return BadRequest("something wrong with  input, please try again!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
