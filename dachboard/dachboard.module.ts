import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DachboardRoutingModule } from './dachboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    DachboardRoutingModule
  ]
})
export class DachboardModule { }
