import { Component, OnInit } from '@angular/core';

import {IPerson} from '../person';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})


export class PersonListComponent implements OnInit {
    pageTitle : string ='Person Expertise Search'; 
    pageInfo :string = 'Some more text Info about the page ' ;
    errorMessage :string ; 
    persons: IPerson[];

    constructor(private _personService: BackendApiService) {
   }

    ngOnInit(): void {

   this._personService.getPersons()
       .subscribe(
             persons =>this.persons = persons,error => this.errorMessage = <any>error);
      
  }

}
