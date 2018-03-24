import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidationMessageComponent } from './validation-message/validation-message.component';

@NgModule({
  imports: [
    // ng
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MaterialModule
  ],
  declarations: [
    // custom components
    ValidationMessageComponent
  ],
  exports: [
    // ng
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MaterialModule,
    FlexLayoutModule,
    // custom components
    ValidationMessageComponent
  ]
})
export class SharedModule {}
