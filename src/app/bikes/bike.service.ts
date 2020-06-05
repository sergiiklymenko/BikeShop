import {Bike} from './bike.model';
import {Item} from '../shared/item.model';
import {Injectable} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class BikeService {

  private bikes: Bike[] = [
    new Bike(
      'Mountain Rider',
      'Giant Stance 2',
      'https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/vrdxcy2elmqh06aavo9i/MY20Stance2_ColorB.jpg',
      [
        new Item('Frame', 1),
        new Item('Wheels', 2),
        new Item('Shock', 2)
      ]),
    new Bike(
      'Beach Bummer',
      'Juuust chilling on the beach',
      // tslint:disable-next-line:max-line-length
      'https://img.grouponcdn.com/deal/jtVDRd7pHmxPTbyPYLJb/ZU-700x420/v1/c700x420.jpg',
      [
        new Item('Frame', 1),
        new Item('Wheels', 2),
        new Item('Basket', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getBikes() {
    return this.bikes.slice();
  }

  getBike(index: number) {
    return this.bikes[index];
  }

  addItemsToShoppingList(items: Item[]) {
    this.slService.addItems(items);

  }
}
