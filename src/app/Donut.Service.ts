//Helps us fetch external data, post to it,, etc
import { HttpClient } from '@angular/common/http';
//Calling in our Donuts class so we can use it
import {Donuts} from './Donuts';
import {Donut} from './Donut';
//Injectable is use to define a class as a service, Injects are data structues that store instructions detaling where and how serice form.
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//This means that we can you use this other places, root means its visible throughout the application
@Injectable({
    providedIn: 'root'
})

export class DonutService {
    //We generally want to keep our apis hidden so we use private, making http into a HttpClients lets us use of of the HttpClients methods
    constructor(private http: HttpClient) {}
    
    //declaring our basURL as a string because we are using typescript 
    baseURL: string = "https://grandcircusco.github.io/demo-apis/donuts.json";
    //I probably could have just put these two lines in one URL - but that's something I can play around with later
    detailsURL: string = "https://grandcircusco.github.io/demo-apis/donuts/"


    //Creating a method to call the API, this will be the one that gets ALL the donuts
    getDonuts():any {
        //we are saying this class's HttpClient needs to go get the Donuts objects from the URL that we gave it
        return this.http.get<Donuts>(this.baseURL);
    }
    //Creating a method to call the API, this will be the one that gets details on the donut (and now I want a donut)
    getDonutDetails(num: string ):any {
        return this.http.get<Donuts>(this.detailsURL+num+".json");  
    }


}

