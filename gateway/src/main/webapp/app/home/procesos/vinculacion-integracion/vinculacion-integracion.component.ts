import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-vinculacion-integracion',
  templateUrl: './vinculacion-integracion.component.html',
  styleUrls: ['./vinculacion-integracion.component.scss', './vinculacion-integracion-tools.component.scss']
})
export class VinculacionIntegracionComponent implements OnInit, OnDestroy {
 
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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.modalService.dismissAll();
  }

  open(modalTools) {
    this.modalService.open(modalTools, { windowClass: 'toolbox' });
  }

}
