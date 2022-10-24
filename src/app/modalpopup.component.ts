import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalpopup',
  template: `
            <div class="card-body middle">
                <!-- CLassic modal -->
                <button type="button" class="btn btn-primary mr-1" (click)="classicModal.show()">For Hire</button>
                <!-- Small modal -->
                <button type="button" class="btn btn-primary mx-4" (click)="smModal.show()">About</button>
                <!-- Small modal -->
                <div bsModal #smModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm border border-dark">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">About</h4>
                                <button type="button" class="close" aria-label="Close" (click)="smModal.hide()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                One of my seed templates for prototyping and quick projects.
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Classc modal -->
                <div class="modal fade" bsModal #classicModal="bs-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Classic modal</h4>
                                <button type="button" class="close" aria-label="Close" (click)="classicModal.hide()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `,
  styles: [  `
  .middle {
    position: absolute;
    bottom: 30%;
    left: 0;
    width: 100%;
    /* background: #232323; */
    text-align: center;
  }
    `]
})
export class ModalpopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
