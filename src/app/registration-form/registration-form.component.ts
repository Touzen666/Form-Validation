import { Component, OnInit, Inject } from '@angular/core';

// import {  } from 'src/app/models/produkt';
import { User } from 'src/app/models/User'
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  public title = 'Dodawanie Produktu';
  public user!: User;

  constructor() { }

  ngOnInit() { }


}