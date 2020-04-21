import {Items} from '../shared/item.model';

export class Bike {
  public name: string;
  public description: string;
  public imagePath: string;
  public items: Items[];

  constructor(name: string, desc: string, imagePath: string, item: Items[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.items = item;
  }
}
