import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `

<div style="text-align:center" class="content">
      <h1 class="text-primary">
        {{title}}!
      </h1><!-- https://materialdesignicons.com/tag/alpha-numeric -->
    </div>
    
    <div style="text-align:center" class="middle content">
      <img width="100" alt="Angular Logo" src="assets/svg/alpha-j-box-outline.svg">
      <img width="100" alt="Angular Logo" src="assets/svg/alpha-n-box-outline.svg">
      <img width="100" alt="Angular Logo" src="assets/svg/alpha-m-box-outline.svg">

      <img width="50" alt="Angular Logo" src="assets/svg/dot.png">
      
      <img width="100" alt="Angular Logo" src="assets/svg/alpha-i-box-outline.svg">
      <img width="100" alt="Angular Logo" src="assets/svg/alpha-o-box-outline.svg">
    </div>

    <div style="text-align:center" class="content float-top">
    <span></span>
      <button style="text-align:center" type="button" class="btn btn-primary mb-3" popover="Angular 14.2 | bootstrap 5.2 | typescript 4.7.2" container="span">
        stack details
      </button>
    
    </div>
    <div style="text-align:center" class="content footer">
      <img class="pr-4 mx-5" width="75" alt="Angular Logo" src="assets/svg/angular-icon.svg">
      <img class="pr-4 mx-5" width="75" alt="Angular Logo" src="assets/svg/Bootstrap_logo.svg">
      <img class="pr-4 mx-5" width="75" alt="Angular Logo" src="assets/svg/Node.js_logo.svg">
      <img class="pr-4 mx-5" width="75" alt="Angular Logo" src="assets/svg/ts-node.png">
      <img class="pr-4 mx-5" width="75" alt="Angular Logo" src="assets/svg/typescriptlang-icon.svg">
</div>  
  `,
  styles: [

    `
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* background: #232323; */
    text-align: center;
  }

  .middle {
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    /* background: #232323; */
    text-align: center;
  }

  .float-top {
    position: absolute;
    bottom: 70%;
    left: 0;
    width: 100%;
    /* background: #232323; */
    text-align: center;
  }
    `
  ]
})
export class IntroComponent implements OnInit {

  constructor() { }
  
  title = 'Angular bootstrap seed.';

  ngOnInit(): void { }

}
