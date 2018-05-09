import { RegisterComponent } from './../register/register.component';
import { AccountProvider } from './../../providers/account.provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './../../app-routing.module';

import { AuthService } from '../../services/auth.service';

import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        HomeComponent,
        RegisterComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule,
        BrowserAnimationsModule
      ],
      providers: [AuthService, AccountProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the FormGroup', async(() => {
    const login = fixture.debugElement.componentInstance;
    expect(login.authenticationForm).toBeDefined();
  }));

  it('should initialize the AuthenticationModel', async(() => {
    const login = fixture.debugElement.componentInstance;
    expect(login.authentication).toBeDefined();
  }));

  it('should initialize the AuthenticationFields', async(() => {
    const login = fixture.debugElement.componentInstance;
    expect(login.authenticationFields).toBeDefined();
  }));

});
