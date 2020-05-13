import {Item} from '../shared/item.model';
import {EventEmitter} from '@angular/core';


export class ShoppingListService {
  itemsChanged = new EventEmitter<Item[]>();
  private items: Item[] = [
    new Item('Pedals', 2),
    new Item('Dropper', 1),
  ];

  getItems() {
    return this.items.slice();
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.emit(this.items.slice());
  }

  addItems(items: Item[]) {
    this.items.push(...items);
    this.itemsChanged.emit(this.items.slice());
  }
}
