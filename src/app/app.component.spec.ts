import { RegisterComponent } from './components/register/register.component';
import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

import { MatToolbarModule, MatTabsModule, MatButtonModule, MatSnackBarModule, MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthService } from './services/auth.service';
import { AccountProvider } from './providers/account.provider';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let location: Location;
  let router: Router;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule,
        MatToolbarModule,
        MatButtonModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatIconModule,
      ],
      providers: [AuthService, AccountProvider]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);

    location = TestBed.get(Location);
    router = TestBed.get(Router);
    router.initialNavigation();
  }));

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('should create the AppComponent', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have the <router-outlet>`, async(() => {
    const compiled = fixture.debugElement.nativeElement.querySelector('router-outlet');
    expect(compiled).not.toBeNull();
  }));

  it(`should navigate to /login`, fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/login');
  }));

});
