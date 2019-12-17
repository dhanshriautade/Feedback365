import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {CardModule} from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { EmpFeedbackComponent } from './components/emp-feedback/emp-feedback.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import { ToastrModule } from 'ngx-toastr';
import {DialogModule} from 'primeng/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    AdminComponent,
    HomeComponent,
    EmpFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
    PanelModule,
    NgxPaginationModule,
    OverlayPanelModule,
    DialogModule,
    CardModule,
    FormsModule,
    AutoCompleteModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      preventDuplicates : true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
