import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { InformationService } from '../../information.service';
import { Information } from '.././information.model' ;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  private userData: Information[] = [];
  private errorMessage: any = '';

  constructor(private informationService: InformationService) { }

  ngOnInit() {
    this.getDatabaseInfo();
  }

  getDatabaseInfo() {
    this.informationService.getData()
      .subscribe(
        userData => this.userData = userData,
        error => this.errorMessage = <any>error);
  }

}
