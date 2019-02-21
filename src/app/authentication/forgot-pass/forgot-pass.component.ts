import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  @ViewChild('fg_form') form:any;
  constructor() { }

  ngOnInit() {
  }
  onsubmit(){
    console.log(this.form.controls.email.value);
    console.log("password reset complete.");
  } 
}
