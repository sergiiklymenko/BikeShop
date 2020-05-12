import {Component, Input, OnInit} from '@angular/core';
import {BikeService} from '../bike.service';
import {Bike} from '../bike.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  @Input() bike: Bike;
  id: number;

  constructor() {
  }

  ngOnInit() {
  }

}
