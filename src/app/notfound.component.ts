import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
<div class="wrapper">
    <div class="abs-center wd-xl">
        <!-- START card-->
        <div class="text-center mb-4">
            <div class="text-lg mb-3">404</div>
            <p class="lead m0">We couldn't find this page.</p>
            <p>The page you are looking for does not exists.</p>
        </div>
        <!-- <div class="input-group mb-4">
            <input class="form-control" type="text" placeholder="Try with a search" />
            <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">
                    <em class="fa fa-search"></em>
                </button>
            </span>
        </div> -->
        <ul class="list-inline text-center text-sm mb-4">
            <li class="list-inline-item">
                <a class="text-muted" [routerLink]="'/home'">Go to App</a>
            </li>
            <li class="text-muted list-inline-item">|</li>
            <li class="list-inline-item">
                <a class="text-muted" [routerLink]="'/login'">Login</a>
            </li>
            <li class="text-muted list-inline-item">|</li>
            <li class="list-inline-item">
                <a class="text-muted" [routerLink]="'/register'">Register</a>
            </li>
        </ul>
        <div class="p-3 text-center">
            <span>&copy;</span>
            <!-- <span>{{ settings.getAppSetting('year') }}</span>
            <span class="mx-2">-</span>
            <span>{{ settings.getAppSetting('name') }}</span>
            <br/>
            <span>{{ settings.getAppSetting('description') }}</span> -->
        </div>
    </div>
</div>

  `,
  styles: [`

  
  `]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
