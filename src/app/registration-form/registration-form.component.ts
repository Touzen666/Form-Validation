import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  public title = 'Register Form';
  public user: any;

  constructor(public fb: FormBuilder, private registerService: RegisterService) { }
  ngOnInit() { }

  registerForm = this.fb.group({
    firstName: ['', Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3)
    ])],//from myself I added validator with letters
    lastName: ['', Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3)
    ])],
    email: ['', Validators.compose([
      Validators.required,
      Validators.email
    ])],
    gender: ['', Validators.required],
    street: ['', Validators.required],
    town: ['', Validators.required],
    country: ['', Validators.required],
    textArea: [''],
  })

  get firstName() { return this.registerForm.get('firstName') }
  get lastName() { return this.registerForm.get('lastName') }
  get email() { return this.registerForm.get('email') }
  get gender() { return this.registerForm.get('gender') }
  get street() { return this.registerForm.get('street') }
  get town() { return this.registerForm.get('town') }
  get country() { return this.registerForm.get('country') }
  get textArea() { return this.registerForm.get('textArea') }

  submited() {
    console.log("Is it RegisterationFormComponent valid? ==>" + this.registerForm.valid);

    if (this.registerForm.valid && this.registerForm.dirty) {
      console.log("This what creat the RegisterationFormComponent:");
      console.log(this.registerForm.value);
      //this.mappingData(); //Mapping data that as you asked
      this.registerService.createUser(this.registerForm.value); //Save data in to the service
    } else {
      alert('Popraw formularz')//Simple error on submit of course if by some miracle it occurs ;)
    }
  }

}