using System;
using System.Collections.Generic;
using PowerOfDream.Application.ViewModels;

namespace PowerOfDream.Application.Interfaces
{
    public interface ICustomerService : IDisposable
    {
        void Register(CustomerViewModel customerViewModel);
        IEnumerable<CustomerViewModel> GetAll();
        CustomerViewModel GetById(Guid id);
        void Remove(Guid id);
    }
}
