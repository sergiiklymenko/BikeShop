import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;

  defaultSize = 'small';
  desc = '';
  genders = ['male', 'female'];
  defaultGender = 'male'

  constructor() {
  }

  ngOnInit() {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

}
