import { Route } from '@angular/router';

import { VinculacionIntegracionComponent } from './vinculacion-integracion.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { IntegracionComponent } from './integracion/integracion.component';
import { DefVinculacionIntegracionComponent } from './def-vinculacion-integracion/def-vinculacion-integracion.component'


export const VINCULACION_INTEGRACION_ROUTE: Route = {
    path: '3',
    children: [
        { path: 'vinculacion', component: VinculacionComponent },
        { path: 'integracion', component: IntegracionComponent },
        { path: 'definiciones', component: DefVinculacionIntegracionComponent },
        { path: '', component: VinculacionIntegracionComponent, pathMatch: 'full' }
    ]
};
