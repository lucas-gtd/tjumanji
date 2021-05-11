import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';

const ROUTES: Routes = [
  { path: 'home', component: AppComponent },
];

@NgModule({

  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
