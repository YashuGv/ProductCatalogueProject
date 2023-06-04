using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class productController : ControllerBase
    {
        ILogic _logic;
        public productController(ILogic log)
        {
            _logic = log;
        }
        [HttpPost("AddProduct")]
        public IActionResult Add([FromBody] Models.product p)
        {
            try
            {
                if (p != null)
                {
                    p.ProductId = Guid.NewGuid();
                    var add = _logic.Addproduct(p);
                    return Ok(add);
                }
                else
                {
                    return BadRequest(p);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetAllProducts")]
        public ActionResult Get()
        {
            try
            {

                var cat = _logic.GetAllProducts().ToList();
                return Ok(cat);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("GetById/{id}")]
        public ActionResult Getbyid([FromRoute]Guid id)
        {
            try
            {
                if (id != null)
                {
                    var cat = _logic.GetProductsById(id);
                    return Ok(cat);
                }
                return BadRequest("Id not found");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByProductname/{name}")]
        public ActionResult GetbyName([FromRoute] string name)
        {
            try
            {
                if (name != null)
                {
                    var cat = _logic.GetByProName(name);
                    return Ok(cat);
                }
                return BadRequest("name not found");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByBrand/{name}")]
        public ActionResult GetbyBrand([FromRoute] string name)
        {
            try
            {
                if (name != null)
                {
                    var cat = _logic.GetByBrand(name);
                    return Ok(cat);
                }
                return BadRequest("Brand not found");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("ModifyProduct/{id}")]
        public ActionResult Update([FromRoute] Guid id, [FromBody] product r)
        {
            try
            {
                if (id != null)
                {
                    var up = _logic.UpdateProduct(id,r);
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

        [HttpDelete("RemoveProduct/{id}")]
        public IActionResult DeleteProduct([FromRoute] Guid id)
        {
            try
            {
                if (id != null)
                {
                    var r = _logic.DeleteProductById(id);
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
