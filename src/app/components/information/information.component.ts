import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { InformationService } from '../information.service';
import { Information } from './information.model' ;
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  @ViewChild('f') informationForm: NgForm;
  private userData: Information[] = [];
  private errorMessage: any = '';

  constructor(private informationService: InformationService) {
  }

  ngOnInit() {
    this.getDatabaseInfo();
  }

  getDatabaseInfo() {
    this.informationService.getData()
      .subscribe(
        userData => this.userData = userData,
        error => this.errorMessage = <any>error);
  }


  onSubmit(form: any) {
    console.log('++++++++++++++information', form.value)
    this.informationService.insertInfo(form.value);
  }
/*
//before using Observable
  userInfo() {
    this.informationService.getInfo().subscribe(res => {
      console.log('dashboard', res);
    });
  }
*/
}

