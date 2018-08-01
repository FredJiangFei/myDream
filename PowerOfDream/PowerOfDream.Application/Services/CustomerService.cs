using System;
using System.Collections.Generic;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using PowerOfDream.Application.Interfaces;
using PowerOfDream.Application.ViewModels;

namespace PowerOfDream.Application.Services
{
    public class CustomerService : ICustomerService
  {
        private readonly IMapper _mapper;
        //private readonly IEventStoreRepository _eventStoreRepository;

        public CustomerService(IMapper mapper) {
        
           
        }

        //public IEnumerable<CustomerViewModel> GetAll()
        //{
        //    return _customerRepository.GetAll().ProjectTo<CustomerViewModel>();
        //}

        //public CustomerViewModel GetById(Guid id)
        //{
        //    return _mapper.Map<CustomerViewModel>(_customerRepository.GetById(id));
        //}

        //public void Register(CustomerViewModel customerViewModel)
        //{
        //    var registerCommand = _mapper.Map<RegisterNewCustomerCommand>(customerViewModel);
        //    Bus.SendCommand(registerCommand);
        //}

        //public void Remove(Guid id)
        //{
        //    var removeCommand = new RemoveCustomerCommand(id);
        //    Bus.SendCommand(removeCommand);
        //}

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
