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
  public fieldsNames = ["First Name", "Last Name", "Email", "Enter your gender", "Street", "Town", "Country", "Additional data"]
  constructor(public fb: FormBuilder, private registerService: RegisterService) { }
  ngOnInit() { }
  registerForm = this.fb.group({
    firstName: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-ĄąĆćĘęŁłŃńÓóŚśŹźŻż]*'),
    ])],//from myself I added validator with letters
    lastName: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-ĄąĆćĘęŁłŃńÓóŚśŹźŻż]*'),
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
    if (this.registerForm.valid && this.registerForm.dirty) {
      this.registerService.createUser(this.registerForm.value); //Save data in to the service
    } else {
      alert('Popraw formularz')//Simple error on submit of course if by some miracle it occurs ;)
    }
  }
}