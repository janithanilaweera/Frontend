import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WholesellerComponent } from './wholeseller/wholeseller.component';
import { ProducerComponent } from './producer/producer.component';
import { RegisterUserComponent } from './register-user/register-user.component';


import {HttpClientModule} from '@angular/common/http';

import { from } from 'rxjs';

import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@Angular/material/input';
import { MatCardModule}from "@Angular/material/card";
import{MatTabsModule} from '@Angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@Angular/material/checkbox';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WholesellerComponent,
    ProducerComponent,
    RegisterUserComponent,
    ContactComponent,
    SignupComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        CdkScrollableModule,
        TextFieldModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
