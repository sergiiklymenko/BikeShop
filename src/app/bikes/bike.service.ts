import {Bike} from './bike.model';
import {Items} from '../shared/item.model';
import {EventEmitter} from '@angular/core';


export class BikeService {
  bikeSelected = new EventEmitter<Bike>()

  private bikes: Bike[] = [
    new Bike(
      'Mountain Rider',
      'Giant Stance 2',
      'https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/vrdxcy2elmqh06aavo9i/MY20Stance2_ColorB.jpg',
      [
        new Items('Frame', 1),
        new Items('Wheels', 2),
        new Items('Shock', 2)
      ]),
    new Bike(
      'Beach Bummer',
      'Juuust chilling on the beach',
      // tslint:disable-next-line:max-line-length
      'https://img.grouponcdn.com/deal/jtVDRd7pHmxPTbyPYLJb/ZU-700x420/v1/c700x420.jpg',
      [
        new Items('Frame', 1),
        new Items('Wheels', 2),
        new Items('Basket', 1)
      ]
    )
  ];

  getBikes() {
    return this.bikes.slice();
  }

  getBike(index: number) {
    return this.bikes[index];
  }
}
