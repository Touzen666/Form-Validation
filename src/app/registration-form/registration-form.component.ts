import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/User'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  public title = 'Dodawanie Produktu';
  public user!: User;

  constructor(public fb: FormBuilder) { }
  ngOnInit() { }

  public genderValues = {
    male: "male",
    female: "female"
  }

  registerForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])],
    lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
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
  get country() { return this.registerForm.get('country') }
  get textArea() { return this.registerForm.get('textArea') }

  submited() {
    console.log(this.registerForm.valid);
    this.user = this.registerForm.value

    if (this.registerForm.valid && this.registerForm.dirty) {
      console.log(this.registerForm.value);
    } else {
      alert('Popraw formularz')
    }
  }
}