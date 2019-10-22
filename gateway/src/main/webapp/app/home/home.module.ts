import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArmorySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { VINCULACION_ROUTE } from './vinculacion/vinculacion.route';
import { ALINEACION_ROUTE } from './alineacion/alineacion.route';
import { HomeComponent } from './home.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { AlineacionComponent } from './alineacion/alineacion.component';

@NgModule({
  imports: [ArmorySharedModule, RouterModule.forChild([HOME_ROUTE, VINCULACION_ROUTE, ALINEACION_ROUTE])],
  declarations: [HomeComponent, VinculacionComponent, AlineacionComponent]
})
export class ArmoryHomeModule {}
