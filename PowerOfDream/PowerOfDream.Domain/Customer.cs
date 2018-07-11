using PowerOfDream.Domain.Core;
using PowerOfDream.Domain.Events;
using System;

namespace PowerOfDream.Domain
{
  public class Customer : AggregateRoot
  {
    private bool _activated;
    private Guid _id;

    public override Guid Id
    {
      get { return _id; }
    }

    public Customer()
    {

    }

    public Customer(Guid id, string name)
    {
      ApplyChange(new CustomerCreated(id, name));
    }
  }
}
