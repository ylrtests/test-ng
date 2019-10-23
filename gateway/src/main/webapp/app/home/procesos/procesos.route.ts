import { Route } from '@angular/router';
import { VINCULACION_INTEGRACION_ROUTE } from './vinculacion-integracion/vinculacion-integracion.route';

export const PROCESOS_ROUTE: Route = {
  path: 'proceso',
  children: [
    VINCULACION_INTEGRACION_ROUTE,
    { path: '', pathMatch: 'full', redirectTo: '3'}
  ],
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
