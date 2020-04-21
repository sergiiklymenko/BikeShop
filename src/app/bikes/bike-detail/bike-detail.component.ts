import {Component, OnInit} from '@angular/core';
import {BikeService} from '../bike.service';
import {Bike} from '../bike.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  bike: Bike;
  id: number;

  constructor(private bikeService: BikeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.bike = this.bikeService.getBike(this.id);
        }
      );
  }

}
