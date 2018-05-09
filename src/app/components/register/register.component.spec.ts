import { MatSnackBarModule } from '@angular/material';
import { AccountProvider } from './../../providers/account.provider';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule,
        BrowserAnimationsModule
      ],
      providers: [AccountProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
  });

  it('should create the RegisterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the FormGroup', async(() => {
    const register = fixture.debugElement.componentInstance;
    expect(register.registrationForm).toBeDefined();
  }));

  it('should initialize the AuthenticationModel', async(() => {
    const register = fixture.debugElement.componentInstance;
    expect(register.registration).toBeDefined();
  }));

  it('should initialize the AuthenticationFields', async(() => {
    const register = fixture.debugElement.componentInstance;
    expect(register.registrationFields).toBeDefined();
  }));

});
