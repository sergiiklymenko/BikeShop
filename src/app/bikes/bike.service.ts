import {Injectable} from '@angular/core';
import {Bike} from './bike.model';
import {Item} from '../shared/item.model';

@Injectable()
export class BikeService {

  private bikes: Bike[] = [
    new Bike(
      'Mountain King',
      'Package for fearless riders',
      'https://i.dmarge.com/2017/02/alpinestars-960x580.jpg',
      [
        new Item('Full face helmet', 1),
        new Item('Gloves', 2),
        new Item('Knee pads', 2)
      ]),
    new Bike(
      'Road Master',
      'Faster than ever',
      'https://www.whycycles.com/wp-content/uploads/2017/08/McleodC__170627_DSC03375.jpg',
      [
        new Item('Light helmet', 1),
        new Item('Jersey shorts', 1)
      ]
    )
  ];

  getBikes() {
    return this.bikes.slice();
  }
}
