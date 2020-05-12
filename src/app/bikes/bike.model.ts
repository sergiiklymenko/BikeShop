import {Item} from '../shared/item.model';

export class Bike {
  public name: string;
  public description: string;
  public imagePath: string;
  public items: Item[];

  constructor(name: string, desc: string, imagePath: string, item: Item[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.items = item;
  }
}
