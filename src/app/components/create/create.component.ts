import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ],
      unit_address: ['', Validators.required]


   });
  }

  addAdUnit(unit_name, unit_price, unit_address) {
    this.adunitservice.addAdUnit(unit_name, unit_price, unit_address);

    console.log(unit_name);

    console.log(unit_price);

  console.log(unit_address);

}
  ngOnInit() {
  }

}
