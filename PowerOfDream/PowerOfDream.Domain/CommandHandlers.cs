using System;

namespace PowerOfDream.Domain
{
    public class InventoryCommandHandlers
    {
        private readonly IRepository<InventoryItem> _repository;

        public InventoryCommandHandlers(IRepository<InventoryItem> repository)
        {
            _repository = repository;
        }

        public void Handle(CreateInventoryItem message)
        {
            var item = new InventoryItem(message.InventoryItemId, message.Name);
            _repository.Save(item, -1);
        }
    }
}
