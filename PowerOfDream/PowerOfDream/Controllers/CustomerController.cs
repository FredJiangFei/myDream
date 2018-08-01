using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PowerOfDream;
using PowerOfDream.Domain;
using System;

namespace Equinox.UI.Site.Controllers
{
  [Authorize]
  public class CustomerController : Controller
  {
    private FakeBus _bus;
    private ReadModelFacade _readmodel;

    public CustomerController()
    {
      _bus = ServiceLocator.Bus;
      _readmodel = new ReadModelFacade();
    }

    [HttpGet]
    [Route("customer-management/list-all")]
    public IActionResult Index()
    {
      return View(_readmodel.GetInventoryItems());
    }

    [HttpGet]
    [Route("customer-management/register-new")]
    public IActionResult Create()
    {
      return View();
    }

    [HttpPost]
    [Route("customer-management/register-new")]
    public IActionResult Create(string name)
    {
      _bus.Send(new CreateInventoryItem(Guid.NewGuid(), name));

      return RedirectToAction("Index");
    }
  }
}
