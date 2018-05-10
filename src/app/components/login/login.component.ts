import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AccountProvider } from './../../providers/account.provider';
import { AuthService } from './../../services/auth.service';

import { AuthenticationModel } from '../../models/authentication.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup;
  authentication: AuthenticationModel;
  authenticationFields: Array<FormlyFieldConfig>;

  loading: boolean;

  constructor(private auth: AuthService, private router: Router, private accountProvider: AccountProvider, public snackBar: MatSnackBar) {
    this.authenticationForm = new FormGroup({});
    this.authentication = new AuthenticationModel();
    this.authenticationFields = this.authentication.formFields();
    this.loading = false;
  }

  ngOnInit() {
    this.auth.logout();
  }

  submitAuthenticationForm(authentication: AuthenticationModel) {
    this.loading = true;

    this.accountProvider.Authenticate(authentication)
        console.log();
        this.auth.saveToken("12345");
        this.snackBar.open('Usuário autenticado', '', { duration: 1000 });
        this.loading = false;
        this.router.navigate(['/home']);
      
  }

}
