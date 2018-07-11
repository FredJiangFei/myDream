using AutoMapper;
using PowerOfDream.Application.ViewModels;
using PowerOfDream.Domain.Models;

namespace PowerOfDream.Application.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Customer, CustomerViewModel>();
        }
    }
}
