import { UsernameValidators, PasswordValidators } from './register.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public user: User = new User();

  constructor(public fb: FormBuilder) {
    this.userForm = fb.group({
      username: ['',
        [Validators.required, Validators.minLength(6), UsernameValidators.cannotContainNumber],
        [UsernameValidators.shouldBeUnique]
      ],
      email: ['',
        [Validators.required, Validators.email]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required]]
    }, {
        validator: PasswordValidators.shouldEqualToPassowrd
      });

    this.userForm.valueChanges.subscribe((value: string) => console.log(value));
    this.username.valueChanges.subscribe((value: string) => console.log(value));
  }

  ngOnInit() {
  }

  doRegister() {

  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get repeatPassword() {
    return this.userForm.get('repeatPassword');
  }
}
