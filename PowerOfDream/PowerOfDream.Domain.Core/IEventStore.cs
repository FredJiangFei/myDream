using System;
using System.Collections.Generic;
using System.Text;

namespace PowerOfDream.Domain.Core
{
  public interface IEventStore
  {
    void SaveEvents(Guid aggregateId, IEnumerable<Event> events, int expectedVersion);
    List<Event> GetEventsForAggregate(Guid aggregateId);
  }
}
