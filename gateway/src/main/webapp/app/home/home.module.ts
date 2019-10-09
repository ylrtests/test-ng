import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArmorySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { VINCULACION_ROUTE } from './vinculacion/vinculacion.route';
import { HomeComponent } from './home.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';

@NgModule({
  imports: [ArmorySharedModule, RouterModule.forChild([HOME_ROUTE, VINCULACION_ROUTE])],
  declarations: [HomeComponent, VinculacionComponent]
})
export class ArmoryHomeModule {}
