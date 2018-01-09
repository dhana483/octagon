
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
  posts: any;
  @Input() information: Information;
  constructor(private informationService: InformationService) {}

  ngOnInit() {}

  onSubmit(form: any) {
    console.log('++++++++++++++information', form.value)
    this.informationService.insertInfo(form.value);
  }
  }
