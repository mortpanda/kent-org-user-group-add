import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'kent-org-user-group-add';
  smallScreen: boolean;
  constructor(
    private primengConfig: PrimeNGConfig,
    private breakpointObserver: BreakpointObserver,
    ) {
      breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small
      ]).subscribe(result => {
        this.smallScreen = result.matches;
      });
    }

  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
