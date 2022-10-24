import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  template: `

<div class="col-lg-6">
<div class="content-heading">
    <div>
        Infinite Scroll
        <small>Total items: {{sum + sum2}}</small>
    </div>
</div>
<h4>Scroll in element</h4>
<div class="row" style="height: 320px; overflow-y: auto;" infinite-scroll [infiniteScrollDistance]="2" [scrollWindow]="false" (scrolled)="onScrollDown()">
    <div class="col-md-2 col-3 mb-2" *ngFor="let i of array">
        <div class="alert alert-info text-center">Item #{{i}}</div>
    </div>
</div>
<h4>Page scroll</h4>
<div class="row" infinite-scroll [infiniteScrollDistance]="1" (scrolled)="onScrollDown2()">
    <div class="col-md-2 col-3 mb-2" *ngFor="let i of array2">
        <div class="alert alert-purple text-center">
            <h2 class="mx-3">{{i}}</h2>
        </div>
    </div>
</div>
</div>
  `,
  styles: [
  ]
})
export class InfiniteScrollComponent implements OnInit {

  array: Array<number> = [];
  sum = 100;

  array2: Array<number> = [];
  sum2 = 100;

  constructor() {
      for (let i = 0; i < this.sum; ++i) {
          this.array.push(i);
      }
      for (let i = 0; i < this.sum2; ++i) {
          this.array2.push(i);
      }
  }

  onScrollDown() {
      console.log('scrolled!!');

      // add another 20 items
      const start = this.sum;
      this.sum += 50;
      for (let i = start; i < this.sum; ++i) {
          this.array.push(i);
      }
  }

  onScrollDown2() {
      console.log('scrolled 2!!');

      // add another 20 items
      const start = this.sum2;
      this.sum2 += 50;
      for (let i = start; i < this.sum2; ++i) {
          this.array2.push(i);
      }
  }

  onScrollUp() {
      console.log('scrolled up!!');
  }

  ngOnInit() {
  }

}

