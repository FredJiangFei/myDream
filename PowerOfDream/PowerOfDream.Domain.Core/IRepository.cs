using System;
using System.Collections.Generic;
using System.Text;

namespace PowerOfDream.Domain.Core
{
  public interface IRepository<T> where T : AggregateRoot, new()
  {
    void Save(AggregateRoot aggregate, int expectedVersion);
    T GetById(Guid id);
  }
}
