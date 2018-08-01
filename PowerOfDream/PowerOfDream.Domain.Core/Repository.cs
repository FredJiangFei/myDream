using System;
using System.Collections.Generic;
using System.Text;

namespace PowerOfDream.Domain.Core
{
  public class Repository<T> : IRepository<T> where T : AggregateRoot, new() //shortcut you can do as you see fit with new()
  {
    private readonly IEventStore _storage;

    public Repository(IEventStore storage)
    {
      _storage = storage;
    }

    public void Save(AggregateRoot aggregate, int expectedVersion)
    {
      _storage.SaveEvents(aggregate.Id, aggregate.GetUncommittedChanges(), expectedVersion);
    }

    public T GetById(Guid id)
    {
      var obj = new T();
      var e = _storage.GetEventsForAggregate(id);
      obj.LoadsFromHistory(e);
      return obj;
    }
  }
}
