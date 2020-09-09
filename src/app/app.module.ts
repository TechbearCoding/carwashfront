import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { PricesComponent } from './prices/prices.component';
import { TimetableComponent } from './timetable/timetable.component';
import { JobsDoneComponent } from './jobs-done/jobs-done.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitComponent } from './submit/submit.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminView } from './adminView/adminView.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    ServiceInfoComponent, 
    PricesComponent,
    TimetableComponent,
    JobsDoneComponent,
    ContactsComponent,
    FooterComponent,
    SubmitComponent,
    HeaderComponent,
    LoginComponent,
    AdminView,
    TimePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
