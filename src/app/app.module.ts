import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import {
  MatToolbarModule, MatButtonModule, MatSnackBarModule,
  MatProgressSpinnerModule, MatTabsModule, MatIconModule, 
  MatTableModule, MatCardModule, MatExpansionModule,
  MatSlideToggleModule, MatFormFieldModule, MatInputModule,
  MatCheckboxModule, MatPaginatorModule, MatSortModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AccountProvider } from './providers/account.provider';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AccountProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
