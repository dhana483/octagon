import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { InformationService } from '../../information.service';
import { Information } from '.././information.model' ;
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-insert-form',
  templateUrl: './user-insert-form.component.html',
  styleUrls: ['./user-insert-form.component.css']
})
export class UserInsertFormComponent implements OnInit {
  @ViewChild('f') informationForm: NgForm;
  constructor(private informationService: InformationService) { }

  ngOnInit() {
  }
  onSubmit(form: any) {
    console.log('++++++++++++++information', form.value)
    this.informationService.insertInfo(form.value);
  }
}
