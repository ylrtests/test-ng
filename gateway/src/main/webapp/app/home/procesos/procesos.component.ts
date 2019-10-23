import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-procesos',
  template: `<router-outlet></router-outlet>`,
  // Cambia color de fondo del: card y jh-card, contenedores de la plataforma.
  styles: [':host { background: #808080;}']
})
export class ProcesosComponent implements  OnInit, AfterViewInit, OnDestroy {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private modalService: NgbModal) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Añade fondo color #808080 a los elementos dentro de este modulo procesos y elimina padding a la clase jh-card usada en la plataforma
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
    this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card").style.padding = '0';
  }

  ngOnDestroy() {
    // Cuando sale de las vistas del modulo de procesos, deja los elementos por defecto para no afectar el resto de la plataforma
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body, 'style')
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card"), 'style')
    this.modalService.dismissAll();
  }


}
