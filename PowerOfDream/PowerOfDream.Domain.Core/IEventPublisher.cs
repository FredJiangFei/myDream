using System;
using System.Collections.Generic;
using System.Text;

namespace PowerOfDream.Domain.Core
{
  public interface IEventPublisher
  {
    void Publish<T>(T @event) where T : Event;
  }
}
