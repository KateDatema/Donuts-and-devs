
import { Component, OnInit, Inject, Input } from '@angular/core';
//Inporting Donut Services so we can use it's methods to call the API
import { DonutService } from '../Donut.Service';
// Importing the class Donuts
import {Donut} from '../Donut';
import { Donuts } from '../Donuts';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
  //This shit won't work with out this provider
  providers: [DonutService]
})
export class DonutDetailComponent {
  //we making a DonutService Object (I think)
  constructor(private donutsApiObj: DonutService) {
    this.getDonutDetails("1");
  }

  
  //need to change this later but it will work for now 
  num:string = '1';
  //we are getting our donut
  donut: Donut | null | undefined = this.donutsApiObj.getDonutDetails(this.num)
  donuts: Donuts = {} as Donuts

  getDonutDetails(num:string) {
    let response = this.donutsApiObj.getDonutDetails(num);
    console.log(response);
    let output = response.subscribe();
    
  }

}
