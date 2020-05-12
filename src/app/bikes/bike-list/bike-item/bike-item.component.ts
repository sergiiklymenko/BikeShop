import {Component, Input, OnInit} from '@angular/core';
import {Bike} from '../../bike.model';
import {BikeService} from '../../bike.service';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent implements OnInit {
  @Input() bike: Bike;
  @Input() index: number;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.bikeService.bikeSelected.emit(this.bike);
  }

}
