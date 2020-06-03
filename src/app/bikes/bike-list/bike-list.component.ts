import { Component, OnInit } from '@angular/core';
import {Bike} from '../bike.model';
import {BikeService} from '../bike.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
bikes: Bike[];

  constructor(private bikeService: BikeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bikes = this.bikeService.getBikes();
  }

  onNewBike() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
