using System;
namespace PowerOfDream.Domain
{
  public class CreateCustomerCommand : Command {
        public readonly Guid CustomerId;
        public readonly string Name;

        public CreateCustomerCommand(Guid customerId, string name)
        {
            CustomerId = customerId;
            Name = name;
        }
    }
}
