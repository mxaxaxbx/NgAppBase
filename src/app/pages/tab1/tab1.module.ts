import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1.component';
import { MaterialModule } from 'src/app/material.module';
import { Tab1RoutingModule } from './tab1-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [Tab1Component],
  imports: [
    CommonModule,
    MaterialModule,
    Tab1RoutingModule,
    ComponentsModule,
  ]
})
export class Tab1Module { }
