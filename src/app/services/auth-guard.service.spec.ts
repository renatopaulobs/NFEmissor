import { HomeComponent } from './../components/home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { ComponentFixture, TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { routes } from './../app-routing.module';

import { MatToolbarModule, MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

describe('AuthGuard', () => {
    let service: AuthService;
    let router: Router;
    let location: Location;

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
                ReactiveFormsModule,
                MatProgressSpinnerModule,
                FormlyModule.forRoot(),
                FormlyMaterialModule,
                BrowserAnimationsModule,
            ],
            providers: [AuthService]
        }).compileComponents();
        service = TestBed.get(AuthService);

        location = TestBed.get(Location);
        router = TestBed.get(Router);
        router.initialNavigation();
    }));

    afterEach(() => {
        localStorage.removeItem('token');
        service = null;
    });

    it('should return true from canActivate when user is authenticated', () => {
        inject([AuthGuard], (authGuard) => {
            spyOn(service, 'isAuthenticated').and.returnValue(true);
            expect(authGuard.canActivate()).toBeTruthy();
            expect(service.isAuthenticated).toHaveBeenCalled();
        });
    });

    it(`should navigate to /login when canActivate is false`, async(() => {
        inject([AuthGuard], (authGuard) => {
            spyOn(service, 'isAuthenticated').and.returnValue(false);
            authGuard.canActivate();
            expect(location.path()).toBe('/login');
            expect(service.isAuthenticated).toHaveBeenCalled();
        });
    }));

    it('should return false from canActivate when user is not authenticated', () => {
        inject([AuthGuard], (authGuard) => {
            spyOn(service, 'isAuthenticated').and.returnValue(true);
            expect(authGuard.canActivate()).toBeFalsy();
            expect(service.isAuthenticated).toHaveBeenCalled();
        });
    });
});
