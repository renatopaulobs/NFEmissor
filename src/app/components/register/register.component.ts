import { AccountProvider } from './../../providers/account.provider';
import { MatSnackBar } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RegistrationModel } from './../../models/registration.model';
import { PasswordChangeModel } from './../../models/passwordChange.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registration: RegistrationModel;
  registrationFields: Array<FormlyFieldConfig>;

  changePassForm: FormGroup;
  changePass: PasswordChangeModel;
  changePassFields: Array<FormlyFieldConfig>;

  panelOpenState: boolean = false;


  constructor(private accountProvider: AccountProvider, public snackBar: MatSnackBar) {
    this.registrationForm = new FormGroup({});
    this.registration = new RegistrationModel();
    this.registrationFields = this.registration.formFields();

    this.changePassForm = new FormGroup({});
    this.changePass = new PasswordChangeModel();
    this.changePassFields = this.changePass.formFields();

  }

  ngOnInit() {
  }

  submitRegistrationForm(registration: RegistrationModel) {
    this.accountProvider.Register(registration)
      .subscribe(resp => {
        console.log(resp);
        this.snackBar.open('Usuário cadatrado com sucesso', '', { duration: 1000 });
        this.registration = new RegistrationModel();
      }, err => {
        console.log(err);
        this.snackBar.open(err, '', { duration: 1000 });
      });
  }

  submitChangePassForm(changePass: PasswordChangeModel, registration: RegistrationModel) {
    this.accountProvider.Register(registration)
      .subscribe(resp => {
        console.log(resp);
        this.snackBar.open('Usuário cadatrado com sucesso', '', { duration: 1000 });
        this.changePass = new PasswordChangeModel();
      }, err => {
        console.log(err);
        this.snackBar.open(err, '', { duration: 1000 });
      });
  }

}
