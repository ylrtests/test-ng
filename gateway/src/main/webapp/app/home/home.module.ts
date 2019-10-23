import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArmorySharedModule } from 'app/shared/shared.module';
import { ArmoryProcesoModule } from './procesos/procesos.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
@NgModule({
  imports: [ArmorySharedModule, ArmoryProcesoModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class ArmoryHomeModule { }
