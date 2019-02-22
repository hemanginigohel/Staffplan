import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { AuthenticateUserService } from "../../../../authenticate-user.service";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  label:any;
  access_type:Array<any>;
  role: boolean = false;
  combination: boolean = false;
  create_user:FormGroup;
  custom_label:FormGroup;
  create_role:FormGroup;
  constructor(private service:AuthenticateUserService) { }
  
  ngOnInit() {
    this.create_user = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      middlename: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      role:new FormControl('',[Validators.required]),
      office:new FormControl(),
      region:new FormControl(),
      division:new FormControl(),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      company:new FormControl('',[Validators.required]),
      zip:new FormControl('',[Validators.required])
    });
    this.custom_label=new FormGroup({
      tablename:new FormControl('',[Validators.required]),
      fieldname:new FormControl('',[Validators.required]),
      labelname:new FormControl('',[Validators.required])
    });
    this.create_role=new FormGroup({
      rolename:new FormControl('',[Validators.required]),
      accesstype:new FormControl('',[Validators.required])
    });
  }

  expand_role() {
    this.role = true;
    console.log(this.role);
  }
  expand_combination() {
    this.combination = true;
    this.service.get_access_type()
    .subscribe(response=>{
      this.label=response;
      this.access_type=this.label.data;
      console.log(this.label,"label");
      console.log(this.access_type,"aceessssss typeeee");      
    })
    
  }
  onsubmit() {
    console.log(this.create_user.value);
  }
}
