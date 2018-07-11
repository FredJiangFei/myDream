using PowerOfDream.Domain.Core;
using System;

namespace PowerOfDream.Domain.Events
{
  public class CustomerCreated : Event
  {
    public readonly Guid Id;
    public readonly string Name;

    public CustomerCreated(Guid id, string name)
    {
      Id = id;
      Name = name;
    }
  }
}
