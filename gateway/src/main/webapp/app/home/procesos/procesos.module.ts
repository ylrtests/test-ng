import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PROCESOS_ROUTE } from './procesos.route';

import { ArmorySharedModule } from 'app/shared/shared.module';
import { ProcesosComponent } from './procesos.component';
import { VinculacionIntegracionComponent } from './vinculacion-integracion/vinculacion-integracion.component';
import { VinculacionComponent } from './vinculacion-integracion/vinculacion/vinculacion.component';
import { IntegracionComponent } from './vinculacion-integracion/integracion/integracion.component';

@NgModule({
    imports: [ArmorySharedModule, RouterModule.forChild([PROCESOS_ROUTE])],
    declarations: [ProcesosComponent, VinculacionIntegracionComponent, VinculacionComponent, IntegracionComponent, ProcesosComponent]
})
export class ArmoryProcesoModule { }
