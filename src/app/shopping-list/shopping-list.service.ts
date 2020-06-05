import {Item} from '../shared/item.model';
import {Subject} from 'rxjs';


export class ShoppingListService {
  itemsChanged = new Subject<Item[]>();
  private items: Item[] = [
    new Item('Pedals', 2),
    new Item('Dropper', 1),
  ];

  getItems() {
    return this.items.slice();
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  addItems(items: Item[]) {
    this.items.push(...items);
    this.itemsChanged.next(this.items.slice());
  }
}
