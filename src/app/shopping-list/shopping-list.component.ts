import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Item[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.slService.getItems();
    this.slService.itemsChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
  }
}
