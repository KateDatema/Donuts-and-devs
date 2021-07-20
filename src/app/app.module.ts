import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

//We have to update this file so we can up the HttpClientModule (can export and import functionality to and from other NgModule)
@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  //This declares your routes for your pages
  RouterModule.forRoot([
    //{path: '', component: AppComponent, pathMatch: 'full'},
    {path: 'donut-details',  component: DonutDetailComponent},
    {path: 'donuts',  component: DonutsComponent},
  ])
  ],

  //Not sure that you actually need this but its here for good measures
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
