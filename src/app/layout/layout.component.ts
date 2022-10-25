import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
<!-- <div class="wrapper">
    <app-header class="topnavbar-wrapper"></app-header>
    <app-sidebar class="aside-container"></app-sidebar>
    <app-offsidebar class="offsidebar"></app-offsidebar>
    <section class="section-container">
        <div class="content-wrapper">
            <router-outlet></router-outlet>
        </div>
    </section>
    <footer class="footer-container" app-footer></footer>
</div> -->
<router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
