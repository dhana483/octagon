import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Information } from './information/information.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InformationService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private router: Router,
              private http: Http) {}
   /*
   //before using Observable
  getInfo() {
    return this.http.get('/all-records').map(res => {
      return res.json();
    });
  }
*/
  getData(): Observable<Information[]> {
    return this.http.get('/all-records')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  insertInfo(information: any) {
    return this.http.post('/insert', information)
      .subscribe((response) => {
        if (response.status === 200) {
          this.router.navigate(['/']);
        }
      });
  }

}




