import { Route } from '@angular/router';
import { VINCULACION_INTEGRACION_ROUTE } from './vinculacion-integracion/vinculacion-integracion.route';
import { ProcesosComponent } from './procesos.component';

export const PROCESOS_ROUTE: Route = {
  path: 'proceso',
  component: ProcesosComponent,
  children: [
    VINCULACION_INTEGRACION_ROUTE
  ],
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
