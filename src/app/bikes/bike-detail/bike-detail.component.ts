import {Component, Input, OnInit} from '@angular/core';
import {BikeService} from '../bike.service';
import {Bike} from '../bike.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  bike: Bike;
  id: number;

  constructor(private bikeService: BikeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.bike = this.bikeService.getBike(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.bikeService.addItemsToShoppingList(this.bike.items);
  }

  onEditBike() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
