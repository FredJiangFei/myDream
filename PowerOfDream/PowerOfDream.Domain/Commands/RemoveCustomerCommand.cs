using System;
namespace PowerOfDream.Domain
{
  public class RemoveCustomerCommand : Command
  {
    public Guid CustomerId;

    public RemoveCustomerCommand(Guid customerId)
    {
      CustomerId = customerId;
    }
  }
}
