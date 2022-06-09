import { Component, OnInit } from '@angular/core';
import {MenuListService} from '../menu-list/menu-list.service';
import { ViewEncapsulation } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenubarComponent implements OnInit {
mainMenu;
  constructor(
    private MenuListService:MenuListService,
  ) { 
    this.mainMenu = this.MenuListService.itemMenubar;
  }

  ngOnInit(): void {
  }

}
