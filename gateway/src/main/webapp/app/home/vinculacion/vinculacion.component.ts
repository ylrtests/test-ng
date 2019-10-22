import { Component, OnInit, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-vinculacion',
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.scss', './vinculacion-tools.component.scss']
})
export class VinculacionComponent implements OnInit, AfterViewInit, OnDestroy {
 
  modalElements = {
    first: [
      { title: 'Descripción de cargo', url: 'www.google.com' },
      { title: 'Ficha de selección', url: 'www.google.com' },
      { title: 'Formato de entrevista', url: 'www.google.com' },
    ],
    second:[
      { title: 'Matriz de entrenamiento', url: 'www.google.com' },
      { title: 'Verificación del proceso', url: 'www.google.com' },
      { title: 'Encuesta de satisfacción', url: 'www.google.com' },
    ]
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private modalService: NgbModal) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
    this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card").style.padding = '0';
  }

  ngOnDestroy() {
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body, 'style')
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card"), 'style')
    this.modalService.dismissAll();
  }

  open(modalTools) {
    this.modalService.open(modalTools, { windowClass: 'toolbox' });
  }

}
