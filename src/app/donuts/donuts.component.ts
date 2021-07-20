import { Component, OnInit, Inject, Input  } from '@angular/core';
import { DonutService } from '../Donut.Service';
import {Donut} from '../Donut';
import { Donuts } from '../Donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
  providers: [DonutService]
})


export class DonutsComponent implements OnInit {

  constructor(private donutsApiObj: DonutService) { this.getDonuts()}

  getDonuts() {
    let response = this.donutsApiObj.getDonuts();
    console.log(response)
  }
 
  donuts: Donuts | null | undefined = this.donutsApiObj.getDonuts()

  showDonuts() 
  { 
    this.donutsApiObj.getDonuts()
        .subscribe((data:Donuts) => this.donuts = 
        {
          count: data.count,
          results: data.results,
        });
  }

  ngOnInit(): void {
  }

}
