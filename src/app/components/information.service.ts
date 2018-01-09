import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InformationService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private router: Router,
              private http: Http) {}
  getInfo() {}

  insertInfo(information: any) {
    return this.http.post('/insert', information)
      .subscribe((response) => {
        if (response.status === 200) {
          this.router.navigate(['/']);
        }
      });

  }

}

