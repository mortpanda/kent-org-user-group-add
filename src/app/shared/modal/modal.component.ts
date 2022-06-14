import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  userAddAction: boolean = false;
  groupAddAction: boolean = false;
  selectedMessage: any;
  constructor(
    private DataService: DataService,

  ) { }

  async ngOnInit() {
    this.DataService.currentMessage.subscribe(message => (this.selectedMessage = message));
    // alert(this.selectedMessage)
    await this.processData(this.selectedMessage);
  }


  async processData(action) {

    switch (action) {
      case "addUser": {
        this.userAddAction = true;
        this.groupAddAction = false;
        
        break;
      }
      case "addGroup": {
        this.userAddAction = false;
        this.groupAddAction = true;
        
        break;
      }
    }
  }


}
