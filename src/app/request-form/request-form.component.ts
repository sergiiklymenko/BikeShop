import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  requestForm: FormGroup;
  bikeSizes: ['Small', 'Medium', 'Large'];
  forbiddenNick = 'Test'
  genders = ['male', 'female'];

  constructor() {
  }

  ngOnInit() {
    this.requestForm = new FormGroup({
      userData: new FormGroup({
        nickname: new FormControl(null, [Validators.required, this.forbiddenNicknames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      size: new FormArray([]),
      gender: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.requestForm);
  }

  forbiddenNicknames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNick.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }


}
