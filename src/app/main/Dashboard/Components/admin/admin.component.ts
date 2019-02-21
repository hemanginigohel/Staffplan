import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  role: boolean = false;
  combination: boolean = false;
  create_user:FormGroup;
  
  constructor(private formbuilder:FormBuilder) { }
  
  ngOnInit() {
    this.create_user = new FormGroup({
      firstname: new FormControl(),
      middlename: new FormControl(),
      lastname:new FormControl(),
      role:new FormControl(),
      office:new FormControl(),
      region:new FormControl(),
      division:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
      address:new FormControl(),
      city:new FormControl(),
      company:new FormControl(),
      zip:new FormControl()
    });
  }

  expand_role() {
    this.role = true;
    console.log(this.role);
  }
  expand_combination() {
    this.combination = true;
    console.log(this.combination);
  }
  onsubmit() {
    console.log(this.create_user.value);
  }
}
