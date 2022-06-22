import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFlagComponent } from './icon-flag.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    declarations: [IconFlagComponent],
    exports: [IconFlagComponent]
})
export class IconFlagModule { }
