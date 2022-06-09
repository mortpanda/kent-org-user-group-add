import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../menu-list/menu-list.service';
import { ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenubarComponent implements OnInit {
  smallScreen: boolean;
  mainMenu;
  constructor(
    private MenuListService: MenuListService,
    private breakpointObserver: BreakpointObserver,

  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });


    this.mainMenu = this.MenuListService.itemMenubar;
  }

  ngOnInit(): void {
  }

}
