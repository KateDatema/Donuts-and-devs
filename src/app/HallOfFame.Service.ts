//Helps us fetch external data, post to it,, etc
import { HttpClient } from '@angular/common/http';
//Calling in our HallofFame class so we can use it
import {HallOfFame} from './HallOfFame';
//Injectable is use to define a class as a service, Injects are data structues that store instructions detaling where and how serice form.
import { Inject, Injectable } from '@angular/core';
import { HOFComplete } from './HallOfFameComplete';


//This means that we can you use this other places, root means its visible throughout the application
@Injectable({
    providedIn: 'root'
})

export class HallOfFameService {
    //We generally want to keep our apis hidden so we use private, making http into a HttpClients lets us use of of the HttpClients methods
    constructor(private http: HttpClient) {}
    
    //declaring our baseURL as a string because we are using typescript 
    baseURL: string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json"

    //Creating a method to call the API
    getDonuts():any {
        //we are saying this class's HttpClient needs to go get the HOFComplete objects from the URL that we gave it
        return this.http.get<HOFComplete>(this.baseURL);
    }
}
