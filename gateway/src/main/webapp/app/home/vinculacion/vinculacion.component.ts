import { Component, OnInit, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-vinculacion',
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.scss', './vinculacion-tools.component.scss']
})
export class VinculacionComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private modalService: NgbModal) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
    this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card").style.padding = '0';
  }

  ngOnDestroy() {
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body,'style')
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card"),'style')
  }

  open(modalTools) {
    this.modalService.open(modalTools, { windowClass: 'toolbox'});
  }

}
