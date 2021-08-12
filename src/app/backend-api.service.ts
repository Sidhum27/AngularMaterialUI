import { Injectable } from '@angular/core';
import {IPerson} from './person';
import {Http,Response } from   '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/map';

@Injectable()
export class BackendApiService {

    private _personUrl ="http://insarelle.aspdotnetlab.com/api/api1" ;


    constructor(private _http:Http) { }

    getPersons(): Observable<IPerson[]> {

        return this._http.get(this._personUrl)
                         .map((response: Response) => <IPerson[]>response.json())
                         .do(data => console.log('All : ' + JSON.stringify(data)))
                         .catch(this.handleError);


      
    }

    private handleError(error : Response){
         console.error (error); 
         return Observable.throw(error.json().error || 'Server error'); 
         

    }

}
