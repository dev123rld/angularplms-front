import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './dashboard/side-menu/side-menu.component';
import { CardComponent } from './dashboard/card/card.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CreateClientComponent } from './dashboard/create-client/create-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { Routes,RouterModule } from '@angular/router';
import { ClientDetailsComponent } from './dashboard/client-details/client-details.component';
import { DataTablesModule } from 'angular-datatables';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'createClient', component: CreateClientComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    CardComponent,
    HomeComponent,
    DashboardComponent,
    CreateClientComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,ToastrModule.forRoot(),HttpClientModule,
    BrowserAnimationsModule,BrowserModule,RouterModule.forRoot(routes),DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
