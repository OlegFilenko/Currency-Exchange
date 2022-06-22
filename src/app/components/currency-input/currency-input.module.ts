import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyInputComponent } from './currency-input.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { IconFlagModule } from '../icon-flag/icon-flag.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    IconFlagModule
  ],
  declarations: [CurrencyInputComponent],
  exports: [CurrencyInputComponent]
})
export class CurrencyInputModule { }
