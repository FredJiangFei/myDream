using AutoMapper;
using PowerOfDream.Application.ViewModels;
using PowerOfDream.Domain.Commands;

namespace PowerOfDream.Application.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<CustomerViewModel, RegisterNewCustomerCommand>()
                .ConstructUsing(c => new RegisterNewCustomerCommand(c.Name, c.Email, c.BirthDate));
        }
    }
}
