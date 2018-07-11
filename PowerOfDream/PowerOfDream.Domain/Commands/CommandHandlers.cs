using PowerOfDream.Domain;
using PowerOfDream.Domain.Core;

namespace PowerOfDream.Domain
{
    public class CustomerCommandHandlers
    {
        private readonly IRepository<Customer> _repository;

        public CustomerCommandHandlers(IRepository<Customer> repository)
        {
            _repository = repository;
        }

        public void Handle(CreateCustomerCommand command)
        {
            var item = new Customer(command.CustomerId, command.Name);
            _repository.Save(item, -1);
        }
    }
}
