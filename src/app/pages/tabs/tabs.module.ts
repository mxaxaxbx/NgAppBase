import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MaterialModule } from 'src/app/material.module';
import { TabsRoutingModule } from './tabs-routing.module';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TabsRoutingModule,
  ]
})
export class TabsModule { }
